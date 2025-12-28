<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ __('Verifying Payment') }} - {{ $store->name }}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }

        .container {
            background: white;
            border-radius: 16px;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            width: 100%;
            max-width: 420px;
            padding: 32px;
            text-align: center;
        }

        h1 {
            font-size: 20px;
            color: #1f2937;
            margin: 16px 0 8px;
        }

        p {
            color: #6b7280;
            margin-bottom: 24px;
            line-height: 1.5;
        }

        .spinner {
            width: 48px;
            height: 48px;
            border: 4px solid #e5e7eb;
            border-top-color: #667eea;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto;
        }

        @keyframes spin {
            to {
                transform: rotate(360deg);
            }
        }

        .success-icon {
            width: 64px;
            height: 64px;
            background: #e0f2fe;
            color: #0284c7;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
        }

        .success-icon svg {
            width: 32px;
            height: 32px;
        }
    </style>
</head>

<body>
    <div class="container">
        <div id="verifying-view">
            <div class="spinner"></div>
            <h1>{{ __('Verifying Payment...') }}</h1>
            <p>{{ __('Please wait while we confirm your payment transaction.') }}</p>
            <p style="font-size: 13px;">{{ __('Reference:') }} {{ $order->order_number }}</p>
        </div>

        <div id="success-view" style="display: none;">
            <div class="success-icon" style="background:#ecfdf5; color:#059669;">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
            </div>
            <h1>{{ __('Payment Successful!') }}</h1>
            <p>{{ __('Redirecting you to the order confirmation page...') }}</p>
        </div>
    </div>

    <script>
        const checkUrl = "{{ route('store.moolre.check-status', ['storeSlug' => $storeSlug, 'orderNumber' => $order->order_number]) }}";
        let attempts = 0;
        const maxAttempts = 30; // 30 * 2s = 60s timeout

        function checkStatus() {
            if (attempts >= maxAttempts) {
                // Show manual refresh helper or contact support
                return;
            }
            attempts++;

            fetch(checkUrl)
                .then(res => res.json())
                .then(data => {
                    if (data.status === 'paid' && data.redirect_url) {
                        document.getElementById('verifying-view').style.display = 'none';
                        document.getElementById('success-view').style.display = 'block';
                        setTimeout(() => {
                            window.location.href = data.redirect_url;
                        }, 1500);
                    } else {
                        setTimeout(checkStatus, 2000);
                    }
                })
                .catch(err => {
                    console.error(err);
                    setTimeout(checkStatus, 2000);
                });
        }

        // Start polling
        checkStatus();
    </script>
</body>

</html>