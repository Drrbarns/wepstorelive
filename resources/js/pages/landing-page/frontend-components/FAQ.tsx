import React, { useState } from 'react';
import { Plus, ArrowRight } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const questions = [
    {
        q: "Can I use my own domain name?",
        a: "Absolutely! You can connect an existing domain name to WepStore, or purchase a new one directly through our dashboard."
    },
    {
        q: "Are there any transaction fees?",
        a: "None at all. We do not charge any transaction fees. You keep 100% of your sales across all plans."
    },
    {
        q: "Do I need a web designer?",
        a: "Not at all. WepStore provides professionally designed, responsive templates that you can customize with our drag-and-drop builder."
    },
    {
        q: "Can I sell digital products?",
        a: "Yes, WepStore supports physical products, digital downloads, services, and subscriptions right out of the box."
    },
    {
        q: "Is my store secure?",
        a: "Security is our priority. All stores come with a free 256-bit SSL certificate, PCI compliance, and fraud analysis tools."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12">
        {/* Left */}
        <div className="md:col-span-5">
            <div className="inline-block border border-gray-200 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">FAQS</div>
            <h2 className="text-4xl font-display font-bold text-dark mb-6">Got questions? We've got answers.</h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
                Starting a business is a big step. We're here to help you navigate the journey with 24/7 support.
            </p>
            <button className="bg-primary text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-primary-dark transition-colors group shadow-lg shadow-primary/20">
                Visit Help Center <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
        </div>

        {/* Right - Accordion */}
        <div className="md:col-span-7 space-y-4">
            {questions.map((item, i) => (
                <div 
                  key={i} 
                  className={`border border-gray-200 rounded-2xl p-6 cursor-pointer hover:border-primary transition-all bg-white ${openIndex === i ? 'shadow-lg border-primary/50' : ''}`} 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setOpenIndex(openIndex === i ? null : i); }}
                  aria-expanded={openIndex === i}
                  aria-label={`Question: ${item.q}`}
                >
                    <div className="flex justify-between items-center">
                        <h3 className={`font-bold text-lg transition-colors ${openIndex === i ? 'text-primary' : 'text-dark'}`}>{item.q}</h3>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === i ? 'bg-primary text-white rotate-45' : 'bg-gray-100 text-gray-600'}`} aria-hidden="true">
                            <Plus size={16} />
                        </div>
                    </div>
                    
                    <div className={`grid transition-all duration-300 ease-in-out ${openIndex === i ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className="overflow-hidden">
                            <div className="text-gray-500 text-sm leading-relaxed">
                                {item.a}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;