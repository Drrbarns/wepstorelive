import React from 'react';
import { ArrowRight, MoreHorizontal, MousePointer2, Image as ImageIcon, Type, Layers, TrendingUp, Zap, DollarSign } from 'lucide-react';

const FeaturesHighlight: React.FC = () => {
  return (
    <section id="features" className="max-w-7xl mx-auto px-6">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-block border border-blue-200 bg-blue-50 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary mb-4 cursor-default">
            Revenue Engine
        </div>
        <h2 className="text-4xl md:text-6xl font-display font-bold text-gray-900 tracking-tight">
          Stop leaving money <br /> on the <span className="text-highlight-blue cursor-default">table</span>.
        </h2>
        <p className="mt-6 text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Most builders just help you launch. WepStore is engineered to obsessively convert your visitors into high-value, repeat customers.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Feature 1: Design / Conversion */}
        <div className="bg-accent-light rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden min-h-[600px] group transition-all duration-500 hover:shadow-xl border border-blue-100/50">
            <div className="relative z-10 max-w-md">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 text-white shadow-lg shadow-blue-600/20">
                    <Layers size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    Design that converts <br/> <span className="text-primary">40% better.</span>
                </h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    Forget "pretty" websites. Our templates are psychologically optimized to reduce bounce rates and guide shoppers straight to checkout.
                </p>
                
                <button className="bg-gray-900 text-white px-8 py-3.5 rounded-full font-bold flex items-center gap-2 text-sm hover:bg-black transition-all transform group-hover:translate-x-1 shadow-lg">
                    Build your store <ArrowRight size={18} />
                </button>
            </div>
            
            {/* Mockup in Card */}
            <div className="absolute bottom-0 right-0 left-12 top-80 bg-white rounded-tl-3xl p-2 shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-700 transform translate-y-12 group-hover:translate-y-6 border border-gray-100">
                 <div className="bg-slate-50 rounded-tl-2xl h-full w-full overflow-hidden relative">
                    {/* Fake Editor UI */}
                    <div className="absolute top-6 right-6 flex gap-2 z-20">
                         <div className="bg-white p-3 rounded-xl shadow-md border border-gray-100 animate-bounce"><MousePointer2 size={20} className="text-primary" /></div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 p-8 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="col-span-2 h-40 bg-gray-200 rounded-xl animate-pulse"></div>
                        <div className="h-40 bg-gray-200 rounded-xl"></div>
                        <div className="h-40 bg-gray-200 rounded-xl"></div>
                    </div>

                    {/* Floating Elements Toolbox */}
                    <div className="absolute top-12 left-8 bg-white shadow-xl rounded-2xl p-4 border border-gray-100 w-48 transform transition-all duration-700 group-hover:-translate-y-4 group-hover:scale-105">
                        <div className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-wide">High-Converting Blocks</div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-3 p-2.5 hover:bg-blue-50 rounded-lg cursor-pointer transition-colors">
                                <div className="bg-blue-100 p-1 rounded"><ImageIcon size={14} className="text-blue-600" /></div>
                                <span className="text-sm font-bold text-gray-700">Hero Product</span>
                            </div>
                            <div className="flex items-center gap-3 p-2.5 hover:bg-indigo-50 rounded-lg cursor-pointer transition-colors">
                                <div className="bg-indigo-100 p-1 rounded"><DollarSign size={14} className="text-indigo-600" /></div>
                                <span className="text-sm font-bold text-gray-700">Upsell Bundle</span>
                            </div>
                            <div className="flex items-center gap-3 p-2.5 hover:bg-emerald-50 rounded-lg cursor-pointer transition-colors">
                                <div className="bg-emerald-100 p-1 rounded"><Zap size={14} className="text-emerald-600" /></div>
                                <span className="text-sm font-bold text-gray-700">Flash Sale Timer</span>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </div>

        {/* Feature 2: Analytics / Profit */}
        <div className="bg-dark rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden min-h-[600px] text-white group transition-all duration-500 hover:shadow-2xl border border-gray-800">
             <div className="relative z-10 max-w-md">
                 <div className="w-14 h-14 bg-gray-800 rounded-2xl flex items-center justify-center mb-8 text-emerald-400 border border-gray-700">
                    <TrendingUp size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                    Data-driven <br /> <span className="text-emerald-400">market dominance.</span>
                </h3>
                <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                    Stop guessing. Our profit-first dashboard shows you exactly which products, ads, and customers are making you money in real-time.
                </p>
             </div>

             {/* Floating Card Mockup - Moved Position to avoid overlap */}
             <div className="bg-white text-gray-900 rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] w-72 absolute bottom-10 right-10 transform transition-all duration-700 group-hover:scale-105 group-hover:-translate-y-4 z-20 border border-gray-700 hidden md:block">
                <div className="flex justify-between items-start mb-3">
                    <div>
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Total Revenue</span>
                        <div className="text-3xl font-bold text-gray-900 mt-1">$288,402</div>
                    </div>
                    <div className="bg-gray-100 p-1.5 rounded-lg hover:bg-gray-200 cursor-pointer">
                        <MoreHorizontal size={16} className="text-gray-500" />
                    </div>
                </div>
                <div className="flex items-center gap-3 mb-6">
                        <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-1 rounded-md flex items-center gap-1">
                            <TrendingUp size={10} /> 24.5%
                        </span>
                        <span className="text-xs text-gray-400 font-medium">vs last month</span>
                </div>
                <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase">
                        <span>Goal</span>
                        <span>82%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 w-[82%] rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Chart Background Decoration */}
            <div className="absolute bottom-0 left-0 right-0 h-96 pointer-events-none transition-transform duration-1000 group-hover:scale-[1.02] origin-bottom">
                    <div className="bg-[#111827] rounded-t-3xl p-6 h-full w-full border-t border-l border-r border-white/10 overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-emerald-500/10 to-transparent"></div>
                    
                    {/* SVG Chart */}
                    <svg className="w-full h-full absolute bottom-0 left-0" viewBox="0 0 300 100" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="rgba(16, 185, 129, 0.2)" />
                                    <stop offset="100%" stopColor="rgba(16, 185, 129, 0)" />
                                </linearGradient>
                            </defs>
                            <path d="M0,80 C50,75 80,40 120,55 C160,70 200,20 250,40 L300,10 L300,100 L0,100 Z" fill="url(#chartGradient)" />
                            <path d="M0,80 C50,75 80,40 120,55 C160,70 200,20 250,40 L300,10" fill="none" stroke="#10B981" strokeWidth="3" className="group-hover:stroke-[4px] transition-all" />
                    </svg>
                    
                    {/* Active Point */}
                    <div className="absolute top-[25%] left-[75%]">
                         <div className="relative">
                             <div className="absolute -inset-2 bg-emerald-500/30 rounded-full animate-ping"></div>
                             <div className="w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_20px_#10B981] relative z-10"></div>
                             
                             {/* Tooltip */}
                             <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-gray-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                New High: $12,400
                                <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45"></div>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturesHighlight;


