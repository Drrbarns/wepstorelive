import { useForm, usePage } from '@inertiajs/react';
import { PageTemplate } from '@/components/page-template';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Phone, KeyRound, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Props {
    payment: {
        amount: number;
        phone: string;
        plan_name: string;
    };
}

export default function MoolreOtp({ payment }: Props) {
    const { t } = useTranslation();
    const { flash } = usePage().props as any;

    const { data, setData, post, processing, errors } = useForm({
        otp_code: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('moolre.payment.verify-otp'));
    };

    const handleCancel = () => {
        window.location.href = route('plans.index');
    };

    return (
        <PageTemplate
            title={t('Verify OTP')}
            description={t('Enter the OTP code sent to your phone')}
            url="/payments/moolre/otp"
        >
            <div className="max-w-md mx-auto mt-8">
                <Card>
                    <CardHeader className="text-center">
                        <div className="bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <KeyRound className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle>{t('Enter OTP Code')}</CardTitle>
                        <CardDescription>
                            {t('An OTP code has been sent to your phone via SMS. Enter it below to continue.')}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {flash?.info && (
                            <Alert>
                                <Phone className="h-4 w-4" />
                                <AlertDescription>{flash.info}</AlertDescription>
                            </Alert>
                        )}

                        <div className="bg-muted/50 rounded-lg p-4 space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">{t('Plan')}</span>
                                <span className="font-medium">{payment.plan_name}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">{t('Amount')}</span>
                                <span className="font-medium">GHS {payment.amount}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">{t('Phone')}</span>
                                <span className="font-medium">{payment.phone}</span>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="otp_code">{t('OTP Code')}</Label>
                                <Input
                                    id="otp_code"
                                    type="text"
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    maxLength={6}
                                    value={data.otp_code}
                                    onChange={(e) => setData('otp_code', e.target.value.replace(/\D/g, ''))}
                                    placeholder="000000"
                                    className="text-center text-2xl tracking-widest font-mono"
                                    required
                                    disabled={processing}
                                    autoFocus
                                />
                                {errors.otp_code && (
                                    <p className="text-sm text-destructive">{errors.otp_code}</p>
                                )}
                            </div>

                            {(errors as any).error && (
                                <Alert variant="destructive">
                                    <AlertCircle className="h-4 w-4" />
                                    <AlertDescription>{(errors as any).error}</AlertDescription>
                                </Alert>
                            )}

                            <div className="flex gap-3">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={handleCancel}
                                    disabled={processing}
                                    className="flex-1"
                                >
                                    {t('Cancel')}
                                </Button>
                                <Button
                                    type="submit"
                                    disabled={processing || data.otp_code.length < 4}
                                    className="flex-1"
                                >
                                    {processing ? (
                                        <>
                                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                            {t('Verifying...')}
                                        </>
                                    ) : (
                                        t('Verify & Continue')
                                    )}
                                </Button>
                            </div>
                        </form>

                        <p className="text-xs text-center text-muted-foreground">
                            {t("Didn't receive the code? Wait a moment and try again, or cancel and restart the payment.")}
                        </p>
                    </CardContent>
                </Card>
            </div>
        </PageTemplate>
    );
}
