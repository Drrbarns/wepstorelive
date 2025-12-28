import React from 'react';
import { ArrowRight, TrendingUp, ShoppingBag } from 'lucide-react';
import { EXTERNAL_LINKS } from '../constants';

const FooterCTA: React.FC = () => {
  return (
    <section className="bg-white pt-24 pb-0 relative overflow-hidden">
       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10 pb-24">
              <h2 className="text-5xl md:text-7xl font-display font-bold text-dark mb-6 leading-tight">
                Start your business journey today.
              </h2>
              <p className="text-xl text-gray-600 mb-10">
                Join thousands of merchants who trust WepStore to power their sales. 14-day free trial, no credit card required.
              </p>
              <a href={EXTERNAL_LINKS.REGISTER} className="bg-primary text-white text-lg px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30" aria-label="Start your free trial">
                Start Free Trial <ArrowRight size={20} aria-hidden="true" />
              </a>
          </div>

          <div className="relative z-10 translate-y-10">
               {/* Mockup of Mobile App */}
               <div className="bg-white rounded-t-3xl shadow-2xl p-6 pb-0 border border-gray-200 max-w-sm mx-auto relative">
                   {/* Phone notch/header */}
                   <div className="flex justify-between items-center mb-6">
                        <div className="w-8 h-8 bg-gray-100 rounded-full"></div>
                        <div className="font-bold text-gray-900">WepStore App</div>
                        <BellIcon />
                   </div>
                   
                   {/* Sales Card */}
                   <div className="bg-dark text-white p-6 rounded-2xl mb-4 shadow-lg">
                        <div className="text-gray-400 text-xs mb-1">Total Sales today</div>
                        <div className="text-3xl font-bold mb-4">$1,240.50</div>
                        <div className="flex gap-2">
                             <span className="bg-white/10 text-xs px-2 py-1 rounded flex items-center gap-1">Orders: 12</span>
                             <span className="bg-emerald-500/20 text-emerald-400 text-xs px-2 py-1 rounded flex items-center gap-1">+15%</span>
                        </div>
                   </div>

                   {/* Order List */}
                   <div className="space-y-3">
                       {[1, 2, 3].map(i => (
                           <div key={i} className="flex items-center justify-between p-3 border border-gray-100 rounded-xl bg-gray-50">
                               <div className="flex items-center gap-3">
                                   <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                                       <ShoppingBag size={16} className="text-primary"/>
                                   </div>
                                   <div>
                                       <div className="text-xs font-bold text-gray-800">New Order #492</div>
                                       <div className="text-[10px] text-gray-500">Just now</div>
                                   </div>
                               </div>
                               <div className="text-sm font-bold text-gray-900">+$49.00</div>
                           </div>
                       ))}
                   </div>
                   
                   {/* Fade out at bottom */}
                   <div className="h-20 bg-gradient-to-t from-white to-transparent absolute bottom-0 left-0 w-full"></div>
               </div>
          </div>
       </div>
    </section>
  );
};

const BellIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
)

export default FooterCTA;

