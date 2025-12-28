import React from 'react';
import { Package, CreditCard, Users, Smartphone, BarChart3, Mail, Search, Globe, ShieldCheck, Shuffle, Zap, ArrowRight, Store } from 'lucide-react';

const FeaturesGrid: React.FC = () => {
  const features = [
    {
      icon: <Package size={24} strokeWidth={1.5} />,
      title: "Inventory Management",
      description: "Track stock levels in real-time, receive low-stock alerts, and manage product variations effortlessly.",
      bg: "bg-slate-50"
    },
    {
      icon: <CreditCard size={24} strokeWidth={1.5} />,
      title: "Mobile Money & Payments",
      description: "Accept Mobile Money (MTN, Vodafone, AirtelTigo), cards, and bank transfers. Zero transaction fees. Instant processing.",
      bg: "bg-blue-50"
    },
    {
      icon: <Users size={24} strokeWidth={1.5} />,
      title: "Built-in CRM",
      description: "Manage customer profiles, track purchase history, and segment users for targeted marketing.",
      bg: "bg-indigo-50"
    },
    {
      icon: <Smartphone size={24} strokeWidth={1.5} />,
      title: "Mobile First",
      description: "Your store looks perfect on every device. Manage orders on the go with our mobile app.",
      bg: "bg-sky-50"
    }
  ];

  const detailedFeatures = [
      { icon: <Mail size={18} />, label: "Email Marketing" },
      { icon: <Search size={18} />, label: "SEO Tools" },
      { icon: <ShieldCheck size={18} />, label: "SSL Security" },
      { icon: <Shuffle size={18} />, label: "Multi-Channel" },
      { icon: <BarChart3 size={18} />, label: "Advanced Reports" },
      { icon: <Zap size={18} />, label: "Automation" },
      { icon: <Globe size={18} />, label: "Custom Domain" },
      { icon: <Store size={18} />, label: "Multi-Store" },
  ];

  return (
    <section id="solutions" className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
          Not just a builder. A complete <br/>
          <span className="font-bold text-white bg-primary px-2 transform -rotate-1 inline-block mt-2">Business OS</span>
        </h2>
        <p className="text-gray-500 text-lg">We combine store management, marketing, and analytics into one seamless dashboard.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Main 4 cards */}
        {features.map((feature, idx) => (
          <div key={idx} className={`${feature.bg} rounded-3xl p-8 flex flex-col min-h-[280px] transition-all hover:-translate-y-2 hover:shadow-lg border border-transparent hover:border-primary/10`}>
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary mb-6 shadow-sm">
              {feature.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* The large full width card */}
      <div className="mt-6 bg-white border border-gray-200 rounded-3xl p-12 relative overflow-hidden shadow-sm group">
         <div className="text-center mb-12 relative z-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Plus everything else you need</h3>
            
            {/* Elements marquee/grid */}
            <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
                {detailedFeatures.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-gray-100 text-gray-600 bg-gray-50 shadow-sm hover:border-primary hover:text-primary hover:bg-white transition-all cursor-default hover:-translate-y-1">
                        {item.icon}
                        <span className="font-medium">{item.label}</span>
                    </div>
                ))}
            </div>
            
            <div className="mt-12">
                <button className="text-primary font-bold text-lg inline-flex items-center gap-2 hover:underline">
                    Explore all features <ArrowRight size={18} />
                </button>
            </div>
         </div>
         
         {/* Faded Background elements decoration */}
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50 z-0 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default FeaturesGrid;