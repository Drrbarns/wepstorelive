import React from 'react';
import { Globe, ShoppingBag, Instagram, Facebook, Smartphone, Zap, ArrowRight, Share2 } from 'lucide-react';

const VideoSection: React.FC = () => {
  return (
    <section className="bg-dark py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
              
              {/* Left Content */}
              <div>
                  <div className="inline-block border border-blue-500/30 bg-blue-500/10 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider text-blue-400 mb-6 backdrop-blur-md">
                      Omnichannel Growth
                  </div>
                  <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
                      Sell everywhere <br/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">simultaneously.</span>
                  </h2>
                  <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-lg">
                      One central dashboard to rule them all. Sync your inventory and products to TikTok, Instagram, Amazon, and Google Shopping in a single click.
                  </p>
                  
                  <div className="flex flex-col gap-6">
                      <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-gray-800 flex items-center justify-center flex-shrink-0 border border-gray-700 text-pink-500">
                              <Share2 size={24} />
                          </div>
                          <div>
                              <h4 className="text-white font-bold text-lg">Unified Inventory</h4>
                              <p className="text-gray-500">Sell on 5 channels, deduct from 1 stock. Never oversell again.</p>
                          </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-gray-800 flex items-center justify-center flex-shrink-0 border border-gray-700 text-blue-400">
                              <Zap size={24} />
                          </div>
                          <div>
                              <h4 className="text-white font-bold text-lg">Instant Sync</h4>
                              <p className="text-gray-500">Update a price once, watch it change everywhere instantly.</p>
                          </div>
                      </div>
                  </div>
                  
                  <button className="mt-12 bg-white text-dark px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-gray-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                      Explore Integrations <ArrowRight size={20} />
                  </button>
              </div>

              {/* Right Visualization: Magic Omnichannel Graph */}
              <div className="relative h-[600px] flex items-center justify-center">
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full opacity-50 animate-pulse-slow"></div>
                  
                  {/* Orbital Rings */}
                  <div className="absolute w-[500px] h-[500px] border border-white/5 rounded-full animate-spin-slow"></div>
                  <div className="absolute w-[350px] h-[350px] border border-white/10 rounded-full animate-spin-reverse-slow border-dashed"></div>

                  {/* Central Hub */}
                  <div className="relative z-20 w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl flex items-center justify-center shadow-[0_0_50px_rgba(37,99,235,0.5)] border-4 border-gray-900 animate-float">
                        <ShoppingBag size={48} className="text-white" strokeWidth={1.5} />
                        {/* Badge */}
                        <div className="absolute -bottom-4 bg-gray-900 border border-gray-700 text-white text-xs px-3 py-1 rounded-full font-bold">
                            Your Store
                        </div>
                  </div>

                  {/* Satellites */}
                  {/* Satellite 1: Instagram */}
                  <div className="absolute top-10 right-20 animate-float-delayed">
                      <div className="w-20 h-20 bg-gray-900 rounded-2xl border border-gray-700 flex items-center justify-center relative z-10 group hover:border-pink-500 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all cursor-pointer">
                          <Instagram size={32} className="text-pink-500" />
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-gray-900 flex items-center justify-center">
                              <span className="text-[10px] font-bold text-white">✓</span>
                          </div>
                      </div>
                      <div className="absolute top-10 right-20 w-32 h-[2px] bg-gradient-to-l from-pink-500/50 to-transparent -rotate-45 transform origin-right -z-10"></div>
                  </div>

                  {/* Satellite 2: Facebook */}
                  <div className="absolute bottom-20 right-10 animate-float">
                      <div className="w-16 h-16 bg-gray-900 rounded-2xl border border-gray-700 flex items-center justify-center relative z-10 group hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all cursor-pointer">
                          <Facebook size={28} className="text-blue-500" />
                      </div>
                  </div>

                  {/* Satellite 3: Web */}
                  <div className="absolute top-20 left-10 animate-float">
                      <div className="w-16 h-16 bg-gray-900 rounded-2xl border border-gray-700 flex items-center justify-center relative z-10 group hover:border-emerald-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all cursor-pointer">
                          <Globe size={28} className="text-emerald-500" />
                      </div>
                  </div>

                   {/* Satellite 4: Mobile */}
                   <div className="absolute bottom-10 left-20 animate-float-delayed">
                      <div className="w-20 h-20 bg-gray-900 rounded-2xl border border-gray-700 flex items-center justify-center relative z-10 group hover:border-amber-500 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] transition-all cursor-pointer">
                          <Smartphone size={32} className="text-amber-500" />
                           <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gray-800 px-2 py-0.5 rounded border border-gray-700 text-[10px] text-gray-400 whitespace-nowrap">
                              App Store
                          </div>
                      </div>
                  </div>

                  {/* Connection Lines (Simulated with absolute divs for simplicity) */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="5,5" />
                        <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="5,5" />
                        <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="5,5" />
                        <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="5,5" />
                        
                        {/* Moving Particles */}
                        <circle r="3" fill="#3B82F6">
                            <animateMotion dur="3s" repeatCount="indefinite" path="M300,300 L450,150" />
                        </circle>
                         <circle r="3" fill="#EC4899">
                            <animateMotion dur="4s" repeatCount="indefinite" path="M450,150 L300,300" />
                        </circle>
                         <circle r="3" fill="#10B981">
                            <animateMotion dur="3.5s" repeatCount="indefinite" path="M300,300 L150,450" />
                        </circle>
                  </svg>

                  {/* Notification Popups */}
                  <div className="absolute top-[30%] left-[60%] bg-white/10 backdrop-blur-md border border-white/10 p-3 rounded-lg flex items-center gap-3 animate-fade-in-up" style={{animationDelay: '1s'}}>
                      <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-white"><ShoppingBag size={14}/></div>
                      <div>
                          <div className="text-white text-xs font-bold">New Order #1024</div>
                          <div className="text-gray-300 text-[10px]">$149.00 via Instagram</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
};

export default VideoSection;