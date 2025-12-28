import React from 'react';
import { HelpCircle, Search } from 'lucide-react';
import FAQ from '../components/FAQ';

const FAQPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-dark pt-40 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs font-medium text-white mb-8 backdrop-blur-sm">
            <HelpCircle size={14} className="text-primary" />
            Help Center
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
            How can we <br />
            <span className="text-highlight-blue text-dark cursor-default">help you?</span>
          </h1>
          
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Find answers to commonly asked questions about WepStore
          </p>

          {/* Search Box */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search for answers..."
              className="w-full pl-14 pr-6 py-4 rounded-full border-2 border-white/10 bg-white/5 backdrop-blur-sm text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-all"
            />
          </div>
        </div>
      </section>

      {/* Main FAQ Component */}
      <FAQ />

      {/* Additional Categories */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              More questions?
            </h2>
            <p className="text-xl text-gray-500">
              Browse by category to find what you're looking for
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Getting Started</h3>
              <p className="text-gray-500 text-sm mb-4">Learn the basics of setting up your store</p>
              <span className="text-primary font-bold text-sm group-hover:underline">View Articles →</span>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Payments & Billing</h3>
              <p className="text-gray-500 text-sm mb-4">Payment options and billing information</p>
              <span className="text-emerald-600 font-bold text-sm group-hover:underline">View Articles →</span>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
              <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Design & Themes</h3>
              <p className="text-gray-500 text-sm mb-4">Customize your store's appearance</p>
              <span className="text-purple-600 font-bold text-sm group-hover:underline">View Articles →</span>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
              <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Security & Privacy</h3>
              <p className="text-gray-500 text-sm mb-4">Keep your store and data secure</p>
              <span className="text-amber-600 font-bold text-sm group-hover:underline">View Articles →</span>
            </div>
          </div>
        </div>
      </section>

      {/* Still Need Help Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
            Still need help?
          </h2>
          <p className="text-xl text-gray-500 mb-10">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20 inline-flex items-center justify-center"
            >
              Contact Support
            </a>
            <a 
              href="mailto:support@wepstore.com"
              className="bg-gray-100 text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-colors inline-flex items-center justify-center"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;



