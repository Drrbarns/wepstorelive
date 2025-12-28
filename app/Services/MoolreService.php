<?php

namespace App\Services;

use App\Models\Order;
use App\Models\Store;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class MoolreService
{
    protected string $baseUrl = 'https://api.moolre.com';

    /**
     * Generate a Web POS Payment Link for an order
     */
    public function generatePaymentLinkForOrder(Store $store, Order $order): array
    {
        $config = $this->getConfig($store);

        // Unique External Ref: StoreSlug:OrderNumber:Timestamp
        // Using Order Number is usually sufficient, but timestamp helps uniqueness on retries
        $externalRef = $order->order_number;

        $body = [
            'type' => 1,
            'amount' => number_format((float) $order->total_amount, 2, '.', ''),
            'email' => $order->customer_email,
            'externalref' => $externalRef,
            'callback' => route('moolre.global.webhook'),
            'redirect' => route('store.moolre.return', [
                'storeSlug' => $store->slug,
                'orderNumber' => $order->order_number
            ]),
            'reusable' => "0",
            'currency' => 'GHS',
            'accountnumber' => $config['account_number'],
            'description' => 'Payment for Order ' . $order->order_number,
        ];

        Log::info('MoolreService: Generating Link', $body);

        $response = Http::withHeaders([
            'X-API-USER' => $config['username'],
            'X-API-PUBKEY' => $config['public_key'],
            'Content-Type' => 'application/json',
        ])->post("{$this->baseUrl}/embed/link", $body);

        $responseData = $response->json();
        Log::info('MoolreService: Link Response', ['data' => $responseData]);

        $authUrl = $responseData['data']['authorization_url'] ?? $responseData['authorization_url'] ?? null;
        $ref = $responseData['data']['reference'] ?? $responseData['reference'] ?? $externalRef;

        if (!$response->successful() || empty($authUrl)) {
            throw new \Exception(
                'Failed to generate Moolre payment link: ' .
                ($responseData['message'] ?? 'Unknown error') .
                ' | Status: ' . $response->status() .
                ' | Body: ' . substr($response->body(), 0, 500) // Truncate just in case
            );
        }

        // Return the critical data to be stored
        return [
            'authorization_url' => $authUrl,
            'external_ref' => $externalRef,
            'provider_ref' => $ref,
            'reference' => $ref, // OrderService expects this key
        ];
    }

    /**
     * Check Payment Status Server-to-Server
     */
    public function checkStatus(Store $store, string $externalRef): string
    {
        $config = $this->getConfig($store);

        $body = [
            'externalref' => $externalRef,
            'accountnumber' => $config['account_number'],
        ];

        $response = Http::withHeaders([
            'X-API-USER' => $config['username'],
            'X-API-PUBKEY' => $config['public_key'],
            'Content-Type' => 'application/json',
        ])->post("{$this->baseUrl}/open/transact/status", $body);

        $data = $response->json();
        $status = strtolower((string) ($data['status'] ?? ''));
        $code = $data['code'] ?? '';

        // Normalize Status
        if (in_array($status, ['successful', 'success', '1', 'paid', 'approved', 'completed']) || in_array($code, ['TP00', 'TP01'])) {
            return 'success';
        }

        if (in_array($status, ['failed', 'cancelled', 'timeout'])) {
            return 'failed';
        }

        // Default to pending for any other status
        return 'pending';
    }

    /**
     * Generate Generic Payment Link (For Platform Subscriptions)
     */
    public function generateGenericLink(array $credentials, array $payload): array
    {
        Log::info('MoolreService: Generic Link Request', $payload);

        $response = Http::withHeaders([
            'X-API-USER' => $credentials['username'],
            'X-API-PUBKEY' => $credentials['public_key'],
            'Content-Type' => 'application/json',
        ])->post("{$this->baseUrl}/embed/link", $payload);

        $responseData = $response->json();
        Log::info('MoolreService: Generic Link Response', ['data' => $responseData]);

        $authUrl = $responseData['data']['authorization_url'] ?? $responseData['authorization_url'] ?? null;
        $ref = $responseData['data']['reference'] ?? $responseData['reference'] ?? $payload['externalref'];

        if (!$response->successful() || empty($authUrl)) {
            throw new \Exception(
                'Failed to generate Moolre link: ' .
                ($responseData['message'] ?? 'Unknown error') .
                ' | Status: ' . $response->status()
            );
        }

        return [
            'authorization_url' => $authUrl,
            'external_ref' => $payload['externalref'],
            'reference' => $ref,
        ];
    }

    /**
     * Check Generic Status (For Platform Subscriptions)
     */
    public function checkGenericStatus(array $credentials, string $externalRef): string
    {
        $body = [
            'externalref' => $externalRef,
            'accountnumber' => $credentials['account_number'],
        ];

        $response = Http::withHeaders([
            'X-API-USER' => $credentials['username'],
            'X-API-PUBKEY' => $credentials['public_key'],
            'Content-Type' => 'application/json',
        ])->post("{$this->baseUrl}/open/transact/status", $body);

        $data = $response->json();
        $status = strtolower((string) ($data['status'] ?? ''));
        $code = $data['code'] ?? '';

        if (in_array($status, ['successful', 'success', '1', 'paid', 'approved', 'completed']) || in_array($code, ['TP00', 'TP01'])) {
            return 'success';
        }

        if (in_array($status, ['failed', 'cancelled', 'timeout'])) {
            return 'failed';
        }

        return 'pending';
    }

    /**
     * Retrieve Moolre credentials for a store
     */
    protected function getConfig(Store $store): array
    {
        // Use existing global helper
        $config = getPaymentMethodConfig('moolre', $store->user->id, $store->id);

        if (!$config['enabled'] || empty($config['username']) || empty($config['public_key']) || empty($config['account_number'])) {
            throw new \Exception("Moolre is not configured or enabled for store: {$store->name}");
        }

        return [
            'username' => $config['username'],
            'public_key' => $config['public_key'],
            'account_number' => $config['account_number'],
        ];
    }
}
