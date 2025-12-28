<?php

namespace App\Http\Controllers\Store;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Store;
use App\Services\OrderService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class MoolreController extends Controller
{
    public function __construct(protected OrderService $orderService)
    {
    }

    /**
     * Show payment form to collect phone number
     */
    public function showPaymentForm(Request $request, $storeSlug, $orderNumber)
    {
        $store = Store::where('slug', $storeSlug)->firstOrFail();
        $order = Order::where('order_number', $orderNumber)
            ->where('store_id', $store->id)
            ->firstOrFail();

        if ($order->payment_status === 'paid') {
            return redirect()->route('store.order-confirmation', [
                'storeSlug' => $storeSlug,
                'orderNumber' => $orderNumber
            ])->with('success', 'Order already paid!');
        }

        return view('store.moolre-payment', [
            'store' => $store,
            'order' => $order,
            'storeSlug' => $storeSlug,
        ]);
    }

    /**
     * Step 1: Initiate payment - sends OTP to phone
     */
    public function initiatePayment(Request $request, $storeSlug, $orderNumber)
    {
        $request->validate([
            'phone_number' => 'required|string|min:10',
        ]);

        try {
            $store = Store::where('slug', $storeSlug)->firstOrFail();
            $order = Order::where('order_number', $orderNumber)
                ->where('store_id', $store->id)
                ->firstOrFail();

            if ($order->payment_status === 'paid') {
                return response()->json([
                    'success' => false,
                    'message' => 'Order already paid'
                ]);
            }

            $moolreConfig = getPaymentMethodConfig('moolre', $store->user->id, $store->id);

            if (!$moolreConfig['enabled'] || !$moolreConfig['username'] || !$moolreConfig['public_key'] || !$moolreConfig['account_number']) {
                return response()->json([
                    'success' => false,
                    'message' => 'Moolre is not configured for this store'
                ]);
            }

            // Format phone number
            $phoneNumber = $request->phone_number;
            $phoneNumber = preg_replace('/\s+/', '', $phoneNumber);
            $phoneNumber = preg_replace('/[^0-9]/', '', $phoneNumber);

            if (substr($phoneNumber, 0, 3) === '233') {
                $phoneNumber = '0' . substr($phoneNumber, 3);
            }

            if (substr($phoneNumber, 0, 1) !== '0') {
                $phoneNumber = '0' . $phoneNumber;
            }

            // Prepare Moolre API request - Step 1 (sends OTP)
            $body = [
                'type' => 1,
                'channel' => '13',
                'currency' => 'GHS',
                'payer' => $phoneNumber,
                'amount' => (string) $order->total_amount,
                'externalref' => $order->order_number,
                'reference' => 'Order: ' . $order->order_number,
                'accountnumber' => $moolreConfig['account_number'],
            ];

            Log::info('Moolre Store Payment Step 1', $body);

            $response = Http::withHeaders([
                'X-API-USER' => $moolreConfig['username'],
                'X-API-PUBKEY' => $moolreConfig['public_key'],
                'Content-Type' => 'application/json',
            ])->post('https://api.moolre.com/open/transact/payment', $body);

            $data = $response->json();
            Log::info('Moolre Store Step 1 Response', ['data' => $data]);

            if ($response->successful() && isset($data['status']) && $data['status'] == 1) {
                // Store payment info in session
                session([
                    'moolre_store_payment' => [
                        'order_number' => $order->order_number,
                        'store_slug' => $storeSlug,
                        'phone' => $phoneNumber,
                        'amount' => $order->total_amount,
                        'moolre_username' => $moolreConfig['username'],
                        'moolre_public_key' => $moolreConfig['public_key'],
                        'moolre_account_number' => $moolreConfig['account_number'],
                    ]
                ]);

                return response()->json([
                    'success' => true,
                    'step' => 'otp',
                    'message' => $data['message'] ?? 'OTP sent to your phone'
                ]);
            }

            return response()->json([
                'success' => false,
                'message' => $data['message'] ?? 'Failed to initiate payment'
            ]);

        } catch (\Exception $e) {
            Log::error('Moolre store payment error: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Payment error: ' . $e->getMessage()
            ]);
        }
    }

    /**
     * Step 2: Verify OTP and trigger USSD payment
     */
    public function verifyOtp(Request $request, $storeSlug, $orderNumber)
    {
        $request->validate([
            'otp_code' => 'required|string|min:4|max:10',
        ]);

        $paymentInfo = session('moolre_store_payment');

        if (!$paymentInfo || $paymentInfo['order_number'] !== $orderNumber) {
            return response()->json([
                'success' => false,
                'message' => 'Payment session expired. Please try again.'
            ]);
        }

        try {
            $store = Store::where('slug', $storeSlug)->firstOrFail();
            $order = Order::where('order_number', $orderNumber)
                ->where('store_id', $store->id)
                ->firstOrFail();

            // Step 2: Verify OTP
            $body = [
                'type' => 1,
                'channel' => '13',
                'currency' => 'GHS',
                'payer' => $paymentInfo['phone'],
                'amount' => (string) $paymentInfo['amount'],
                'externalref' => $order->order_number,
                'reference' => 'Order: ' . $order->order_number,
                'accountnumber' => $paymentInfo['moolre_account_number'],
                'otpcode' => $request->otp_code,
            ];

            Log::info('Moolre Store Payment Step 2 - Verify OTP', $body);

            $response = Http::withHeaders([
                'X-API-USER' => $paymentInfo['moolre_username'],
                'X-API-PUBKEY' => $paymentInfo['moolre_public_key'],
                'Content-Type' => 'application/json',
            ])->post('https://api.moolre.com/open/transact/payment', $body);

            $data = $response->json();
            Log::info('Moolre Store Step 2 Response', ['data' => $data]);

            $message = $data['message'] ?? '';
            $status = $data['status'] ?? 0;

            // Check for OTP verification success
            $isOtpVerified = ($status == 1)
                || stripos($message, 'successful') !== false
                || stripos($message, 'success') !== false
                || stripos($message, 'verified') !== false;

            if ($isOtpVerified) {
                // OTP verified - now make another call to trigger USSD
                Log::info('Moolre OTP Verified, requesting USSD payment...');

                sleep(1);

                $paymentBody = [
                    'type' => 1,
                    'channel' => '13',
                    'currency' => 'GHS',
                    'payer' => $paymentInfo['phone'],
                    'amount' => (string) $paymentInfo['amount'],
                    'externalref' => $order->order_number,
                    'reference' => 'Order: ' . $order->order_number,
                    'accountnumber' => $paymentInfo['moolre_account_number'],
                ];

                $paymentResponse = Http::withHeaders([
                    'X-API-USER' => $paymentInfo['moolre_username'],
                    'X-API-PUBKEY' => $paymentInfo['moolre_public_key'],
                    'Content-Type' => 'application/json',
                ])->post('https://api.moolre.com/open/transact/payment', $paymentBody);

                Log::info('Moolre USSD Response', ['data' => $paymentResponse->json()]);

                return response()->json([
                    'success' => true,
                    'step' => 'pending',
                    'message' => 'Please check your phone and approve the payment.'
                ]);
            }

            // Check for invalid OTP
            if (stripos($message, 'invalid') !== false) {
                return response()->json([
                    'success' => false,
                    'message' => 'Invalid OTP. Please try again.'
                ]);
            }

            return response()->json([
                'success' => false,
                'message' => $message ?: 'OTP verification failed'
            ]);

        } catch (\Exception $e) {
            Log::error('Moolre store OTP error: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'OTP verification error: ' . $e->getMessage()
            ]);
        }
    }

    /**
     * Manually confirm payment
     */
    public function confirmPayment(Request $request, $storeSlug, $orderNumber)
    {
        try {
            $store = Store::where('slug', $storeSlug)->firstOrFail();
            $order = Order::where('order_number', $orderNumber)
                ->where('store_id', $store->id)
                ->firstOrFail();

            if ($order->payment_status === 'paid') {
                return response()->json([
                    'success' => true,
                    'message' => 'Order already paid'
                ]);
            }

            // 1. Load Credentials
            $moolreConfig = getPaymentMethodConfig('moolre', $store->user->id, $store->id);
            if (!$moolreConfig['enabled']) {
                throw new \Exception('Moolre configuration missing');
            }

            // 2. Verify Status with Moolre API
            $statusBody = [
                'externalref' => $order->order_number,
                'accountnumber' => $moolreConfig['account_number'],
            ];

            Log::info('Moolre Manual Verification Check', $statusBody);

            $response = Http::withHeaders([
                'X-API-USER' => $moolreConfig['username'],
                'X-API-PUBKEY' => $moolreConfig['public_key'],
                'Content-Type' => 'application/json',
            ])->post('https://api.moolre.com/open/transact/status', $statusBody);

            $data = $response->json();
            Log::info('Moolre Verification Response', ['data' => $data]);

            $status = $data['status'] ?? null;
            $code = $data['code'] ?? '';
            $message = $data['message'] ?? 'Payment not found';

            // 3. Strict Verification Logic
            $isSuccess = in_array(strtolower((string) $status), ['successful', 'success', '1', 'paid', 'approved', 'completed'])
                || in_array($code, ['TP00', 'TP01']);

            if (!$isSuccess) {
                return response()->json([
                    'success' => false,
                    'message' => 'Verification failed: ' . $message
                ]);
            }

            // 4. Update order status (Only if verified)
            $order->update([
                'status' => 'processing',
                'payment_status' => 'paid',
                'payment_details' => array_merge($order->payment_details ?? [], [
                    'manual_verification_data' => $data,
                    'verified_at' => now(),
                    'verified_by' => 'manual_check',
                ])
            ]);

            // Reduce stock
            $this->orderService->reduceStockForOrder($order);

            // Clear session
            session()->forget('moolre_store_payment');

            Log::info('Moolre store payment confirmed after verification', ['order_number' => $orderNumber]);

            return response()->json([
                'success' => true,
                'message' => 'Payment confirmed!',
                'redirect_url' => route('store.order-confirmation', [
                    'storeSlug' => $storeSlug,
                    'orderNumber' => $orderNumber
                ])
            ]);

        } catch (\Exception $e) {
            Log::error('Moolre store confirm error: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Error confirming payment'
            ]);
        }
    }

    /**
     * Handle successful return from Moolre
     */
    public function success(Request $request, $storeSlug, $orderNumber)
    {
        session()->forget('moolre_store_payment');

        return redirect()->route('store.order-confirmation', [
            'storeSlug' => $storeSlug,
            'orderNumber' => $orderNumber
        ])->with('success', 'Payment successful!');
    }

    /**
     * Handle Moolre webhook notifications
     */
    public function callback(Request $request)
    {
        try {
            Log::info('Moolre store webhook received', $request->all());

            $data = $request->all();

            // Handle nested data structure from Moolre
            $nestedData = $data['data'] ?? [];
            $externalRef = $nestedData['externalref'] ?? $nestedData['external_ref'] ?? $data['externalref'] ?? $data['external_ref'] ?? $request->input('externalref');
            $status = $data['status'] ?? null;
            $code = $data['code'] ?? '';
            $txStatus = $nestedData['txstatus'] ?? null;

            if (!$externalRef) {
                Log::error('Moolre webhook missing external reference', $data);
                return response()->json(['status' => 'error', 'message' => 'Missing reference'], 400);
            }

            $order = Order::where('order_number', $externalRef)->first();

            if (!$order) {
                Log::error('Order not found for Moolre webhook', ['reference' => $externalRef]);
                return response()->json(['status' => 'error', 'message' => 'Order not found'], 404);
            }

            if ($order->payment_status === 'paid') {
                return response()->json(['status' => 'success', 'message' => 'Already paid']);
            }

            // Check for success - include P01 code and txstatus
            $isSuccess = ($status == 1 || $txStatus == 1 || $code === 'P01')
                || in_array(strtolower((string) $status), ['successful', 'success', 'paid', 'approved', 'completed'])
                || in_array($code, ['TP00', 'TP01']);

            if ($isSuccess) {
                $order->update([
                    'status' => 'processing',
                    'payment_status' => 'paid',
                    'payment_method' => 'moolre',
                    'payment_gateway' => 'moolre',
                    'payment_details' => array_merge($order->payment_details ?? [], [
                        'moolre_webhook_data' => $data,
                        'verified_at' => now(),
                    ])
                ]);

                $this->orderService->reduceStockForOrder($order);

                Log::info('Order confirmed via Moolre webhook', ['order_number' => $order->order_number]);
            } else {
                // Payment failed - cancel the order immediately
                $isFailed = in_array(strtolower((string) $status), ['failed', 'cancelled', 'declined', 'timeout', 'rejected', 'expired']);

                if ($isFailed) {
                    Log::warning('Moolre payment failed, cancelling order', ['status' => $status, 'order' => $order->order_number]);
                    $this->orderService->cancelOrder($order);
                } else {
                    Log::info('Moolre payment status pending/unknown', ['status' => $status, 'order' => $order->order_number]);
                }
            }

            return response()->json(['status' => 'success']);

        } catch (\Exception $e) {
            Log::error('Moolre callback error: ' . $e->getMessage());
            return response()->json(['status' => 'error'], 500);
        }
    }


    /**
     * Show return page for Web POS flow - redirects directly to confirmation
     */
    public function returnPage(Request $request, $storeSlug, $orderNumber)
    {
        $store = Store::where('slug', $storeSlug)->firstOrFail();
        $order = Order::where('order_number', $orderNumber)->where('store_id', $store->id)->firstOrFail();

        // Always redirect to order confirmation since webhook handles the payment
        // If not paid yet, the confirmation page will show the pending status
        return redirect()->route('store.order-confirmation', [
            'storeSlug' => $storeSlug,
            'orderNumber' => $orderNumber
        ])->with('info', 'Payment is being processed. Please check your order status.');
    }

    /**
     * Check order status for polling - verifies with Moolre API
     */
    public function checkOrderStatus(Request $request, $storeSlug, $orderNumber)
    {
        $store = Store::where('slug', $storeSlug)->firstOrFail();
        $order = Order::where('order_number', $orderNumber)->where('store_id', $store->id)->firstOrFail();

        // Already paid
        if ($order->payment_status === 'paid') {
            return response()->json([
                'status' => 'paid',
                'redirect_url' => route('store.order-confirmation', ['storeSlug' => $storeSlug, 'orderNumber' => $orderNumber])
            ]);
        }

        // Already cancelled
        if ($order->status === 'cancelled') {
            return response()->json([
                'status' => 'cancelled',
                'message' => 'Order has been cancelled'
            ]);
        }

        // Verify with Moolre API
        try {
            $moolreService = app(\App\Services\MoolreService::class);
            $verificationStatus = $moolreService->checkStatus($store, $order->order_number);

            if ($verificationStatus === 'success') {
                // Payment succeeded - update order
                $order->update([
                    'status' => 'processing',
                    'payment_status' => 'paid',
                    'payment_details' => array_merge($order->payment_details ?? [], [
                        'verified_at' => now(),
                        'verified_by' => 'polling_check',
                    ])
                ]);
                $this->orderService->reduceStockForOrder($order);

                return response()->json([
                    'status' => 'paid',
                    'redirect_url' => route('store.order-confirmation', ['storeSlug' => $storeSlug, 'orderNumber' => $orderNumber])
                ]);
            }

            if ($verificationStatus === 'failed') {
                // Payment failed - cancel order
                $this->orderService->cancelOrder($order);

                return response()->json([
                    'status' => 'cancelled',
                    'message' => 'Payment failed or was declined'
                ]);
            }

        } catch (\Exception $e) {
            Log::error('Moolre status check error: ' . $e->getMessage());
        }

        // Still pending
        return response()->json([
            'status' => 'pending',
            'message' => 'Waiting for payment confirmation...'
        ]);
    }
}
