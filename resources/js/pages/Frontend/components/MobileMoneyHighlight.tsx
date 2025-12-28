import React from 'react';
import { Smartphone, Zap, CheckCircle, ArrowRight, Clock, Shield } from 'lucide-react';
import { Link } from '@inertiajs/react';

const MobileMoneyHighlight: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-white to-indigo-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <div className="inline-block border border-primary/20 bg-primary/5 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary mb-6">
              Payment Made Simple
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
              Pay with <br />
              <span className="text-highlight-blue cursor-default">Mobile Money</span> — <br />
              <span className="text-primary">The Ghanaian Way</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Over 80% of Ghanaians use Mobile Money for online shopping. Accept payments the way your customers prefer—instantly, securely, and without any transaction fees.
            </p>

            {/* Convenience Features */}
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Instant Payments</h4>
                  <p className="text-gray-600 text-sm">No waiting periods. Money arrives in your account immediately after purchase.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Smartphone size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">No Credit Card Needed</h4>
                  <p className="text-gray-600 text-sm">Your customers can pay directly from their mobile wallet—no bank account or card required.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Zero Transaction Fees</h4>
                  <p className="text-gray-600 text-sm">Keep 100% of every sale. We don't charge any transaction fees on Mobile Money payments.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/payments"
                className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
              >
                Learn More <ArrowRight size={20} />
              </Link>
              <Link 
                to="/contact"
                className="bg-white border-2 border-primary text-primary px-8 py-4 rounded-full font-bold hover:bg-primary/5 transition-all inline-flex items-center justify-center"
              >
                See How It Works
              </Link>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Main Phone Mockup */}
            <div className="bg-white rounded-[3rem] p-6 shadow-2xl border-4 border-gray-100 relative z-20">
              <div className="bg-gray-900 rounded-[2rem] overflow-hidden">
                {/* Phone Header */}
                <div className="bg-gray-800 px-6 py-4 flex items-center justify-between border-b border-gray-700">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                      <Smartphone size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">WepStore Checkout</div>
                      <div className="text-gray-400 text-xs">Secure Payment</div>
                    </div>
                  </div>
                  <Shield size={18} className="text-primary" />
                </div>

                {/* Payment Screen */}
                <div className="bg-gray-900 p-6 text-white">
                  <div className="mb-6">
                    <div className="text-gray-400 text-xs mb-2">Order Total</div>
                    <div className="text-3xl font-bold">₵150.00</div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="text-sm font-bold text-gray-300 mb-3">Choose Payment Method</div>
                    
                    {/* Mobile Money Option - Highlighted */}
                    <div className="bg-primary/20 border-2 border-primary rounded-xl p-4 relative">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                            <Smartphone size={20} className="text-white" />
                          </div>
                          <div>
                            <div className="font-bold text-white">Mobile Money</div>
                            <div className="text-xs text-blue-200">MTN • Vodafone • AirtelTigo</div>
                          </div>
                        </div>
                        <div className="bg-primary text-white text-xs px-2 py-1 rounded-full font-bold">
                          Popular
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-blue-200 mt-2">
                        <CheckCircle size={14} />
                        <span>Instant • Zero Fees</span>
                      </div>
                    </div>

                    {/* Other Payment Options */}
                    <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 opacity-60">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center">
                          <div className="text-gray-400 text-xs">💳</div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-300">Card Payment</div>
                          <div className="text-xs text-gray-500">Visa • Mastercard</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30">
                    Pay with Mobile Money
                  </button>

                  <div className="mt-4 text-center">
                    <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                      <Shield size={12} />
                      <span>Secure & Encrypted</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl border border-gray-100 z-10 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center">
                  <CheckCircle size={20} className="text-emerald-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">80%+</div>
                  <div className="text-xs text-gray-500">Use Mobile Money</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-5 shadow-xl border border-gray-100 z-10 animate-float-delayed">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Clock size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">Instant</div>
                  <div className="text-xs text-gray-500">Processing</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="text-3xl font-bold text-primary mb-2">0%</div>
            <div className="text-sm text-gray-600 font-medium">Transaction Fees</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <div className="text-sm text-gray-600 font-medium">Mobile Money Providers</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="text-3xl font-bold text-primary mb-2">+40%</div>
            <div className="text-sm text-gray-600 font-medium">Higher Conversion</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-gray-600 font-medium">You Keep</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileMoneyHighlight;




