import React from 'react';
import { Calendar, User, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const AccraThriftSuccess: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-dark pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
            <ArrowLeft size={18} />
            Back to Blog
          </Link>
          <div className="inline-block bg-amber-50 text-amber-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            Case Study
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight mb-6">
            Success Story: How Accra Thrift Grew by 300%
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              Oct 28, 2025
            </span>
            <span className="flex items-center gap-2">
              <User size={16} />
              Emmanuel Darko
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} />
              9 min read
            </span>
          </div>
        </div>
      </section>

      <article className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Inside look at how one merchant tripled their revenue using WepStore's marketing tools, Mobile Money integration, and data-driven strategies.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Beginning</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Accra Thrift started as a small Instagram-based business selling second-hand clothing. The founder, Ama, was managing orders manually through DMs and WhatsApp, which limited her growth potential.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Challenge</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              As orders grew, manual management became unsustainable. Ama needed a platform that could handle inventory, process payments, and provide marketing tools—all while being affordable for a small business.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Solution: WepStore</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Ama migrated to WepStore and immediately saw improvements:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-600 mb-6">
              <li>Mobile Money integration increased checkout completion by 45%</li>
              <li>Automated inventory management saved 10+ hours per week</li>
              <li>Built-in marketing tools helped reach new customers</li>
              <li>Analytics dashboard revealed best-selling products</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Results</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Within 6 months, Accra Thrift achieved:
            </p>
            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="bg-amber-50 rounded-xl p-6 text-center border border-amber-100">
                <div className="text-4xl font-bold text-amber-600 mb-2">300%</div>
                <div className="text-sm text-gray-600">Revenue Growth</div>
              </div>
              <div className="bg-blue-50 rounded-xl p-6 text-center border border-blue-100">
                <div className="text-4xl font-bold text-primary mb-2">5x</div>
                <div className="text-sm text-gray-600">More Orders</div>
              </div>
              <div className="bg-emerald-50 rounded-xl p-6 text-center border border-emerald-100">
                <div className="text-4xl font-bold text-emerald-600 mb-2">45%</div>
                <div className="text-sm text-gray-600">Higher Conversion</div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Key Strategies</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Ama's success came from combining WepStore's tools with smart marketing:
            </p>
            <ol className="list-decimal pl-6 space-y-4 text-gray-600 mb-6">
              <li>Leveraged Mobile Money for instant payments</li>
              <li>Used email marketing to re-engage customers</li>
              <li>Optimized product pages based on analytics</li>
              <li>Created bundle deals to increase average order value</li>
            </ol>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-xl my-12">
              <p className="text-gray-700 font-medium">
                <strong>Quote from Ama:</strong> "WepStore didn't just give me a website—it gave me a complete business system. The Mobile Money integration alone changed everything."
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Lessons Learned</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              This case study shows that with the right tools and strategy, small businesses can achieve significant growth. The key is choosing a platform built for your market and using all available features.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusion</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Accra Thrift's 300% growth demonstrates the power of the right e-commerce platform. By choosing WepStore and leveraging Mobile Money, marketing tools, and analytics, Ama transformed her small business into a thriving online store.
            </p>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Share this article</h3>
                <div className="flex gap-4">
                  <button className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center hover:bg-amber-200 transition-colors">
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

export default AccraThriftSuccess;

