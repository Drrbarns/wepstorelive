import React from 'react';
import { Link } from '@inertiajs/react';
import { ShoppingBag, Linkedin, Facebook, X, Instagram, Globe } from 'lucide-react';
import { COMPANY, SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  // Recreated Logo Component for Footer
  const FooterLogo = () => (
    <div className="flex flex-col leading-none select-none group mb-6">
        <div className="font-display font-bold text-2xl tracking-widest uppercase text-white">
          WEP<span className="text-primary">STORE</span>
        </div>
        <div className="flex items-center gap-2 mt-1">
            <div className="h-[2px] w-full bg-primary rounded-full max-w-[30px]"></div>
            <span className="text-[0.5rem] font-bold uppercase tracking-widest whitespace-nowrap text-gray-400">
              {COMPANY.TAGLINE}
            </span>
        </div>
    </div>
  );

  return (
    <footer className="bg-dark text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
            <div className="md:col-span-4">
                 <FooterLogo />
                <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
                    The all-in-one commerce platform to start, run, and grow a business.
                </p>
                <div className="mt-8 flex items-center gap-2 text-sm text-white border border-gray-700 rounded-full px-4 py-2 w-fit cursor-pointer hover:bg-gray-800 transition-colors">
                    <Globe size={16} /> English
                </div>
            </div>

            <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <h4 className="text-gray-500 font-bold text-xs uppercase tracking-wider mb-6">Product</h4>
                    <ul className="space-y-4 text-sm font-medium">
                        <li><Link to="/" className="hover:text-primary transition-colors">Store Builder</Link></li>
                        <li><Link to="/payments" className="hover:text-primary transition-colors">Payments</Link></li>
                        <li><Link to="/" className="hover:text-primary transition-colors">Marketing</Link></li>
                        <li><Link to="/" className="hover:text-primary transition-colors">Mobile App</Link></li>
                        <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
                    </ul>
                </div>
                 <div>
                    <h4 className="text-gray-500 font-bold text-xs uppercase tracking-wider mb-6">Company</h4>
                    <ul className="space-y-4 text-sm font-medium">
                        <li><Link to="/about" className="hover:text-primary transition-colors">About us</Link></li>
                        <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
                        <li><Link to="/blog" className="hover:text-primary transition-colors">Press</Link></li>
                        <li><Link to="/partners" className="hover:text-primary transition-colors">Partners</Link></li>
                        <li><Link to="/affiliate" className="hover:text-primary transition-colors">Affiliates</Link></li>
                    </ul>
                </div>
                 <div>
                    <h4 className="text-gray-500 font-bold text-xs uppercase tracking-wider mb-6">Resources</h4>
                    <ul className="space-y-4 text-sm font-medium">
                        <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                        <li><Link to="/faq" className="hover:text-primary transition-colors">Guides</Link></li>
                        <li><Link to="/faq" className="hover:text-primary transition-colors">Business Tools</Link></li>
                        <li><Link to="/faq" className="hover:text-primary transition-colors">Help Center</Link></li>
                        <li><Link to="/developers" className="hover:text-primary transition-colors">API Docs</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-gray-500 font-bold text-xs uppercase tracking-wider mb-6">Legal</h4>
                    <ul className="space-y-4 text-sm font-medium">
                        <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                        <li><Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
                        <li><Link to="/contact" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
                        <li><Link to="/contact" className="hover:text-primary transition-colors">GDPR</Link></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm">
                {COMPANY.NAME} © {COMPANY.YEAR}, All rights reserved.
            </div>
            <div className="flex gap-6 text-gray-400">
                <a href={SOCIAL_LINKS.LINKEDIN} aria-label="LinkedIn">
                  <Linkedin size={20} className="hover:text-white cursor-pointer transition-colors"/>
                </a>
                <a href={SOCIAL_LINKS.FACEBOOK} aria-label="Facebook">
                  <Facebook size={20} className="hover:text-white cursor-pointer transition-colors"/>
                </a>
                <a href={SOCIAL_LINKS.TWITTER} aria-label="Twitter/X">
                  <X size={20} className="hover:text-white cursor-pointer transition-colors"/>
                </a>
                <a href={SOCIAL_LINKS.INSTAGRAM} aria-label="Instagram">
                  <Instagram size={20} className="hover:text-white cursor-pointer transition-colors"/>
                </a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

