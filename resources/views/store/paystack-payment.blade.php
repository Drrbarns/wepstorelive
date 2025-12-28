<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Processing Payment - {{ $storeName }}</title>
    <script src="https://js.paystack.co/v1/inline.js"></script>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .payment-container {
            background: white;
            border-radius: 16px;
            padding: 48px;
            text-align: center;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            max-width: 400px;
            width: 90%;
        }

        .loader {
            width: 60px;
            height: 60px;
            border: 4px solid #f3f3f3;
            border-top: 4px solid #667eea;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 24px;
        }

        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(360deg);
            }
        }

        h1 {
            color: #1a1a2e;
            font-size: 24px;
            margin-bottom: 12px;
        }

        p {
            color: #6b7280;
            font-size: 16px;
            margin-bottom: 24px;
        }

        .amount {
            font-size: 32px;
            font-weight: bold;
            color: #667eea;
            margin-bottom: 8px;
        }

        .order-number {
            color: #9ca3af;
            font-size: 14px;
            margin-bottom: 24px;
        }

        .error-message {
            background: #fef2f2;
            border: 1px solid #fca5a5;
            color: #dc2626;
            padding: 12px 16px;
            border-radius: 8px;
            margin-top: 16px;
            display: none;
        }

        .retry-btn {
            background: #667eea;
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 16px;
            cursor: pointer;
            margin-top: 16px;
            display: none;
        }

        .retry-btn:hover {
            background: #5a67d8;
        }
    </style>
</head>

<body>
    <div class="payment-container">
        <div class="loader" id="loader"></div>
        <h1>Processing Payment</h1>
        <p>Please wait while we redirect you to Paystack...</p>
        <div class="amount">{{ $currency }} {{ number_format($amount / 100, 2) }}</div>
        <div class="order-number">Order: {{ $orderNumber }}</div>
        <div class="error-message" id="error-message"></div>
        <button class="retry-btn" id="retry-btn" onclick="initPayment()">Try Again</button>
    </div>

    <script>
        const paymentData = {
            key: "{{ $paystackPublicKey }}",
            email: "{{ $email }}",
            amount: {{ $amount }},
            currency: "{{ $currency }}",
            ref: "{{ $paystackReference }}",
            callback_url: "{{ $returnUrl }}"
        };

        function initPayment() {
            document.getElementById('loader').style.display = 'block';
            document.getElementById('error-message').style.display = 'none';
            document.getElementById('retry-btn').style.display = 'none';

            try {
                const handler = PaystackPop.setup({
                    key: paymentData.key,
                    email: paymentData.email,
                    amount: paymentData.amount,
                    currency: paymentData.currency,
                    ref: paymentData.ref,
                    callback: function (response) {
                        // Payment successful, redirect to confirmation
                        window.location.href = paymentData.callback_url;
                    },
                    onClose: function () {
                        document.getElementById('loader').style.display = 'none';
                        document.getElementById('error-message').textContent = 'Payment was cancelled. Click "Try Again" to retry.';
                        document.getElementById('error-message').style.display = 'block';
                        document.getElementById('retry-btn').style.display = 'inline-block';
                    }
                });
                handler.openIframe();
            } catch (error) {
                document.getElementById('loader').style.display = 'none';
                document.getElementById('error-message').textContent = 'Failed to initialize payment: ' + error.message;
                document.getElementById('error-message').style.display = 'block';
                document.getElementById('retry-btn').style.display = 'inline-block';
            }
        }

        // Auto-start payment when page loads
        window.onload = function () {
            setTimeout(initPayment, 500);
        };
    </script>
</body>

</html>