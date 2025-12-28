import { useForm } from '@inertiajs/react';
import { useState } from 'react';
import { Loader2, Phone, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useTranslation } from 'react-i18next';

interface MoolrePaymentFormProps {
    planId: number;
    planPrice: number;
    billingCycle: 'monthly' | 'yearly';
    couponCode?: string;
    currency?: string;
    onSuccess?: () => void;
    onCancel?: () => void;
}

export function MoolrePaymentForm({
    planId,
    planPrice,
    billingCycle,
    couponCode,
    currency = 'GHS',
    onSuccess,
    onCancel
}: MoolrePaymentFormProps) {
    const { t } = useTranslation();

    const { data, setData, post, processing, errors } = useForm({
        plan_id: planId,
        billing_cycle: billingCycle,
        coupon_code: couponCode || '',
        phone_number: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        post(route('moolre.payment.pay'), {
            onError: (errors) => {
                console.error('Moolre payment error:', errors);
            }
        });
    };

    return (
        <div className="space-y-6">
            <Alert>
                <Phone className="h-4 w-4" />
                <AlertDescription>
                    {t('Enter your mobile money number. A payment request will be sent to your phone for approval.')}
                </AlertDescription>
            </Alert>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="phone_number">{t('Mobile Money Number')}</Label>
                    <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            id="phone_number"
                            type="tel"
                            value={data.phone_number}
                            onChange={(e) => setData('phone_number', e.target.value)}
                            placeholder="0241234567"
                            className="pl-10"
                            required
                            disabled={processing}
                        />
                    </div>
                    <p className="text-xs text-muted-foreground">
                        {t('Enter your Ghana mobile money number (MTN, Vodafone, or AirtelTigo)')}
                    </p>
                    {errors.phone_number && (
                        <p className="text-sm text-destructive">{errors.phone_number}</p>
                    )}
                </div>

                <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                    <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{t('Amount to pay')}</span>
                        <span className="font-medium">{currency} {planPrice.toFixed(2)}</span>
                    </div>
                </div>

                {(errors as any).error && (
                    <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>{(errors as any).error}</AlertDescription>
                    </Alert>
                )}

                <div className="flex gap-3">
                    {onCancel && (
                        <Button
                            type="button"
                            variant="outline"
                            onClick={onCancel}
                            disabled={processing}
                            className="flex-1"
                        >
                            {t('Cancel')}
                        </Button>
                    )}
                    <Button
                        type="submit"
                        disabled={processing || !data.phone_number.trim()}
                        className="flex-1"
                    >
                        {processing ? (
                            <>
                                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                {t('Processing...')}
                            </>
                        ) : (
                            t('Pay with Mobile Money')
                        )}
                    </Button>
                </div>
            </form>

            <p className="text-xs text-center text-muted-foreground">
                {t('You will receive a USSD prompt on your phone to approve the payment.')}
            </p>
        </div>
    );
}
