<?php

namespace App\Http\Controllers;

use App\Models\Plan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use App\Services\MoolreService;
use Inertia\Inertia;

class MoolrePaymentController extends Controller
{
    protected $moolreService;

    public function __construct(MoolreService $moolreService)
    {
        $this->moolreService = $moolreService;
    }

    /**
     * Step 1: Initiate Moolre payment - Redirect to Web POS
     */
    public function pay(Request $request)
    {
        $request->validate([
            'plan_id' => 'required|exists:plans,id',
            'billing_cycle' => 'required|in:monthly,yearly',
            'coupon_code' => 'nullable|string',
        ]);

        try {
            $plan = Plan::findOrFail($request->plan_id);
            $user = Auth::user();

            // Calculate price
            $price = $request->billing_cycle === 'yearly' ? $plan->yearly_price : $plan->price;
            $couponCode = $request->coupon_code;
            if ($couponCode) {
                $pricing = calculatePlanPricing($plan, $couponCode);
                $price = $request->billing_cycle === 'yearly' ? $pricing['yearly_price'] : $pricing['monthly_price'];
            }

            // Get Credentials
            $superAdminId = \App\Models\User::where('type', 'superadmin')->first()?->id;
            $settings = getPaymentSettings($superAdminId);

            if (empty($settings['moolre_username']) || empty($settings['moolre_public_key']) || empty($settings['moolre_account_number'])) {
                return back()->withErrors(['error' => __('Moolre payment gateway is not configured')]);
            }

            // Generate Link
            $externalRef = 'plan_' . $user->id . '_' . $plan->id . '_' . $request->billing_cycle . '_' . time();

            $credentials = [
                'username' => $settings['moolre_username'],
                'public_key' => $settings['moolre_public_key'],
                'account_number' => $settings['moolre_account_number'],
            ];

            $linkData = $this->moolreService->generateGenericLink($credentials, [
                'type' => 1,
                'amount' => number_format((float) $price, 2, '.', ''),
                'email' => $user->email,
                'externalref' => $externalRef,
                // 'payer' => $request->phone_number, // Optional, can skip
                'callback' => route('moolre.global.webhook'),
                'redirect' => route('moolre.payment.return', ['reference' => $externalRef]),
                'reusable' => "0",
                'currency' => 'GHS',
                'accountnumber' => $settings['moolre_account_number'],
                'description' => $plan->name . ' (' . ucfirst($request->billing_cycle) . ')',
            ]);

            // Save session
            session([
                'moolre_payment' => [
                    'external_ref' => $externalRef,
                    'user_id' => $user->id,
                    'plan_id' => $plan->id,
                    'billing_cycle' => $request->billing_cycle,
                    'coupon_code' => $couponCode,
                    'amount' => $price,
                    'moolre_username' => $settings['moolre_username'],
                    'moolre_public_key' => $settings['moolre_public_key'],
                    'moolre_account_number' => $settings['moolre_account_number'],
                ]
            ]);

            // Redirect
            return Inertia::location($linkData['authorization_url']);

        } catch (\Exception $e) {
            Log::error('Moolre Payment Error: ' . $e->getMessage());
            return back()->withErrors(['error' => __('Payment initiation failed: ') . $e->getMessage()]);
        }
    }

    public function returnPage(Request $request, $reference)
    {
        $paymentInfo = session('moolre_payment');
        if (!$paymentInfo || $paymentInfo['external_ref'] !== $reference) {
            return redirect()->route('plans.index')->withErrors(['error' => 'Invalid payment session']);
        }

        return inertia('payments/moolre-pending', [
            'payment' => [
                'external_ref' => $reference,
                'amount' => $paymentInfo['amount'],
                'phone' => 'Web POS', // Placeholder
            ],
            // Pass flag to frontend to know it's a redirect return (optional, UI might adapt)
            'isRedirectReturn' => true
        ]);
    }

    // Checking status
    public function checkStatus(Request $request)
    {
        $paymentInfo = session('moolre_payment');

        if (!$paymentInfo) {
            return response()->json(['status' => 'no_payment', 'message' => 'No pending payment']);
        }

        // Verify with Moolre
        try {
            $credentials = [
                'username' => $paymentInfo['moolre_username'],
                'public_key' => $paymentInfo['moolre_public_key'],
                'account_number' => $paymentInfo['moolre_account_number'],
            ];

            $status = $this->moolreService->checkGenericStatus($credentials, $paymentInfo['external_ref']);

            if ($status === 'success') {
                // Process Success logic (Code reused from valid verification)
                processPaymentSuccess([
                    'user_id' => $paymentInfo['user_id'],
                    'plan_id' => $paymentInfo['plan_id'],
                    'billing_cycle' => $paymentInfo['billing_cycle'],
                    'payment_method' => 'moolre',
                    'coupon_code' => $paymentInfo['coupon_code'] ?? null,
                    'payment_id' => $paymentInfo['external_ref'],
                ]);

                session()->forget('moolre_payment');

                return response()->json([
                    'status' => 'success',
                    'message' => 'Payment verified!'
                ]);
            }

            if ($status === 'failed') {
                session()->forget('moolre_payment');
                return response()->json(['status' => 'failed', 'message' => 'Payment failed or cancelled']);
            }

        } catch (\Exception $e) {
            // Keep pending on error
        }

        return response()->json([
            'status' => 'pending',
            'message' => 'Waiting for payment...',
            'external_ref' => $paymentInfo['external_ref'],
        ]);
    }

    /**
     * Handle success redirect
     */
    public function success(Request $request)
    {
        session()->forget('moolre_payment');
        return redirect()->route('plans.index')->with('success', __('Payment successful! Your plan has been activated.'));
    }

    /**
     * Handle Moolre webhook/callback
     */
    public function callback(Request $request)
    {
        Log::info('Moolre Plan Callback', $request->all());

        $data = $request->all();
        $status = $data['status'] ?? null;
        $externalRef = $data['externalref'] ?? $data['external_ref'] ?? null;

        $isSuccess = in_array(strtolower((string) $status), ['successful', 'success', '1', 'paid', 'approved', 'completed'])
            || (isset($data['code']) && in_array($data['code'], ['TP00', 'TP01']));

        if ($isSuccess && $externalRef) {
            $parts = explode('_', $externalRef);
            if (count($parts) >= 4 && $parts[0] === 'plan') {
                $userId = $parts[1];
                $planId = $parts[2];
                $billingCycle = $parts[3];

                processPaymentSuccess([
                    'user_id' => $userId,
                    'plan_id' => $planId,
                    'billing_cycle' => $billingCycle,
                    'payment_method' => 'moolre',
                    'coupon_code' => null,
                    'payment_id' => $externalRef,
                ]);

                Log::info('Moolre plan payment success', ['user_id' => $userId, 'plan_id' => $planId]);
            }
        }

        return response()->json(['status' => 'success']);
    }

    /**
     * Manually confirm payment (user clicks "I've completed payment")
     */
    public function confirmPayment(Request $request)
    {
        $paymentInfo = session('moolre_payment');

        if (!$paymentInfo) {
            return response()->json([
                'success' => false,
                'message' => __('No pending payment found. Please start a new payment.')
            ]);
        }

        try {
            // SECURITY PATCH: Verify status with Moolre API before confirming
            // Do not trust the user click blindly.
            $response = Http::withHeaders([
                'X-API-USER' => $paymentInfo['moolre_username'],
                'X-API-PUBKEY' => $paymentInfo['moolre_public_key'],
                'Content-Type' => 'application/json',
            ])->post('https://api.moolre.com/open/transact/status', [
                        'externalref' => $paymentInfo['external_ref'],
                        'accountnumber' => $paymentInfo['moolre_account_number'],
                    ]);

            $data = $response->json();
            Log::info('Moolre Platform Manual Verify Response', ['data' => $data]);

            $status = $data['status'] ?? null;
            $code = $data['code'] ?? '';

            // Strict Verification
            $isSuccess = in_array(strtolower((string) $status), ['successful', 'success', '1', 'paid', 'approved', 'completed'])
                || in_array($code, ['TP00', 'TP01']);

            if (!$isSuccess) {
                return response()->json([
                    'success' => false,
                    'message' => __('Payment verification failed. Please ensure you have approved the prompt on your phone. Msg: ') . ($data['message'] ?? 'Pending')
                ]);
            }

            // Process the payment as successful ONLY if verified
            processPaymentSuccess([
                'user_id' => $paymentInfo['user_id'],
                'plan_id' => $paymentInfo['plan_id'],
                'billing_cycle' => $paymentInfo['billing_cycle'],
                'payment_method' => 'moolre',
                'coupon_code' => $paymentInfo['coupon_code'] ?? null,
                'payment_id' => $paymentInfo['external_ref'],
            ]);

            // Clear the session
            session()->forget('moolre_payment');

            Log::info('Moolre payment manually confirmed (Verified)', [
                'user_id' => $paymentInfo['user_id'],
                'plan_id' => $paymentInfo['plan_id'],
                'external_ref' => $paymentInfo['external_ref'],
            ]);

            return response()->json([
                'success' => true,
                'message' => __('Payment confirmed! Your plan has been activated.')
            ]);

        } catch (\Exception $e) {
            Log::error('Moolre manual confirm error: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => __('Error confirming payment: ') . $e->getMessage()
            ]);
        }
    }
}
