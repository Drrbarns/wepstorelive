import React from 'react';
import { Check, Zap, Shield, TrendingUp, Users } from 'lucide-react';
import Pricing from '../components/Pricing';
import { EXTERNAL_LINKS } from '../constants';

const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-dark pt-40 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs font-medium text-white mb-8 backdrop-blur-sm">
            <Zap size={14} className="text-primary" />
            Simple, Transparent Pricing
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
            Plans that grow <br />
            <span className="text-highlight-blue text-dark cursor-default">with your business</span>
          </h1>
          
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            No hidden fees. No surprises. Just powerful features at prices that make sense.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 text-center">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Check size={24} className="text-primary" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">No Setup Fees</h3>
              <p className="text-sm text-gray-500">Get started immediately with zero upfront costs</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 text-center">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield size={24} className="text-emerald-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">14-Day Trial</h3>
              <p className="text-sm text-gray-500">Test everything risk-free before you commit</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 text-center">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp size={24} className="text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Flexible Plans</h3>
              <p className="text-sm text-gray-500">Upgrade, downgrade, or cancel anytime</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 text-center">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users size={24} className="text-amber-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-sm text-gray-500">Expert help whenever you need it</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Component */}
      <Pricing />

      {/* All Plans Include Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Every plan includes
            </h2>
            <p className="text-xl text-gray-500">
              Enterprise features available to everyone
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8 max-w-5xl mx-auto">
            {[
              'SSL Security Certificate',
              'Mobile Responsive Design',
              'Unlimited Bandwidth',
              'Free Subdomain',
              'Payment Gateway Integration',
              'Email Notifications',
              'Inventory Management',
              'Customer Management',
              'Order Tracking',
              'Analytics Dashboard',
              'SEO Tools',
              'Social Media Integration',
              'Email Support',
              'Knowledge Base Access',
              'Regular Updates',
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check size={14} className="text-primary" strokeWidth={3} />
                </div>
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Frequently asked questions
            </h2>
            <p className="text-gray-500">
              Have more questions? <a href="/contact" className="text-primary hover:underline font-bold">Contact us</a>
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">Can I change plans later?</h3>
              <p className="text-gray-600">Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept all major credit cards, debit cards, and Mobile Money for African customers.</p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">Is there a setup fee?</h3>
              <p className="text-gray-600">No setup fees, ever. You only pay the monthly or annual subscription fee.</p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">What happens after my trial ends?</h3>
              <p className="text-gray-600">Your trial lasts 14 days. After that, you'll need to choose a plan to continue. No credit card required for trial.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-indigo-700 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Start your 14-day free trial today. No credit card required.
          </p>
          <a 
            href={EXTERNAL_LINKS.REGISTER}
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Start Free Trial
          </a>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;



