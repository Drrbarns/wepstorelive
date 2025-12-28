import React from 'react';
import { Clock, CheckCircle2, Palette, Zap } from 'lucide-react';
import { STATS } from '../constants';

const WhyChooseUs: React.FC = () => {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Content */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                        Why Choose Our SaaS Platform?
                    </h2>
                    <p className="text-xl text-gray-500 mb-12 font-medium">
                        The complete multi-store e-commerce SaaS solution
                    </p>

                    <div className="space-y-10">
                        {/* Feature 1 */}
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-primary">
                                <Zap size={28} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Complete E-commerce Features</h3>
                                <p className="text-gray-500 leading-relaxed">
                                    Product management, order processing, customer management, and blog system built-in
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-primary">
                                <Palette size={28} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Ready-to-Use Themes</h3>
                                <p className="text-gray-500 leading-relaxed">
                                    10+ professional themes ready to use - no customization needed, just select and go live
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Content - Card */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
                    <div className="text-center mb-10 relative z-10">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Trusted by Entrepreneurs Worldwide</h3>
                        <p className="text-gray-500">Join thousands of successful merchants who chose WepStore</p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 relative z-10">
                        <div className="text-center p-6 rounded-2xl border border-gray-100 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all duration-300">
                            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{STATS.ACTIVE_STORES}</div>
                            <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Active Stores</div>
                        </div>
                        <div className="text-center p-6 rounded-2xl border border-gray-100 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all duration-300">
                            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{STATS.UPTIME}</div>
                            <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Uptime</div>
                        </div>
                        <div className="text-center p-6 rounded-2xl border border-gray-100 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all duration-300">
                            <div className="text-3xl md:text-4xl font-bold text-amber-500 mb-2">{STATS.REVENUE_GENERATED}</div>
                            <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Revenue Generated</div>
                        </div>
                        <div className="text-center p-6 rounded-2xl border border-gray-100 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all duration-300">
                            <div className="text-3xl md:text-4xl font-bold text-purple-500 mb-2">{STATS.COUNTRIES_SERVED}</div>
                            <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Countries Served</div>
                        </div>
                    </div>

                    {/* Background Decor */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-50 to-transparent rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;