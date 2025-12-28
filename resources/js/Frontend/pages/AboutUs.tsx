import React from 'react';
import { Target, Users, Zap, Award, TrendingUp, Globe, ShieldCheck, Sparkles } from 'lucide-react';
import { STATS, COMPANY, EXTERNAL_LINKS } from '../constants';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-dark pt-40 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2564&auto=format&fit=crop" 
              alt="Team collaboration" 
              className="w-full h-full object-cover opacity-20"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/80 to-dark"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs font-medium text-white mb-8 backdrop-blur-sm">
            <Sparkles size={14} className="text-primary" />
            About {COMPANY.NAME}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
            Building the future of <br />
            <span className="text-highlight-blue text-dark cursor-default">e-commerce</span> in Africa
          </h1>
          
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            We're on a mission to empower entrepreneurs across Africa with world-class tools to launch, manage, and scale their online businesses.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-[2.5rem] p-10 border border-blue-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target size={32} className="text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To democratize e-commerce across Africa by providing affordable, powerful tools that enable anyone to start and grow their online business.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-[2.5rem] p-10 border border-purple-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles size={32} className="text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading e-commerce platform in Africa, powering millions of successful online businesses and creating economic opportunities.
              </p>
            </div>

            {/* Values */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-[2.5rem] p-10 border border-emerald-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award size={32} className="text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600 leading-relaxed">
                Innovation, integrity, customer success, and community empowerment drive everything we do at {COMPANY.NAME}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block border border-primary/20 bg-primary/5 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary mb-6">
                Our Story
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                From a vision to <br />
                <span className="text-primary">empowering thousands</span>
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  {COMPANY.NAME} was born from a simple observation: talented entrepreneurs across Africa were held back by expensive, complex e-commerce platforms that didn't understand their needs.
                </p>
                <p>
                  Founded by {COMPANY.TAGLINE}, we set out to build something different—a platform that combines enterprise-grade features with simplicity and affordability.
                </p>
                <p>
                  Today, we're proud to power {STATS.ACTIVE_STORES} across {STATS.COUNTRIES_SERVED}, helping merchants generate over {STATS.REVENUE_GENERATED} in revenue.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 rounded-2xl bg-blue-50 border border-blue-100">
                    <div className="text-4xl font-bold text-primary mb-2">{STATS.ACTIVE_STORES}</div>
                    <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Active Stores</div>
                  </div>
                  <div className="text-center p-6 rounded-2xl bg-emerald-50 border border-emerald-100">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">{STATS.UPTIME}</div>
                    <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Uptime</div>
                  </div>
                  <div className="text-center p-6 rounded-2xl bg-purple-50 border border-purple-100">
                    <div className="text-4xl font-bold text-purple-600 mb-2">{STATS.COUNTRIES_SERVED}</div>
                    <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Countries</div>
                  </div>
                  <div className="text-center p-6 rounded-2xl bg-amber-50 border border-amber-100">
                    <div className="text-4xl font-bold text-amber-600 mb-2">{STATS.REVENUE_GENERATED}</div>
                    <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Revenue</div>
                  </div>
                </div>
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-3xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-indigo-100 rounded-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Why businesses <span className="text-primary">trust us</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              We're more than a platform—we're your partner in success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Zap size={36} className="text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lightning Fast</h3>
              <p className="text-gray-500">Launch your store in minutes, not weeks. No technical knowledge required.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck size={36} className="text-emerald-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Secure & Reliable</h3>
              <p className="text-gray-500">{STATS.UPTIME} uptime with enterprise-grade security for your peace of mind.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Globe size={36} className="text-purple-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Reach</h3>
              <p className="text-gray-500">Sell anywhere in {STATS.COUNTRIES_SERVED} with built-in multi-currency support.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp size={36} className="text-amber-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Growth Focused</h3>
              <p className="text-gray-500">Built-in marketing tools and analytics to help you grow faster.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2564&auto=format&fit=crop')] opacity-5 bg-cover bg-center"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider text-gray-400 mb-6">
            <Users size={14} />
            Our Team
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Built by entrepreneurs, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">for entrepreneurs</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Our diverse team brings together expertise in technology, design, and e-commerce to create the best platform for African entrepreneurs.
          </p>
          
          <a 
            href="/about#team" 
            className="inline-flex items-center gap-2 bg-white text-dark px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Meet the Team
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Ready to start your journey?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Join thousands of successful merchants who chose {COMPANY.NAME} to power their online stores.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={EXTERNAL_LINKS.REGISTER}
              className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center justify-center"
            >
              Start Free Trial
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
    </div>
  );
};

export default AboutUs;



