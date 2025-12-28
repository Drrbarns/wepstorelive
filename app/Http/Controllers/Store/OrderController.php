<?php

namespace App\Http\Controllers\Store;

use App\Http\Controllers\Controller;
use App\Services\OrderService;
use App\Services\CartCalculationService;
use App\Services\WhatsAppService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class OrderController extends Controller
{
    protected $orderService;

    public function __construct(OrderService $orderService)
    {
        $this->orderService = $orderService;
    }

    public function placeOrder(Request $request, $storeSlug)
    {
        \Log::info('Order placement started', ['store_slug' => $storeSlug, 'payment_method' => $request->payment_method]);

        $validationRules = [
            'store_id' => 'required|exists:stores,id',
            'customer_first_name' => 'required|string|max:255',
            'customer_last_name' => 'required|string|max:255',
            'customer_email' => 'required|email|max:255',
            'customer_phone' => 'nullable|string|max:20',
            'shipping_address' => 'required|string|max:255',
            'shipping_city' => 'required|string|max:100',
            'shipping_state' => 'required|string|max:100',
            'shipping_postal_code' => 'required|string|max:20',
            'shipping_country' => 'required|string|max:100',
            'billing_address' => 'required|string|max:255',
            'billing_city' => 'required|string|max:100',
            'billing_state' => 'required|string|max:100',
            'billing_postal_code' => 'required|string|max:20',
            'billing_country' => 'required|string|max:100',
            'payment_method' => 'required|string',
            'shipping_method_id' => 'nullable|exists:shippings,id',
            'notes' => 'nullable|string',
            'coupon_code' => 'nullable|string',
            'whatsapp_number' => 'nullable|string|max:20',
        ];

        // Add WhatsApp number validation if payment method is WhatsApp
        if ($request->payment_method === 'whatsapp') {
            $validationRules['whatsapp_number'] = 'required|string|regex:/^[+]?[0-9]{10,15}$/|max:20';
        }

        $request->validate($validationRules);

        try {
            \Log::info('Validation passed, calculating cart totals');

            // Get cart calculation
            $calculation = CartCalculationService::calculateCartTotals(
                $request->store_id,
                session()->getId(),
                $request->coupon_code,
                $request->shipping_method_id
            );

            if ($calculation['items']->isEmpty()) {
                \Log::error('Cart is empty');
                return back()->withErrors(['cart' => 'Your cart is empty']);
            }

            \Log::info('Cart calculation completed', ['items_count' => $calculation['items']->count(), 'total' => $calculation['total']]);

            // Prepare order data
            $orderData = [
                'store_id' => $request->store_id,
                'customer_first_name' => $request->customer_first_name,
                'customer_last_name' => $request->customer_last_name,
                'customer_email' => $request->customer_email,
                'customer_phone' => $request->customer_phone,
                'shipping_address' => $request->shipping_address,
                'shipping_city' => $request->shipping_city,
                'shipping_state' => $request->shipping_state,
                'shipping_postal_code' => $request->shipping_postal_code,
                'shipping_country' => $request->shipping_country,
                'billing_address' => $request->billing_address,
                'billing_city' => $request->billing_city,
                'billing_state' => $request->billing_state,
                'billing_postal_code' => $request->billing_postal_code,
                'billing_country' => $request->billing_country,
                'subtotal' => $calculation['subtotal'],
                'tax_amount' => $calculation['tax'],
                'shipping_amount' => $calculation['shipping'],
                'discount_amount' => $calculation['discount'],
                'total_amount' => $calculation['total'],
                'payment_method' => $request->payment_method,
                'shipping_method_id' => $request->shipping_method_id,
                'notes' => $request->notes,
                'coupon_code' => $request->coupon_code,
                'coupon_discount' => $calculation['discount'],
                'whatsapp_number' => $request->whatsapp_number,
            ];

            // Prepare cart items
            $cartItems = $calculation['items']->map(function ($item) {
                return [
                    'product_id' => $item->product_id,
                    'name' => $item->product->name,
                    'sku' => $item->product->sku,
                    'price' => $item->product->price,
                    'sale_price' => $item->product->sale_price,
                    'quantity' => $item->quantity,
                    'variants' => $item->variants,
                ];
            })->toArray();

            // Create order
            \Log::info('Creating order', ['payment_method' => $request->payment_method]);
            $order = $this->orderService->createOrder($orderData, $cartItems);
            \Log::info('Order created successfully', ['order_id' => $order->id, 'order_number' => $order->order_number]);

            // Update coupon usage if coupon was used
            if ($request->coupon_code && $calculation['coupon']) {
                $calculation['coupon']->increment('used_count');
            }

            // Process payment
            \Log::info('Processing payment', ['payment_method' => $request->payment_method]);
            $paymentResult = $this->orderService->processPayment($order, $storeSlug);
            \Log::info('Payment processing result', ['success' => $paymentResult['success'], 'message' => $paymentResult['message'] ?? 'No message']);

            if ($paymentResult['success']) {
                // For Stripe, PayPal, PayFast, MercadoPago, Moolre, redirect to checkout URL
                if (in_array($request->payment_method, ['stripe', 'paypal', 'payfast', 'mercadopago', 'moolre']) && isset($paymentResult['checkout_url'])) {
                    \Log::info('Redirecting to payment gateway', [
                        'method' => $request->payment_method,
                        'url' => $paymentResult['checkout_url'],
                        'is_inertia' => $request->header('X-Inertia') ? true : false
                    ]);

                    // FIX: Inertia requests need Inertia::location for external redirects to work
                    if ($request->header('X-Inertia')) {
                        return Inertia::location($paymentResult['checkout_url']);
                    }
                    return redirect($paymentResult['checkout_url']);
                }

                // For Cashfree, return payment session data for frontend processing
                if ($request->payment_method === 'cashfree') {
                    return response()->json([
                        'success' => true,
                        'payment_method' => 'cashfree',
                        'payment_session_id' => $paymentResult['payment_session_id'],
                        'cashfree_order_id' => $paymentResult['cashfree_order_id'],
                        'mode' => $paymentResult['mode'],
                        'public_key' => $paymentResult['public_key'],
                        'order_id' => $order->id,
                        'order_number' => $order->order_number,
                        'return_url' => route('store.order-confirmation', [
                            'storeSlug' => $storeSlug,
                            'orderNumber' => $order->order_number
                        ])
                    ]);
                }

                // For Razorpay, return payment data for frontend processing
                if ($request->payment_method === 'razorpay') {
                    return response()->json([
                        'success' => true,
                        'payment_method' => 'razorpay',
                        'payment_data' => [
                            'razorpay_order_id' => $paymentResult['razorpay_order_id'],
                            'amount' => $paymentResult['amount'],
                            'currency' => $paymentResult['currency'],
                            'key_id' => $paymentResult['key_id'],
                            'order_id' => $order->id,
                            'order_number' => $order->order_number,
                        ]
                    ]);
                }

                // For PayFast, create auto-submit form
                if ($request->payment_method === 'payfast' && isset($paymentResult['payfast_data'])) {
                    $htmlForm = '';
                    foreach ($paymentResult['payfast_data'] as $name => $value) {
                        $htmlForm .= '<input name="' . $name . '" type="hidden" value="' . $value . '" />';
                    }

                    $autoSubmitForm = '<html><body><form id="payfast-form" method="POST" action="' . $paymentResult['payfast_endpoint'] . '">' .
                        $htmlForm .
                        '</form><script>document.getElementById("payfast-form").submit();</script></body></html>';

                    return response($autoSubmitForm);
                }

                // For Paystack, render payment popup page
                if ($request->payment_method === 'paystack') {
                    $store = \App\Models\Store::find($request->store_id);
                    return view('store.paystack-payment', [
                        'storeName' => $store->name ?? 'Store',
                        'paystackPublicKey' => $paymentResult['paystack_public_key'],
                        'paystackReference' => $paymentResult['paystack_reference'],
                        'amount' => $paymentResult['amount'],
                        'currency' => $paymentResult['currency'],
                        'email' => $paymentResult['email'],
                        'orderNumber' => $order->order_number,
                        'returnUrl' => route('store.paystack.verify', [
                            'storeSlug' => $storeSlug,
                            'orderNumber' => $order->order_number,
                            'reference' => $paymentResult['paystack_reference']
                        ])
                    ]);
                }

                // For Flutterwave, render payment popup page
                if ($request->payment_method === 'flutterwave') {
                    $store = \App\Models\Store::find($request->store_id);
                    return view('store.flutterwave-payment', [
                        'storeName' => $store->name ?? 'Store',
                        'flutterwavePublicKey' => $paymentResult['flutterwave_public_key'],
                        'flutterwaveReference' => $paymentResult['flutterwave_reference'],
                        'amount' => $paymentResult['amount'],
                        'currency' => $paymentResult['currency'],
                        'email' => $paymentResult['email'],
                        'customerName' => $paymentResult['name'],
                        'phone' => $paymentResult['phone'],
                        'orderNumber' => $order->order_number,
                        'returnUrl' => route('store.flutterwave.verify', [
                            'storeSlug' => $storeSlug,
                            'orderNumber' => $order->order_number
                        ])
                    ]);
                }

                // For WhatsApp payment, redirect to confirmation page
                if ($request->payment_method === 'whatsapp') {
                    return redirect()->route('store.order-confirmation', [
                        'storeSlug' => $storeSlug,
                        'orderNumber' => $order->order_number
                    ])->with('success', $paymentResult['message']);
                }

                // For Telegram payment, redirect to confirmation page
                if ($request->payment_method === 'telegram') {
                    return redirect()->route('store.order-confirmation', [
                        'storeSlug' => $storeSlug,
                        'orderNumber' => $order->order_number
                    ])->with('success', $paymentResult['message']);
                }

                return redirect()->route('store.order-confirmation', [
                    'storeSlug' => $storeSlug,
                    'orderNumber' => $order->order_number
                ])->with('success', $paymentResult['message']);
            } else {
                // If payment failed, cancel the order and restore inventory
                if (isset($order)) {
                    $this->orderService->cancelOrder($order);
                }

                // Return JSON response for AJAX requests (like Cashfree)
                if ($request->expectsJson() || $request->ajax()) {
                    return response()->json(['error' => $paymentResult['message']], 400);
                }

                return back()->withErrors(['payment' => $paymentResult['message']]);
            }

        } catch (\Exception $e) {
            \Log::error('Order placement failed', [
                'error' => $e->getMessage(),
                'store_slug' => $storeSlug,
                'payment_method' => $request->payment_method
            ]);

            // If order was created but payment failed, cancel it
            if (isset($order)) {
                try {
                    $this->orderService->cancelOrder($order);
                } catch (\Exception $cancelException) {
                    // Log the cancellation error but don't show it to user
                    \Log::error('Failed to cancel order after payment error', [
                        'order_id' => $order->id,
                        'error' => $cancelException->getMessage()
                    ]);
                }
            }

            // Return JSON response for AJAX requests (like Cashfree)
            if ($request->expectsJson() || $request->ajax()) {
                return response()->json(['error' => 'Failed to place order: ' . $e->getMessage()], 500);
            }

            return back()->withErrors(['error' => 'Failed to place order: ' . $e->getMessage()]);
        }
    }

    public function verifyPaystack(Request $request, $storeSlug)
    {
        $reference = $request->query('reference');
        $orderNumber = $request->query('orderNumber');

        if (!$reference || !$orderNumber) {
            return redirect()->route('store.checkout', ['storeSlug' => $storeSlug])
                ->withErrors(['error' => 'Invalid payment reference']);
        }

        try {
            $order = \App\Models\Order::where('order_number', $orderNumber)->firstOrFail();

            // Get store owner's Paystack settings
            $storeModel = \App\Models\Store::find($order->store_id);
            if (!$storeModel || !$storeModel->user) {
                return redirect()->route('store.checkout', ['storeSlug' => $storeSlug])
                    ->withErrors(['error' => 'Store configuration error']);
            }

            $paystackConfig = getPaymentMethodConfig('paystack', $storeModel->user->id, $order->store_id);
            $secretKey = $paystackConfig['secret_key'] ?? null;

            if (!$secretKey) {
                return redirect()->route('store.checkout', ['storeSlug' => $storeSlug])
                    ->withErrors(['error' => 'Paystack configuration error']);
            }

            // Verify transaction with Paystack API
            $response = \Illuminate\Support\Facades\Http::withHeaders([
                'Authorization' => 'Bearer ' . $secretKey,
                'Cache-Control' => 'no-cache',
            ])->get("https://api.paystack.co/transaction/verify/" . rawurlencode($reference));

            $responseBody = $response->json();

            if ($response->successful() && isset($responseBody['data']['status']) && $responseBody['data']['status'] === 'success') {
                // Payment successful
                $order->update([
                    'status' => 'confirmed',
                    'payment_status' => 'paid',
                    'payment_details' => array_merge($order->payment_details ?? [], [
                        'paystack_reference' => $reference,
                        'verified_at' => now(),
                        'api_response' => $responseBody['data']
                    ]),
                ]);

                // Reduce stock
                $this->orderService->reduceStockForOrder($order);

                return redirect()->route('store.order-confirmation', [
                    'storeSlug' => $storeSlug,
                    'orderNumber' => $order->order_number
                ])->with('success', 'Payment successful!');
            } else {
                return redirect()->route('store.checkout', ['storeSlug' => $storeSlug])
                    ->withErrors(['error' => 'Payment verification failed']);
            }

        } catch (\Exception $e) {
            \Log::error('Paystack verification failed: ' . $e->getMessage());
            return redirect()->route('store.checkout', ['storeSlug' => $storeSlug])
                ->withErrors(['error' => 'Payment verification error']);
        }
    }

    public function verifyFlutterwave(Request $request, $storeSlug)
    {
        $transactionId = $request->query('transaction_id');
        $orderNumber = $request->query('orderNumber');
        // Flutterwave sometimes sends status and tx_ref too
        $status = $request->query('status');

        if ($status === 'cancelled') {
            return redirect()->route('store.checkout', ['storeSlug' => $storeSlug])
                ->withErrors(['error' => 'Payment cancelled']);
        }

        if (!$transactionId || !$orderNumber) {
            return redirect()->route('store.checkout', ['storeSlug' => $storeSlug])
                ->withErrors(['error' => 'Invalid payment parameters']);
        }

        try {
            $order = \App\Models\Order::where('order_number', $orderNumber)->firstOrFail();

            // Get store owner's Flutterwave settings
            $storeModel = \App\Models\Store::find($order->store_id);
            if (!$storeModel || !$storeModel->user) {
                return redirect()->route('store.checkout', ['storeSlug' => $storeSlug])
                    ->withErrors(['error' => 'Store configuration error']);
            }

            $flutterwaveConfig = getPaymentMethodConfig('flutterwave', $storeModel->user->id, $order->store_id);
            $secretKey = $flutterwaveConfig['secret_key'] ?? null;

            if (!$secretKey) {
                return redirect()->route('store.checkout', ['storeSlug' => $storeSlug])
                    ->withErrors(['error' => 'Flutterwave configuration error']);
            }

            // Verify transaction with Flutterwave API
            $response = \Illuminate\Support\Facades\Http::withHeaders([
                'Authorization' => 'Bearer ' . $secretKey,
                'Content-Type' => 'application/json',
            ])->get("https://api.flutterwave.com/v3/transactions/" . rawurlencode($transactionId) . "/verify");

            $responseBody = $response->json();

            if ($response->successful() && isset($responseBody['data']['status']) && $responseBody['data']['status'] === 'successful') {
                // Payment successful
                $order->update([
                    'status' => 'confirmed',
                    'payment_status' => 'paid',
                    'payment_details' => array_merge($order->payment_details ?? [], [
                        'flutterwave_transaction_id' => $transactionId,
                        'verified_at' => now(),
                        'api_response' => $responseBody['data']
                    ]),
                ]);

                // Reduce stock
                $this->orderService->reduceStockForOrder($order);

                return redirect()->route('store.order-confirmation', [
                    'storeSlug' => $storeSlug,
                    'orderNumber' => $order->order_number
                ])->with('success', 'Payment successful!');
            } else {
                return redirect()->route('store.checkout', ['storeSlug' => $storeSlug])
                    ->withErrors(['error' => 'Payment verification failed']);
            }

        } catch (\Exception $e) {
            \Log::error('Flutterwave verification failed: ' . $e->getMessage());
            return redirect()->route('store.checkout', ['storeSlug' => $storeSlug])
                ->withErrors(['error' => 'Payment verification error']);
        }
    }


}