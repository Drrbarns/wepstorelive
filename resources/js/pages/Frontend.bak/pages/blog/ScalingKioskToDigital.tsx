import Layout from '../../Layout';
import React from 'react';
import { Calendar, User, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { Link } from '@inertiajs/react';

const ScalingKioskToDigital: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-dark pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
            <ArrowLeft size={18} />
            Back to Blog
          </Link>
          <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            Featured
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight mb-6">
            Scaling from a Kiosk to a Digital Empire: The WepStore Journey
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              Oct 24, 2025
            </span>
            <span className="flex items-center gap-2">
              <User size={16} />
              Dr. Barns
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} />
              15 min read
            </span>
          </div>
        </div>
      </section>

      <article className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              How local entrepreneurs are leveraging WepStore's mobile-first tools to bypass traditional brick-and-mortar limitations and reach a global audience instantly.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Traditional Kiosk Model</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              For decades, small businesses in Ghana operated from physical kiosks and market stalls. While this model worked, it had significant limitations: limited reach, high overhead costs, and dependency on foot traffic.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Digital Transformation</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              With the rise of smartphones and Mobile Money, a new opportunity emerged. Entrepreneurs could now reach customers beyond their physical location, accept payments digitally, and scale without the constraints of physical space.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Real Success Stories</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We've seen countless merchants transform their businesses:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-600 mb-6">
              <li>A small kiosk selling phone accessories now ships nationwide</li>
              <li>A local tailor expanded to serve customers across West Africa</li>
              <li>A food vendor created a delivery service reaching thousands</li>
              <li>A crafts seller now exports to international markets</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The WepStore Advantage</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              What makes WepStore different is our focus on African realities:
            </p>
            <ol className="list-decimal pl-6 space-y-4 text-gray-600 mb-6">
              <li><strong>Mobile Money First:</strong> Built for how Africans actually pay</li>
              <li><strong>Affordable Pricing:</strong> Accessible to small businesses</li>
              <li><strong>Local Support:</strong> Understanding of African business needs</li>
              <li><strong>Simple Setup:</strong> No technical knowledge required</li>
            </ol>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Impact</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Since launching, WepStore has helped over 25,000 merchants go digital. These businesses have collectively processed over $2.5 million in transactions, creating economic opportunities across Africa.
            </p>

            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl my-12">
              <p className="text-gray-700 font-medium">
                <strong>Our Mission:</strong> To democratize e-commerce in Africa, making it possible for anyone with a product and a dream to build a successful online business.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Looking Forward</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The future of African e-commerce is bright. As internet penetration increases and Mobile Money adoption grows, we're seeing more entrepreneurs make the leap from kiosk to digital empire. WepStore is here to make that journey easier.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusion</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The transformation from physical kiosk to digital storefront is no longer a distant dream—it's happening now, across Africa. With the right tools and platform, any entrepreneur can scale beyond their physical limitations and build a business that reaches the world.
            </p>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Share this article</h3>
                <div className="flex gap-4">
                  <button className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary/20 transition-colors">
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

ScalingKioskToDigital.layout = (page: any) => <Layout>{page}</Layout>;
export default ScalingKioskToDigital;





