import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { PRICING, EXTERNAL_LINKS } from '../constants';

const Pricing: React.FC = () => {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name: "Starter Store",
      price: 100.00,
      description: "Basic plan for small businesses just getting started.",
      recommended: true,
      theme: "blue",
      limits: [
        { val: "1", label: "Stores" },
        { val: "1000", label: "Users/Store" },
        { val: "100", label: "Products/Store" },
        { val: "5 GB", label: "Storage" },
        { val: "7", label: "Themes" },
      ],
      features: [
        "Custom Domain", "Subdomain", "Custom Pages", "Blog", "Shipping Method"
      ]
    },
    {
      name: "Standard Store(s)",
      price: 250.00,
      description: "Ideal for growing businesses with multiple stores and advanced needs.",
      recommended: false,
      theme: "white",
      limits: [
        { val: "3", label: "Stores" },
        { val: "5000", label: "Users/Store" },
        { val: "1000", label: "Products/Store" },
        { val: "20 GB", label: "Storage" },
        { val: "10", label: "Themes" },
      ],
      features: [
        "Custom Domain", "Subdomain", "PWA", "AI Integration", "Custom Pages", "Blog", "Shipping Method"
      ]
    },
    {
      name: "Enterprise or Developers",
      price: 600.00,
      description: "Complete solution for large businesses with unlimited resources and premium support. Best for...",
      recommended: false,
      theme: "white",
      limits: [
        { val: "8", label: "Stores" },
        { val: "5000", label: "Users/Store" },
        { val: "5000", label: "Products/Store" },
        { val: "50 GB", label: "Storage" },
        { val: "10", label: "Themes" },
      ],
      features: [
        "Custom Domain", "Subdomain", "PWA", "AI Integration", "Custom Pages", "Blog", "Shipping Method"
      ]
    }
  ];

  return (
    <section id="pricing" className="bg-dark py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-primary/10 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block border border-gray-700 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Pricing</div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Invest in your <span className="text-highlight-navy text-dark px-2">growth</span>.
          </h2>
          <p className="text-gray-400 mb-8">Start small, scale big. Choose the plan that fits your needs.</p>

          {/* Toggle */}
          <div className="bg-gray-800 inline-flex p-1 rounded-full relative">
            <div
              className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-full transition-all duration-300 ease-in-out shadow-sm ${!annual ? 'left-1' : 'left-[calc(50%+2px)]'}`}
            ></div>

            <button
              className={`relative px-8 py-2 rounded-full text-sm font-bold transition-colors z-10 ${!annual ? 'text-dark' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setAnnual(false)}
            >
              Monthly
            </button>
            <button
              className={`relative px-8 py-2 rounded-full text-sm font-bold transition-colors z-10 ${annual ? 'text-dark' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setAnnual(true)}
            >
              Yearly
            </button>
          </div>
          {annual && <div className="text-primary text-sm font-bold mt-3 animate-fade-in-up">Save 20% on yearly billing</div>}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const isBlue = plan.theme === 'blue';
            // Calculate yearly price: Monthly * 12 * discount (20% discount applied)
            const annualTotal = plan.price * 12 * PRICING.ANNUAL_DISCOUNT;

            // Format price with commas if needed
            const finalPrice = annual
              ? annualTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
              : plan.price.toFixed(2);

            const period = annual ? '/year' : '/month';

            return (
              <div key={index} className={`relative rounded-3xl p-6 flex flex-col transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl ${isBlue ? 'bg-blue-50 border-2 border-primary' : 'bg-white border border-gray-200'}`}>

                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                    <Check size={12} strokeWidth={3} /> Recommended
                  </div>
                )}

                {/* Header */}
                <div className="mb-6 pt-2">
                  <h3 className={`text-2xl font-bold mb-2 ${isBlue ? 'text-primary' : 'text-gray-900'}`}>{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className={`text-4xl font-extrabold ${isBlue ? 'text-primary' : 'text-gray-900'}`}>{PRICING.CURRENCY_SYMBOL}{finalPrice}</span>
                    <span className="text-gray-500 text-sm">{period}</span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{plan.description}</p>
                </div>

                {/* Divider with Icon */}
                <div className="relative h-px bg-gray-200 my-4">
                  <div className={`absolute left-1/2 -translate-x-1/2 -top-3 w-6 h-6 rounded-full flex items-center justify-center ${isBlue ? 'bg-blue-100 text-primary' : 'bg-gray-100 text-gray-400'}`}>
                    <Check size={14} strokeWidth={3} />
                  </div>
                </div>

                {/* Usage Limits */}
                <div className="mb-8">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Usage Limits</div>
                  <div className="grid grid-cols-2 gap-3">
                    {plan.limits.map((limit, i) => (
                      <div key={i} className={`${plan.limits.length % 2 !== 0 && i === plan.limits.length - 1 ? 'col-span-2' : ''} text-center p-3 rounded-xl ${isBlue ? 'bg-white shadow-sm' : 'bg-gray-50'}`}>
                        <div className={`text-lg font-bold ${isBlue ? 'text-primary' : 'text-gray-900'}`}>{limit.val}</div>
                        <div className="text-[10px] font-bold text-gray-500 uppercase">{limit.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="flex-1">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Features</div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${isBlue ? 'bg-blue-100 text-primary' : 'bg-gray-100 text-gray-400'}`}>
                          <Check size={10} strokeWidth={4} />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <a href={EXTERNAL_LINKS.REGISTER} className={`w-full py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${isBlue ? 'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/30' : 'bg-gray-900 text-white hover:bg-black'}`}>
                  Get Started <ArrowRight size={18} />
                </a>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;