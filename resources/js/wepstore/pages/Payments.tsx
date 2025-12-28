import React from 'react';
import { CreditCard, Smartphone, Globe, Shield, CheckCircle, Zap, DollarSign, TrendingUp, ArrowRight } from 'lucide-react';
import { COMPANY, EXTERNAL_LINKS } from '../constants';

const Payments: React.FC = () => {
  const paymentMethods = [
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile Money',
      description: 'The standard payment method for Ghanaians',
      features: ['MTN Mobile Money', 'Vodafone Cash', 'AirtelTigo Money', 'Instant Processing'],
      highlight: true,
      color: 'blue'
    },
    {
      icon: <CreditCard size={32} />,
      title: 'Card Payments',
      description: 'Accept Visa, Mastercard, and other major cards',
      features: ['Visa', 'Mastercard', 'American Express', 'Secure Processing'],
      highlight: false,
      color: 'blue'
    },
    {
      icon: <Globe size={32} />,
      title: 'Bank Transfer',
      description: 'Direct bank transfers for larger transactions',
      features: ['All Major Banks', 'Secure Gateway', 'Real-time Verification', 'Low Fees'],
      highlight: false,
      color: 'purple'
    },
  ];

  const features = [
    {
      icon: <Shield size={24} />,
      title: 'Zero Transaction Fees',
      description: 'We don\'t charge any transaction fees. You keep 100% of your sales.'
    },
    {
      icon: <Zap size={24} />,
      title: 'Instant Processing',
      description: 'Mobile Money payments are processed instantly. No waiting periods.'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Higher Conversion',
      description: 'Mobile Money increases checkout completion by 40% in Ghana.'
    },
    {
      icon: <CheckCircle size={24} />,
      title: 'PCI Compliant',
      description: 'Bank-level security for all payment methods.'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-dark pt-40 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-indigo-600/20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs font-medium text-white mb-8 backdrop-blur-sm">
            <CreditCard size={14} className="text-primary" />
            Payment Solutions
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
            Accept payments <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">the Ghanaian way</span>
          </h1>
          
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Zero transaction fees. Mobile Money first. Accept payments from anywhere in the world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={EXTERNAL_LINKS.REGISTER}
              className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20 inline-flex items-center justify-center gap-2"
            >
              Get Started Free
            </a>
            <a 
              href="/contact"
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-colors inline-flex items-center justify-center"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </section>

      {/* Mobile Money Highlight */}
      <section className="py-16 -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 border-2 border-primary/20 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                  Most Popular in Ghana
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                  Mobile Money: <br />
                  <span className="text-primary">The Standard</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Over 80% of Ghanaians use Mobile Money for online transactions. By accepting Mobile Money, you're speaking your customers' language and removing payment barriers.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">MTN Mobile Money</h4>
                      <p className="text-gray-600 text-sm">Ghana's #1 mobile payment provider with 20M+ users</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Vodafone Cash</h4>
                      <p className="text-gray-600 text-sm">Widely used across Ghana with instant processing</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">AirtelTigo Money</h4>
                      <p className="text-gray-600 text-sm">Growing network with competitive rates</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Smartphone size={40} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Why Mobile Money?</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-primary/5 rounded-xl">
                    <span className="font-medium text-gray-700">Transaction Fees</span>
                    <span className="font-bold text-primary">0%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                    <span className="font-medium text-gray-700">Processing Time</span>
                    <span className="font-bold text-primary">Instant</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-indigo-50 rounded-xl">
                    <span className="font-medium text-gray-700">User Base in Ghana</span>
                    <span className="font-bold text-indigo-600">80%+</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-primary/5 rounded-xl">
                    <span className="font-medium text-gray-700">Conversion Rate</span>
                    <span className="font-bold text-primary">+40%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              All payment methods
            </h2>
            <p className="text-xl text-gray-500">
              Accept payments from customers anywhere in the world
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {paymentMethods.map((method, index) => (
              <div 
                key={index} 
                className={`rounded-3xl p-8 border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  method.highlight 
                    ? 'bg-gradient-to-br from-blue-50 to-indigo-50 border-primary/20 shadow-xl' 
                    : 'bg-white border-gray-200'
                }`}
              >
                {method.highlight && (
                  <div className="inline-block bg-primary text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                    Recommended
                  </div>
                )}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  method.color === 'blue' ? 'bg-primary/10 text-primary' :
                  method.color === 'blue' ? 'bg-blue-100 text-primary' :
                  'bg-purple-100 text-purple-600'
                }`}>
                  {method.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{method.title}</h3>
                <p className="text-gray-600 mb-6">{method.description}</p>
                <ul className="space-y-3">
                  {method.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle size={16} className={`flex-shrink-0 ${
                        method.color === 'blue' ? 'text-primary' :
                        method.color === 'blue' ? 'text-primary' :
                        'text-purple-600'
                      }`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Why choose {COMPANY.NAME} payments?
            </h2>
            <p className="text-xl text-gray-500">
              Built for African merchants, optimized for success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-primary to-indigo-700 rounded-3xl p-12 text-white text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Zero transaction fees. Always.
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Unlike other platforms that charge 2-3% per transaction, {COMPANY.NAME} charges <strong className="text-white">0% transaction fees</strong>. You keep 100% of every sale.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-4xl font-bold mb-2">0%</div>
                  <div className="text-sm text-blue-100">Transaction Fees</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="text-sm text-blue-100">You Keep</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-4xl font-bold mb-2">Free</div>
                  <div className="text-sm text-blue-100">Setup</div>
                </div>
              </div>
              <a 
                href={EXTERNAL_LINKS.REGISTER}
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Start Accepting Payments <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                Bank-level security
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Your customers' payment information is protected with industry-leading security measures.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3 bg-white p-6 rounded-xl border border-gray-100">
                  <Shield className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">PCI DSS Compliant</h4>
                    <p className="text-gray-600 text-sm">Level 1 PCI compliance for secure card processing</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white p-6 rounded-xl border border-gray-100">
                  <Shield className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">256-bit SSL Encryption</h4>
                    <p className="text-gray-600 text-sm">All transactions encrypted end-to-end</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white p-6 rounded-xl border border-gray-100">
                  <Shield className="text-indigo-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Fraud Protection</h4>
                    <p className="text-gray-600 text-sm">Advanced fraud detection and prevention</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
              <div className="text-center">
                <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Shield size={64} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Data is Safe</h3>
                <p className="text-gray-600 mb-6">
                  We never store your customers' full payment details. All sensitive information is handled by our secure payment partners.
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <CheckCircle size={16} className="text-primary" />
                  <span>Regular Security Audits</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Ready to start accepting payments?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Set up Mobile Money and other payment methods in minutes. Zero fees. Zero hassle.
          </p>
          <a 
            href={EXTERNAL_LINKS.REGISTER}
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Get Started Free <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Payments;

