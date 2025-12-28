import React from 'react';
import { BarChart3, Globe, Shield } from 'lucide-react';

const MultiStoreFeatures: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Complete Multi-Store SaaS Platform
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            From store creation to theme customization, our SaaS platform provides all the tools you need to run a successful multi-store business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <BarChart3 size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Analytics & Insights</h3>
            <p className="text-gray-500 leading-relaxed">
              Track views, clicks, and engagement metrics. Understand how your network interacts with your card.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <Globe size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Domains</h3>
            <p className="text-gray-500 leading-relaxed">
              Use your own domain for a professional branded experience. Build trust with custom URLs.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
             <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <Shield size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Secure & Private</h3>
            <p className="text-gray-500 leading-relaxed">
              Enterprise-grade security with privacy controls. Your data is protected and under your control.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiStoreFeatures;