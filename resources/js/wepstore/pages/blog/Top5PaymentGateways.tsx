import React from 'react';
import { Calendar, User, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Top5PaymentGateways: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-dark pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
            <ArrowLeft size={18} />
            Back to Blog
          </Link>
          <div className="inline-block bg-blue-50 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            FinTech
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight mb-6">
            Top 5 Payment Gateways for West African Merchants
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              Nov 15, 2025
            </span>
            <span className="flex items-center gap-2">
              <User size={16} />
              Ama Mensah
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} />
              8 min read
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              A comprehensive comparison of the best payment solutions for businesses in Ghana, Nigeria, and beyond. Find the perfect gateway for your e-commerce store.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Why Payment Gateway Choice Matters</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Choosing the right payment gateway is crucial for your e-commerce success. In West Africa, where payment preferences vary significantly, selecting a gateway that supports local payment methods can increase your conversion rates by up to 40%.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">1. Mobile Money Integration</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Mobile Money is the undisputed leader in West African payments. With over 80% of Ghanaians using Mobile Money for online transactions, this should be your top priority.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-600 mb-6">
              <li>MTN Mobile Money - Ghana's most popular with 20M+ users</li>
              <li>Vodafone Cash - Widely accepted across the region</li>
              <li>AirtelTigo Money - Growing network with competitive rates</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">2. Stripe</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Stripe offers excellent international card processing with support for over 135 currencies. While it doesn't natively support Mobile Money, it's perfect for merchants targeting international customers.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">3. Paystack</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Paystack is Nigeria's leading payment gateway, now expanding across West Africa. It offers excellent Mobile Money integration and card processing with competitive rates.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">4. Flutterwave</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Flutterwave provides comprehensive payment solutions across Africa, supporting multiple payment methods including cards, bank transfers, and Mobile Money.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">5. WepStore Payments</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our integrated payment solution offers zero transaction fees, native Mobile Money support, and seamless integration with your WepStore. Built specifically for African merchants.
            </p>

            <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-r-xl my-12">
              <p className="text-gray-700 font-medium">
                <strong>Pro Tip:</strong> For maximum conversion in Ghana, prioritize Mobile Money integration. Most customers prefer paying with their mobile wallets over cards.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusion</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The best payment gateway for your business depends on your target market. For Ghanaian merchants, Mobile Money should be non-negotiable. Combine it with card processing for international customers, and you'll have a winning payment strategy.
            </p>
          </div>

          {/* Share */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Share this article</h3>
                <div className="flex gap-4">
                  <button className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-200 transition-colors">
                    <Share2 size={18} />
                  </button>
                </div>
              </div>
              <Link to="/blog" className="text-primary font-bold hover:underline flex items-center gap-2">
                View All Articles <ArrowLeft size={18} className="rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Top5PaymentGateways;

