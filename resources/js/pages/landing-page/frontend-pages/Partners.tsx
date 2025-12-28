import React from 'react';
import { Handshake, TrendingUp, Globe, Zap, Users, CheckCircle, ArrowRight, Target } from 'lucide-react';
import { COMPANY, EXTERNAL_LINKS } from '../constants';

const Partners: React.FC = () => {
  const partnerTypes = [
    {
      icon: <Zap size={32} />,
      title: 'Technology Partners',
      description: 'Integrate your services with WepStore and reach thousands of merchants',
      benefits: ['API Access', 'Co-marketing', 'Revenue Share']
    },
    {
      icon: <Users size={32} />,
      title: 'Agency Partners',
      description: 'Build stores for clients and earn commissions on every referral',
      benefits: ['Partner Portal', 'Training', 'Priority Support']
    },
    {
      icon: <Globe size={32} />,
      title: 'Affiliate Partners',
      description: 'Promote WepStore and earn up to 30% recurring commission',
      benefits: ['Marketing Materials', 'Performance Tracking', 'Monthly Payouts']
    },
  ];

  const benefits = [
    'Access to our growing merchant base',
    'Co-marketing opportunities',
    'Dedicated partner support',
    'Competitive revenue sharing',
    'Regular training and resources',
    'Early access to new features'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-dark pt-40 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2574&auto=format&fit=crop" 
              alt="Partnership" 
              className="w-full h-full object-cover opacity-20"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/80 to-dark"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs font-medium text-white mb-8 backdrop-blur-sm">
            <Handshake size={14} className="text-primary" />
            Partnership Program
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
            Grow together <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">with WepStore</span>
          </h1>
          
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Partner with Africa's leading e-commerce platform and help merchants succeed while growing your business.
          </p>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Partnership opportunities
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Choose the partnership model that fits your business
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {partnerTypes.map((type, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-10 border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white mb-6">
                  {type.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{type.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{type.description}</p>
                <div className="space-y-3 mb-8">
                  {type.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle size={18} className="text-primary flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                Why partner with <span className="text-primary">{COMPANY.NAME}</span>?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We're building the infrastructure for African e-commerce. Partner with us to tap into a rapidly growing market.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100">
                    <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-8 text-center shadow-xl border border-gray-100">
                <div className="text-4xl font-bold text-primary mb-2">25K+</div>
                <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Active Merchants</div>
              </div>
              <div className="bg-white rounded-2xl p-8 text-center shadow-xl border border-gray-100">
                <div className="text-4xl font-bold text-emerald-600 mb-2">120+</div>
                <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Countries</div>
              </div>
              <div className="bg-white rounded-2xl p-8 text-center shadow-xl border border-gray-100">
                <div className="text-4xl font-bold text-purple-600 mb-2">$2.5M+</div>
                <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Revenue Processed</div>
              </div>
              <div className="bg-white rounded-2xl p-8 text-center shadow-xl border border-gray-100">
                <div className="text-4xl font-bold text-amber-600 mb-2">98.5%</div>
                <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              How it works
            </h2>
            <p className="text-xl text-gray-500">
              Getting started is simple
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Apply', description: 'Fill out our partnership application form' },
              { step: '02', title: 'Review', description: 'Our team reviews your application within 2 business days' },
              { step: '03', title: 'Onboard', description: 'Get access to partner resources and training' },
              { step: '04', title: 'Grow', description: 'Start earning and growing your business' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-2xl font-bold text-primary mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Ready to partner?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Join our partner program and start growing your business with {COMPANY.NAME}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center justify-center gap-2"
            >
              Apply Now <ArrowRight size={20} />
            </a>
            <a 
              href="/contact"
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-colors inline-flex items-center justify-center"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;

