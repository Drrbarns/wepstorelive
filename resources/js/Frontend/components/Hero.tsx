import React from 'react';
import { ArrowRight } from 'lucide-react';
import { TRIAL, ANIMATION_DELAYS, EXTERNAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="bg-dark pt-40 pb-32 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
            alt="Background" 
            className="w-full h-full object-cover opacity-50"
         />
         <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/40 to-white/5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        {/* Badge */}
        <div className="opacity-0 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs font-medium text-white mb-8 hover:bg-white/10 transition-colors cursor-default backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            WEPSTORE 2.0 IS LIVE
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6 tracking-tight opacity-0 animate-fade-in-up" style={{ animationDelay: ANIMATION_DELAYS.SHORT }}>
          Launch your dream <br />
          <span className="text-highlight-blue text-dark cursor-default">store</span> in minutes.
        </h1>

        {/* Subheadline */}
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: ANIMATION_DELAYS.MEDIUM }}>
          The all-in-one platform to build, manage, and scale your business. No coding required. Just pure e-commerce power.
        </p>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4 mb-20 opacity-0 animate-fade-in-up" style={{ animationDelay: ANIMATION_DELAYS.LONG }}>
            <div className="relative group">
                <a href={EXTERNAL_LINKS.REGISTER} className="bg-primary hover:bg-primary-dark text-white text-lg px-8 py-4 rounded-full font-medium flex items-center gap-2 transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] active:scale-95 relative z-30" aria-label="Start your free 14-day trial">
                  Start Free Trial <ArrowRight size={20} aria-hidden="true" />
                </a>
                <div className="absolute inset-0 bg-primary/50 blur-xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity z-10" aria-hidden="true"></div>
            </div>
            <div className="text-sm text-gray-500">
              {TRIAL.CREDIT_CARD_REQUIRED ? 'Credit card required' : 'No credit card required'} · {TRIAL.DURATION_DAYS}-day free trial
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

