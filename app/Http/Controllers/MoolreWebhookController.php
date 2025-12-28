<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Store;
use App\Services\MoolreService;
use App\Services\OrderService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class MoolreWebhookController extends Controller
{
    public function __construct(
        protected MoolreService $moolreService,
        protected OrderService $orderService
    ) {
    }

    /**
     * Handle Global Moolre Webhook
     * URL: /moolre/webhook
     */
    public function handle(Request $request)
    {
        try {
            Log::info('Moolre Global Webhook Received', $request->all());

            $data = $request->all();

            // 1. Extract Reference
            // Moolre sends 'externalref' which matches our 'order_number'
            $externalRef = $data['externalref'] ?? $data['external_ref'] ?? null;

            if (!$externalRef) {
                Log::warning('Moolre Webhook: No external reference provided');
                return response()->json(['status' => 'ignored', 'message' => 'No reference'], 200);
            }

            // HANDLE PLANS
            if (str_starts_with($externalRef, 'plan_')) {
                return $this->handlePlanPayment($externalRef, $data);
            }

            // 2. Find Order
            // We use order_number as external_ref
            $order = Order::where('order_number', $externalRef)->first();

            if (!$order) {
                Log::error("Moolre Webhook: Order not found for ref: {$externalRef}");
                return response()->json(['status' => 'ignored', 'message' => 'Order not found'], 200);
            }

            // 3. Idempotency Check
            if ($order->payment_status === 'paid') {
                Log::info("Moolre Webhook: Order {$externalRef} already paid. Skipping.");
                return response()->json(['status' => 'success', 'message' => 'Already paid'], 200);
            }

            // 4. Find Store (Context)
            $store = Store::find($order->store_id);
            if (!$store) {
                Log::error("Moolre Webhook: Store not found for order: {$externalRef}");
                return response()->json(['status' => 'error'], 500);
            }

            // 5. Server-to-Server Verification (Trust but Verify)
            // Even though this is a webhook, we verify status to prevent spoofing
            $verificationStatus = $this->moolreService->checkStatus($store, $externalRef);

            if ($verificationStatus === 'failed') {
                Log::warning("Moolre Webhook: Payment failed for order {$externalRef}, cancelling...");
                $this->orderService->cancelOrder($order);
                return response()->json(['status' => 'cancelled'], 200);
            }

            if ($verificationStatus !== 'success') {
                Log::warning("Moolre Webhook: Verification pending (Status: {$verificationStatus}) for order {$externalRef}");
                return response()->json(['status' => 'ignored'], 200);
            }

            // 6. Finalize Order
            $this->finalizeOrder($order, $data);

            return response()->json(['status' => 'success']);

        } catch (\Exception $e) {
            Log::error('Moolre Global Webhook Error: ' . $e->getMessage());
            return response()->json(['status' => 'error'], 500);
        }
    }

    protected function finalizeOrder(Order $order, array $webhookData)
    {
        // Update Order Status
        $order->update([
            'status' => 'processing',
            'payment_status' => 'paid',
            'payment_details' => array_merge($order->payment_details ?? [], [
                'moolre_webhook_data' => $webhookData,
                'verified_at' => now(),
                'verified_by' => 'global_webhook',
            ])
        ]);

        // Reduce Stock (Deferred Logic)
        $this->orderService->reduceStockForOrder($order);

        Log::info("Moolre Webhook: Order {$order->order_number} verified and stock reduced.");
    }

    protected function handlePlanPayment(string $externalRef, array $data)
    {
        Log::info("Moolre Webhook: Processing Plan Payment {$externalRef}");

        // Verify Status
        $superAdminId = \App\Models\User::where('type', 'superadmin')->first()?->id;
        $settings = getPaymentSettings($superAdminId);

        $credentials = [
            'username' => $settings['moolre_username'],
            'public_key' => $settings['moolre_public_key'],
            'account_number' => $settings['moolre_account_number'],
        ];

        $status = $this->moolreService->checkGenericStatus($credentials, $externalRef);

        if ($status !== 'success') {
            Log::warning("Moolre Webhook: Plan verification failed for {$externalRef}");
            return response()->json(['status' => 'ignored'], 200);
        }

        // Parse: plan_UserId_PlanId_Cycle_Time
        $parts = explode('_', $externalRef);
        if (count($parts) < 4) {
            Log::error("Moolre Webhook: Invalid Plan Ref Format {$externalRef}");
            return response()->json(['status' => 'error'], 400);
        }

        $userId = $parts[1];
        $planId = $parts[2];
        $cycle = $parts[3];

        processPaymentSuccess([
            'user_id' => $userId,
            'plan_id' => $planId,
            'billing_cycle' => $cycle,
            'payment_method' => 'moolre',
            'coupon_code' => null,
            'payment_id' => $externalRef,
        ]);

        Log::info("Moolre Webhook: Plan Activated for User {$userId}");

        return response()->json(['status' => 'success']);
    }
}
