import React from 'react';
import { Calendar, User, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const DropshippingGhana: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-dark pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
            <ArrowLeft size={18} />
            Back to Blog
          </Link>
          <div className="inline-block bg-emerald-50 text-emerald-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            Business
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight mb-6">
            Dropshipping in Ghana: A Complete Guide for 2025
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              Nov 5, 2025
            </span>
            <span className="flex items-center gap-2">
              <User size={16} />
              Kojo Boateng
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} />
              10 min read
            </span>
          </div>
        </div>
      </section>

      <article className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Step-by-step guide to starting a successful dropshipping business in Ghana without holding inventory. Learn how to source products, set up your store, and handle logistics.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What is Dropshipping?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Dropshipping is a retail fulfillment method where you don't keep products in stock. Instead, when you sell a product, you purchase it from a third party and have it shipped directly to the customer.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Why Dropshipping Works in Ghana</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Ghana's growing e-commerce market, combined with increasing internet penetration and mobile money adoption, makes it an ideal environment for dropshipping businesses.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Getting Started</h2>
            <ol className="list-decimal pl-6 space-y-4 text-gray-600 mb-6">
              <li><strong>Choose Your Niche:</strong> Focus on products with high demand and good profit margins</li>
              <li><strong>Find Suppliers:</strong> Research reliable suppliers in China, Turkey, or local Ghanaian manufacturers</li>
              <li><strong>Set Up Your Store:</strong> Use WepStore to create your online store quickly</li>
              <li><strong>Set Up Payment Methods:</strong> Integrate Mobile Money for local customers</li>
              <li><strong>Market Your Store:</strong> Use social media and digital marketing to reach customers</li>
            </ol>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Challenges and Solutions</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Dropshipping in Ghana comes with unique challenges like shipping times and customs. However, with proper planning and the right suppliers, these can be managed effectively.
            </p>

            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-xl my-12">
              <p className="text-gray-700 font-medium">
                <strong>Pro Tip:</strong> Start with products that have fast shipping times (7-14 days) to build customer trust. As you grow, you can expand to longer shipping times.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusion</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Dropshipping offers a low-risk way to start an e-commerce business in Ghana. With the right strategy and tools like WepStore, you can build a profitable online store without significant upfront investment.
            </p>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Share this article</h3>
                <div className="flex gap-4">
                  <button className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center hover:bg-emerald-200 transition-colors">
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

export default DropshippingGhana;

