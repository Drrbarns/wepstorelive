import React from 'react';
import { Calendar, User, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { Link } from '@inertiajs/react';

const MobileMoneyIntegration: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-dark pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
            <ArrowLeft size={18} />
            Back to Blog
          </Link>
          <div className="inline-block bg-blue-50 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            Payments
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight mb-6">
            Mobile Money Integration: Boosting Conversion Rates
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              Nov 1, 2025
            </span>
            <span className="flex items-center gap-2">
              <User size={16} />
              Abena Antwi
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} />
              7 min read
            </span>
          </div>
        </div>
      </section>

      <article className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Why Mobile Money is essential for African e-commerce and how to implement it effectively to increase your conversion rates by up to 40%.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Mobile Money Revolution</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Mobile Money has transformed how Africans pay for goods and services. In Ghana alone, over 80% of online transactions are completed using Mobile Money, making it the standard payment method for e-commerce.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Why Conversion Rates Increase</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              When customers see their preferred payment method at checkout, they're more likely to complete their purchase. Mobile Money integration removes payment friction and builds trust.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-600 mb-6">
              <li>Familiar payment method reduces checkout abandonment</li>
              <li>Instant processing eliminates payment delays</li>
              <li>No need for credit cards or bank accounts</li>
              <li>Trusted by millions of Ghanaians</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Implementation Best Practices</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              To maximize your Mobile Money conversion rates, follow these best practices:
            </p>
            <ol className="list-decimal pl-6 space-y-4 text-gray-600 mb-6">
              <li><strong>Display Mobile Money First:</strong> Make it the primary payment option</li>
              <li><strong>Show All Providers:</strong> Support MTN, Vodafone, and AirtelTigo</li>
              <li><strong>Clear Instructions:</strong> Provide step-by-step payment guidance</li>
              <li><strong>Instant Confirmation:</strong> Send immediate order confirmations</li>
            </ol>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Real Results</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Merchants who add Mobile Money to their checkout process see an average 40% increase in conversion rates. This is especially true for stores targeting the Ghanaian market.
            </p>

            <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-r-xl my-12">
              <p className="text-gray-700 font-medium">
                <strong>Key Insight:</strong> Mobile Money isn't just a payment method—it's a conversion tool. Stores without Mobile Money are leaving money on the table.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusion</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Mobile Money integration is no longer optional for Ghanaian e-commerce stores. It's essential for reaching your full sales potential and providing the payment experience your customers expect.
            </p>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Share this article</h3>
                <div className="flex gap-4">
                  <button className="w-10 h-10 rounded-full bg-blue-100 text-primary flex items-center justify-center hover:bg-blue-200 transition-colors">
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

export default MobileMoneyIntegration;



