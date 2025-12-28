import React from 'react';
import { Calendar, User, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { Link } from '@inertiajs/react';

const DesignTipsAfricanCulture: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-dark pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
            <ArrowLeft size={18} />
            Back to Blog
          </Link>
          <div className="inline-block bg-purple-50 text-purple-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            Design
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight mb-6">
            Design Tips: Reflecting African Culture in Your Store
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              Nov 10, 2025
            </span>
            <span className="flex items-center gap-2">
              <User size={16} />
              Kwame Osei
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} />
              6 min read
            </span>
          </div>
        </div>
      </section>

      <article className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              How to create authentic, culturally-rich e-commerce experiences that resonate with African customers and celebrate local heritage.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Understanding Cultural Context</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              African culture is rich, diverse, and deeply meaningful. When designing your e-commerce store, incorporating cultural elements authentically can create stronger connections with your customers.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Color Psychology in African Design</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Colors hold significant meaning in African cultures. Understanding these meanings can help you choose the right palette for your brand.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-600 mb-6">
              <li><strong>Red:</strong> Represents energy, passion, and life force</li>
              <li><strong>Green:</strong> Symbolizes growth, prosperity, and nature</li>
              <li><strong>Gold/Yellow:</strong> Associated with wealth, royalty, and the sun</li>
              <li><strong>Black:</strong> Represents maturity, strength, and unity</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Typography Choices</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Consider using fonts that reflect African aesthetics. Many modern fonts are inspired by traditional African calligraphy and can add authenticity to your design.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Imagery and Photography</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Use authentic imagery that represents your target market. Feature real people, real locations, and real products in contexts that your customers can relate to.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Language and Localization</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Consider offering your store in local languages. Even if you primarily use English, adding Twi, Ga, or other local languages can significantly improve user experience.
            </p>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-xl my-12">
              <p className="text-gray-700 font-medium">
                <strong>Remember:</strong> Authenticity matters. Don't use cultural elements as decoration—understand their meaning and use them respectfully.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusion</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Designing with cultural awareness creates stores that feel familiar and welcoming to African customers. When done right, it's not just good design—it's good business.
            </p>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Share this article</h3>
                <div className="flex gap-4">
                  <button className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center hover:bg-purple-200 transition-colors">
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

export default DesignTipsAfricanCulture;



