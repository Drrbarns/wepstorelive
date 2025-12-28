import React from 'react';
import { STATS } from '../constants';

const Clients: React.FC = () => {
  // Updated Logo to use distinct, vibrant brand colors for both icon AND text
  const Logo = ({ name, index }: { name: string, index: number }) => {
      const colors = [
        { bg: "bg-blue-500", text: "text-blue-600" }, 
        { bg: "bg-emerald-500", text: "text-emerald-600" }, 
        { bg: "bg-purple-500", text: "text-purple-600" }, 
        { bg: "bg-amber-500", text: "text-amber-600" }, 
        { bg: "bg-rose-500", text: "text-rose-600" }, 
        { bg: "bg-indigo-500", text: "text-indigo-600" }, 
        { bg: "bg-cyan-500", text: "text-cyan-600" }, 
        { bg: "bg-orange-500", text: "text-orange-600" }
      ];
      const theme = colors[index % colors.length];

      return (
        <div className="flex items-center gap-3 font-display font-bold text-xl transition-all cursor-pointer min-w-[160px] justify-center group">
          <div className={`w-10 h-10 rounded-xl ${theme.bg} flex items-center justify-center text-white shadow-lg shadow-black/5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
             <span className="font-sans text-lg font-black">{name.charAt(0)}</span>
          </div>
          <span className={`group-hover:brightness-110 transition-colors ${theme.text}`}>
             {name}
          </span>
        </div>
      );
  };

  const clients = [
    "VogueStore", "TechMart", "GreenLife", "UrbanWear", "PureSkin", "GadgetHub", "NovaHome", "FitGear",
    "VogueStore", "TechMart", "GreenLife", "UrbanWear", "PureSkin", "GadgetHub", "NovaHome", "FitGear"
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Empowering {STATS.BRANDS_EMPOWERED} fast-growing brands</p>
      </div>
        
      <div className="relative w-full overflow-hidden">
         {/* Gradient Masks for smooth fade at edges */}
         <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
         <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
         
         <div className="flex w-max animate-marquee hover:[animation-play-state:paused] py-4">
            {clients.map((client, i) => (
                <div key={i} className="mx-12">
                   <Logo name={client} index={i} />
                </div>
            ))}
         </div>
      </div>
    </section>
  );
};

export default Clients;


