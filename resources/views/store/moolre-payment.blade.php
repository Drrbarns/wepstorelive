<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ __('Complete Payment') }} - {{ $store->name }}</title>
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
        }

        .header {
            text-align: center;
            margin-bottom: 24px;
        }

        .logo {
            width: 64px;
            height: 64px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 16px;
        }

        .logo svg {
            width: 32px;
            height: 32px;
            color: white;
        }

        h1 {
            font-size: 20px;
            color: #1f2937;
            margin-bottom: 8px;
        }

        .store-name {
            color: #6b7280;
            font-size: 14px;
        }

        .order-info {
            background: #f9fafb;
            border-radius: 12px;
            padding: 16px;
            margin-bottom: 24px;
        }

        .order-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 8px;
        }

        .order-row:last-child {
            margin-bottom: 0;
            padding-top: 8px;
            border-top: 1px solid #e5e7eb;
            font-weight: 600;
        }

        .order-label {
            color: #6b7280;
        }

        .order-value {
            color: #1f2937;
        }

        .step {
            display: none;
        }

        .step.active {
            display: block;
        }

        .form-group {
            margin-bottom: 20px;
        }

        label {
            display: block;
            font-size: 14px;
            font-weight: 500;
            color: #374151;
            margin-bottom: 8px;
        }

        input {
            width: 100%;
            padding: 12px 16px;
            border: 2px solid #e5e7eb;
            border-radius: 10px;
            font-size: 16px;
            transition: all 0.2s;
        }

        input:focus {
            outline: none;
            border-color: #667eea;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .otp-input {
            text-align: center;
            font-size: 24px;
            letter-spacing: 8px;
            font-family: monospace;
        }

        .btn {
            width: 100%;
            padding: 14px 24px;
            border: none;
            border-radius: 10px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }

        .btn-primary {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }

        .btn-primary:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }

        .btn-primary:disabled {
            opacity: 0.6;
            cursor: not-allowed;
            transform: none;
        }

        .btn-success {
            background: #10b981;
            color: white;
        }

        .btn-success:hover {
            background: #059669;
        }

        .btn-outline {
            background: transparent;
            border: 2px solid #e5e7eb;
            color: #374151;
            margin-top: 12px;
        }

        .btn-outline:hover {
            background: #f9fafb;
        }

        .message {
            padding: 12px 16px;
            border-radius: 10px;
            margin-bottom: 16px;
            font-size: 14px;
        }

        .message.info {
            background: #eff6ff;
            color: #1e40af;
            border: 1px solid #bfdbfe;
        }

        .message.error {
            background: #fef2f2;
            color: #991b1b;
            border: 1px solid #fecaca;
        }

        .message.success {
            background: #ecfdf5;
            color: #065f46;
            border: 1px solid #a7f3d0;
        }

        .spinner {
            width: 20px;
            height: 20px;
            border: 2px solid transparent;
            border-top-color: currentColor;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            to {
                transform: rotate(360deg);
            }
        }

        .pending-icon {
            width: 80px;
            height: 80px;
            background: #fef3c7;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 16px;
        }

        .pending-icon svg {
            width: 40px;
            height: 40px;
            color: #d97706;
        }

        .pending-text {
            text-align: center;
            color: #6b7280;
            margin-bottom: 24px;
        }

        .helper-text {
            font-size: 12px;
            color: #6b7280;
            margin-top: 8px;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="header">
            <div class="logo">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            </div>
            <h1>{{ __('Mobile Money Payment') }}</h1>
            <p class="store-name">{{ $store->name }}</p>
        </div>

        <div class="order-info">
            <div class="order-row">
                <span class="order-label">{{ __('Order') }}</span>
                <span class="order-value">{{ $order->order_number }}</span>
            </div>
            <div class="order-row">
                <span class="order-label">{{ __('Total') }}</span>
                <span class="order-value">GHS {{ number_format($order->total_amount, 2) }}</span>
            </div>
        </div>

        <div id="message-container"></div>

        <!-- Step 1: Phone Number -->
        <div id="step-phone" class="step active">
            <div class="message info">
                <strong>📱 {{ __('Enter your mobile money number') }}</strong><br>
                {{ __('A payment request will be sent to your phone for approval.') }}
            </div>
            <div class="form-group">
                <label for="phone_number">{{ __('Mobile Money Number') }}</label>
                <input type="tel" id="phone_number" placeholder="0241234567" maxlength="12">
                <p class="helper-text">{{ __('Enter your Ghana mobile money number (MTN, Vodafone, AirtelTigo)') }}</p>
            </div>
            <button type="button" class="btn btn-primary" onclick="initiatePayment()">
                <span id="phone-btn-text">{{ __('Continue') }}</span>
                <span id="phone-spinner" class="spinner" style="display: none;"></span>
            </button>
        </div>

        <!-- Step 2: OTP Verification -->
        <div id="step-otp" class="step">
            <div class="message info">
                <strong>🔐 {{ __('Enter OTP Code') }}</strong><br>
                {{ __('Enter the verification code sent to your phone via SMS.') }}
            </div>
            <div class="form-group">
                <label for="otp_code">{{ __('OTP Code') }}</label>
                <input type="text" id="otp_code" class="otp-input" placeholder="000000" maxlength="6"
                    inputmode="numeric">
            </div>
            <button type="button" class="btn btn-primary" onclick="verifyOtp()">
                <span id="otp-btn-text">{{ __('Verify & Continue') }}</span>
                <span id="otp-spinner" class="spinner" style="display: none;"></span>
            </button>
            <button type="button" class="btn btn-outline" onclick="goToStep('phone')">
                {{ __('Back') }}
            </button>
        </div>

        <!-- Step 3: Pending Payment -->
        <div id="step-pending" class="step">
            <div class="pending-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            </div>
            <p class="pending-text">
                <strong>{{ __('Check your phone!') }}</strong><br><br>
                {{ __('A USSD payment prompt has been sent to your phone. Please approve the payment to complete your order.') }}
            </p>
            <button type="button" class="btn btn-success" onclick="confirmPayment()">
                <span id="confirm-btn-text">✓ {{ __("I've Completed the Payment") }}</span>
                <span id="confirm-spinner" class="spinner" style="display: none;"></span>
            </button>
            <button type="button" class="btn btn-outline" onclick="window.location.reload()">
                {{ __('Start Over') }}
            </button>
        </div>
    </div>

    <script>
        const initiateUrl = "{{ route('store.moolre.initiate', ['storeSlug' => $storeSlug, 'orderNumber' => $order->order_number]) }}";
        const verifyOtpUrl = "{{ route('store.moolre.verify-otp', ['storeSlug' => $storeSlug, 'orderNumber' => $order->order_number]) }}";
        const confirmPaymentUrl = "{{ route('store.moolre.confirm', ['storeSlug' => $storeSlug, 'orderNumber' => $order->order_number]) }}";
        const csrfToken = document.querySelector('meta[name="csrf-token"]').content;

        function showMessage(text, type = 'info') {
            const container = document.getElementById('message-container');
            container.innerHTML = `<div class="message ${type}">${text}</div>`;
        }

        function clearMessage() {
            document.getElementById('message-container').innerHTML = '';
        }

        function goToStep(step) {
            document.querySelectorAll('.step').forEach(el => el.classList.remove('active'));
            document.getElementById('step-' + step).classList.add('active');
            clearMessage();
        }

        function setLoading(btnId, loading) {
            const btnText = document.getElementById(btnId + '-btn-text');
            const spinner = document.getElementById(btnId + '-spinner');
            const btn = btnText.closest('button');

            if (loading) {
                btnText.style.display = 'none';
                spinner.style.display = 'block';
                btn.disabled = true;
            } else {
                btnText.style.display = 'inline';
                spinner.style.display = 'none';
                btn.disabled = false;
            }
        }

        async function initiatePayment() {
            const phone = document.getElementById('phone_number').value.trim();
            if (!phone || phone.length < 10) {
                showMessage('Please enter a valid phone number', 'error');
                return;
            }

            setLoading('phone', true);
            clearMessage();

            try {
                const response = await fetch(initiateUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': csrfToken,
                    },
                    body: JSON.stringify({ phone_number: phone })
                });

                const data = await response.json();

                if (data.success && data.step === 'otp') {
                    goToStep('otp');
                    showMessage(data.message, 'success');
                } else {
                    showMessage(data.message || 'Failed to initiate payment', 'error');
                }
            } catch (error) {
                showMessage('Network error. Please try again.', 'error');
            } finally {
                setLoading('phone', false);
            }
        }

        async function verifyOtp() {
            const otp = document.getElementById('otp_code').value.trim();
            if (!otp || otp.length < 4) {
                showMessage('Please enter the OTP code', 'error');
                return;
            }

            setLoading('otp', true);
            clearMessage();

            try {
                const response = await fetch(verifyOtpUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': csrfToken,
                    },
                    body: JSON.stringify({ otp_code: otp })
                });

                const data = await response.json();

                if (data.success && data.step === 'pending') {
                    goToStep('pending');
                    showMessage(data.message, 'success');
                } else {
                    showMessage(data.message || 'OTP verification failed', 'error');
                }
            } catch (error) {
                showMessage('Network error. Please try again.', 'error');
            } finally {
                setLoading('otp', false);
            }
        }

        async function confirmPayment() {
            setLoading('confirm', true);
            clearMessage();

            try {
                const response = await fetch(confirmPaymentUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': csrfToken,
                    }
                });

                const data = await response.json();

                if (data.success) {
                    showMessage('Payment confirmed! Redirecting...', 'success');
                    setTimeout(() => {
                        window.location.href = data.redirect_url || '/';
                    }, 2000);
                } else {
                    showMessage(data.message || 'Could not confirm payment', 'error');
                    setLoading('confirm', false);
                }
            } catch (error) {
                showMessage('Network error. Please try again.', 'error');
                setLoading('confirm', false);
            }
        }

        // Allow only numbers in OTP field
        document.getElementById('otp_code').addEventListener('input', function (e) {
            this.value = this.value.replace(/\D/g, '');
        });
    </script>
</body>

</html>