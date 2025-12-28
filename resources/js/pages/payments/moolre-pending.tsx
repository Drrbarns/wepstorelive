import { useEffect, useState } from 'react';
import { PageTemplate } from '@/components/page-template';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, Phone, CheckCircle, XCircle, RefreshCw } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { router, usePage } from '@inertiajs/react';

interface Props {
    payment: {
        external_ref: string;
        amount: number;
        phone: string;
    };
}

export default function MoolrePending({ payment }: Props) {
    const { t } = useTranslation();
    const { flash } = usePage().props as any;
    const [status, setStatus] = useState<'pending' | 'success' | 'failed'>('pending');
    const [message, setMessage] = useState(t('Waiting for payment confirmation...'));
    const [polling, setPolling] = useState(true);
    const [confirmingPayment, setConfirmingPayment] = useState(false);

    useEffect(() => {
        if (!polling) return;

        const checkStatus = async () => {
            try {
                const response = await fetch(route('moolre.payment.check-status'));
                const data = await response.json();

                if (data.status === 'success') {
                    setStatus('success');
                    setMessage(t('Payment successful!'));
                    setPolling(false);
                    setTimeout(() => {
                        router.visit(route('moolre.payment.success'));
                    }, 2000);
                } else if (data.status === 'failed') {
                    setStatus('failed');
                    setMessage(data.message || t('Payment failed'));
                    setPolling(false);
                }
            } catch (error) {
                console.error('Error checking payment status:', error);
            }
        };

        const interval = setInterval(checkStatus, 5000);
        checkStatus();

        return () => clearInterval(interval);
    }, [polling]);

    const handleConfirmPayment = async () => {
        setConfirmingPayment(true);
        try {
            // Call endpoint to manually confirm payment
            const response = await fetch(route('moolre.payment.confirm'), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '',
                },
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                setMessage(t('Payment confirmed successfully!'));
                setPolling(false);
                setTimeout(() => {
                    router.visit(route('plans.index'));
                }, 2000);
            } else {
                setMessage(data.message || t('Could not confirm payment. Please wait or contact support.'));
            }
        } catch (error) {
            console.error('Error confirming payment:', error);
            setMessage(t('Error confirming payment. Please try again.'));
        } finally {
            setConfirmingPayment(false);
        }
    };

    const handleCancel = () => {
        router.visit(route('plans.index'));
    };

    return (
        <PageTemplate
            title={t('Payment Pending')}
            description={t('Waiting for mobile money payment confirmation')}
            url="/payments/moolre/pending"
        >
            <div className="max-w-md mx-auto mt-8">
                <Card>
                    <CardHeader className="text-center">
                        <CardTitle className="flex items-center justify-center gap-2">
                            {status === 'pending' && <Loader2 className="h-6 w-6 animate-spin text-primary" />}
                            {status === 'success' && <CheckCircle className="h-6 w-6 text-green-500" />}
                            {status === 'failed' && <XCircle className="h-6 w-6 text-red-500" />}
                            {status === 'pending' && t('Payment Pending')}
                            {status === 'success' && t('Payment Successful')}
                            {status === 'failed' && t('Payment Failed')}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="text-center space-y-4">
                            <div className="bg-muted/50 rounded-full w-20 h-20 mx-auto flex items-center justify-center">
                                <Phone className="h-10 w-10 text-primary" />
                            </div>

                            <p className="text-muted-foreground">
                                {message}
                            </p>

                            {status === 'pending' && (
                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800">
                                    <p className="font-medium mb-2">{t('Check your phone!')}</p>
                                    <p>{t('A USSD prompt has been sent to your mobile money number. Please approve the payment to continue.')}</p>
                                </div>
                            )}

                            {payment && (
                                <div className="bg-muted/50 rounded-lg p-4 space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">{t('Amount')}</span>
                                        <span className="font-medium">GHS {payment.amount}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">{t('Phone')}</span>
                                        <span className="font-medium">{payment.phone}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">{t('Reference')}</span>
                                        <span className="font-mono text-xs">{payment.external_ref}</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {status === 'pending' && (
                            <div className="space-y-3">
                                <Button
                                    onClick={handleConfirmPayment}
                                    disabled={confirmingPayment}
                                    className="w-full bg-green-600 hover:bg-green-700"
                                >
                                    {confirmingPayment ? (
                                        <>
                                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                            {t('Confirming...')}
                                        </>
                                    ) : (
                                        <>
                                            <CheckCircle className="h-4 w-4 mr-2" />
                                            {t("I've Completed the Payment")}
                                        </>
                                    )}
                                </Button>
                                <Button
                                    variant="outline"
                                    onClick={handleCancel}
                                    className="w-full"
                                >
                                    {t('Cancel & Go Back')}
                                </Button>
                            </div>
                        )}

                        {status === 'success' && (
                            <div className="text-center text-green-600 font-medium">
                                {t('Redirecting to your dashboard...')}
                            </div>
                        )}

                        {status === 'failed' && (
                            <Button
                                onClick={handleCancel}
                                className="w-full"
                            >
                                {t('Try Again')}
                            </Button>
                        )}
                    </CardContent>
                </Card>
            </div>
        </PageTemplate>
    );
}
