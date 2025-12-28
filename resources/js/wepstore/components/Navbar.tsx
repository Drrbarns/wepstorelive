import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { COMPANY, EXTERNAL_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Brand Logo Component matching user request
  const BrandLogo = ({ lightMode }: { lightMode: boolean }) => (
    <div className="flex flex-col leading-none select-none group">
        <div className={`font-display font-bold text-2xl tracking-widest uppercase transition-colors duration-300 ${lightMode ? 'text-[#0B1121]' : 'text-white'}`}>
          WEP<span className="text-primary">STORE</span>
        </div>
        <div className="flex items-center gap-2 mt-1">
            <div className="h-[2px] w-full bg-primary rounded-full max-w-[30px]"></div>
            <span className={`text-[0.5rem] font-bold uppercase tracking-widest whitespace-nowrap ${lightMode ? 'text-gray-600' : 'text-gray-400'}`}>
              {COMPANY.TAGLINE}
            </span>
        </div>
    </div>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${isScrolled ? 'pt-4' : 'pt-6'}`}>
      <div 
        className={`relative mx-auto transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] ${isScrolled ? 'w-[95%] max-w-7xl bg-white/90 backdrop-blur-xl shadow-xl shadow-black/5 border border-gray-200/50 py-3 px-6 rounded-2xl' : 'w-[95%] max-w-7xl bg-transparent py-4 px-8 rounded-none'}`}
      >
        <nav className="flex items-center justify-between relative z-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity" aria-label="WepStore Home">
             <BrandLogo lightMode={isScrolled} />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            <Link to="/" className={`px-5 py-2 text-sm font-semibold transition-colors rounded-full hover:bg-white/10 ${isScrolled ? 'text-gray-600 hover:text-primary hover:bg-gray-100' : 'text-gray-300 hover:text-white'}`}>
                Home
            </Link>

            <Link to="/about" className={`px-5 py-2 text-sm font-semibold transition-colors rounded-full hover:bg-white/10 ${isScrolled ? 'text-gray-600 hover:text-primary hover:bg-gray-100' : 'text-gray-300 hover:text-white'}`}>
                About Us
            </Link>

            <Link to="/pricing" className={`px-5 py-2 text-sm font-semibold transition-colors rounded-full hover:bg-white/10 ${isScrolled ? 'text-gray-600 hover:text-primary hover:bg-gray-100' : 'text-gray-300 hover:text-white'}`}>
                Pricing
            </Link>

            <Link to="/faq" className={`px-5 py-2 text-sm font-semibold transition-colors rounded-full hover:bg-white/10 ${isScrolled ? 'text-gray-600 hover:text-primary hover:bg-gray-100' : 'text-gray-300 hover:text-white'}`}>
                FAQ
            </Link>

            <Link to="/contact" className={`px-5 py-2 text-sm font-semibold transition-colors rounded-full hover:bg-white/10 ${isScrolled ? 'text-gray-600 hover:text-primary hover:bg-gray-100' : 'text-gray-300 hover:text-white'}`}>
                Contact Us
            </Link>

          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href={EXTERNAL_LINKS.LOGIN} className={`text-sm font-bold transition-colors ${isScrolled ? 'text-gray-700 hover:text-black' : 'text-gray-300 hover:text-white'}`} aria-label="Log in to WepStore">Log in</a>
            <a href={EXTERNAL_LINKS.REGISTER} className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5" aria-label="Start free trial">
              Start Free Trial
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`lg:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>


        {/* Mobile Menu Backdrop */}
        {mobileMenuOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-20"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          />
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 mt-4 bg-white rounded-2xl shadow-2xl p-6 flex flex-col gap-4 border border-gray-100 animate-fade-in-up z-30 mx-4">
            <div className="flex flex-col gap-2">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Menu</div>
                <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-gray-800 py-2 border-b border-gray-50">Home</Link>
                <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-gray-800 py-2 border-b border-gray-50">About Us</Link>
                <Link to="/pricing" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-gray-800 py-2 border-b border-gray-50">Pricing</Link>
                <Link to="/faq" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-gray-800 py-2 border-b border-gray-50">FAQ</Link>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-gray-800 py-2">Contact Us</Link>
            </div>
            <div className="mt-4 flex flex-col gap-3">
                 <a href={EXTERNAL_LINKS.LOGIN} className="text-center font-bold text-gray-600 py-3 bg-gray-50 rounded-xl">Log in</a>
                <a href={EXTERNAL_LINKS.REGISTER} className="bg-primary text-white py-3 rounded-xl font-bold shadow-lg shadow-primary/30 text-center">Start Free Trial</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;