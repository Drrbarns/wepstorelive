import React, { useState } from 'react';
import { ArrowRight, Check, Shield, Star, Loader2 } from 'lucide-react';

const LaunchOfferPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        businessName: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Moolre POS Link provided by user
    const PAYMENT_URL = "https://pos.moolre.com/obH64lxcDCT5kXumBr8YtF7NiZO2zP";

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // 1. Send lead data to our backend
            const messageBody = `NEW LAUNCH OFFER LEAD\n\nBusiness Name: ${formData.businessName}\nPhone: ${formData.phone}\nPlan: Starter Store (GHS 504)`;

            const response = await fetch('/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: 'New Launch Offer Signup',
                    message: messageBody,
                }),
            });

            if (!response.ok) {
                console.error('Failed to save lead information');
                // We continue to payment anyway
            }

            // 2. Redirect to Moolre Payment Page
            window.location.href = PAYMENT_URL;

        } catch (err) {
            console.error(err);
            window.location.href = PAYMENT_URL;
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-gray-900">
            <div className="flex flex-col lg:flex-row min-h-screen">

                {/* Left Column: Value Prop */}
                <div className="lg:w-1/2 bg-blue-600 text-white p-8 lg:p-16 flex flex-col justify-center relative overflow-hidden">
                    {/* Background Accents */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[100px] opacity-50 -translate-y-1/2 translate-x-1/3"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500 rounded-full blur-[80px] opacity-40 translate-y-1/3 -translate-x-1/4"></div>

                    <div className="relative z-10 max-w-lg mx-auto lg:mx-0 mt-20">
                        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-semibold mb-8 backdrop-blur-sm">
                            <Star size={16} className="text-yellow-400 fill-yellow-400" />
                            Exclusive Launch Offer
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                            Launch your <br /> online store <br /> <span className="text-blue-200">today.</span>
                        </h1>

                        <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                            Get access to the most powerful e-commerce builder in Africa at our lowest price ever. Secure your spot now.
                        </p>

                        <div className="bg-white/10 rounded-3xl p-6 backdrop-blur-sm border border-white/10 mb-8">
                            <div className="flex items-end gap-2 mb-2">
                                <span className="text-4xl font-bold">GHS 504</span>
                                <span className="text-blue-200 line-through text-lg mb-1">GHS 1,200</span>
                            </div>
                            <div className="text-sm font-bold text-yellow-400 uppercase tracking-wider mb-6">
                                58% Discount Applied
                            </div>

                            <ul className="space-y-3">
                                {['Secure Hosting Included', 'Mobile-Responsive Store', 'Payment Gateway Integration', 'Free Subdomain', 'WhatsApp Integration'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm">
                                        <div className="bg-blue-500 rounded-full p-1"><Check size={12} strokeWidth={3} /></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-blue-200">
                            <Shield size={16} /> 30-day money-back guarantee
                        </div>
                    </div>
                </div>

                {/* Right Column: Form */}
                <div className="lg:w-1/2 bg-white p-8 lg:p-16 flex flex-col justify-center">
                    <div className="max-w-md mx-auto w-full mt-20">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">Create your account</h2>
                            <p className="text-gray-500">Fill in your details to secure this offer.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    autoFocus
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Business Name</label>
                                <input
                                    type="text"
                                    name="businessName"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                                    placeholder="My Awesome Store"
                                    value={formData.businessName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                                        placeholder="+233 20 000 0000"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-4 rounded-xl shadow-xl shadow-blue-600/20 transition-all transform hover:-translate-y-1 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>Processing <Loader2 size={20} className="animate-spin" /></>
                                    ) : (
                                        <>Get Started Now <ArrowRight size={20} /></>
                                    )}
                                </button>
                                <p className="text-center text-xs text-gray-400 mt-4">
                                    By clicking "Get Started Now", you agree to our Terms of Service.
                                    <br />You will be redirected to our secure payment partner.
                                </p>
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LaunchOfferPage;
