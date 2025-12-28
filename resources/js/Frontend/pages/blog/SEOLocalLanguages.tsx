import React from 'react';
import { Calendar, User, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { Link } from '@inertiajs/react';

const SEOLocalLanguages: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-dark pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
            <ArrowLeft size={18} />
            Back to Blog
          </Link>
          <div className="inline-block bg-indigo-50 text-indigo-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            Marketing
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight mb-6">
            SEO for Local Languages: Twi, Yoruba, and Swahili
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              Oct 25, 2025
            </span>
            <span className="flex items-center gap-2">
              <User size={16} />
              Akosua Agyapong
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} />
              11 min read
            </span>
          </div>
        </div>
      </section>

      <article className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Optimize your store for local language searches and reach more customers in their native tongue. Learn SEO strategies for Twi, Yoruba, Swahili, and other African languages.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Why Local Language SEO Matters</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              While English is widely spoken in Africa, many customers search for products in their native languages. Optimizing for local languages can significantly expand your reach and improve conversion rates.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Twi SEO for Ghana</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Twi is spoken by over 9 million Ghanaians. Optimizing your store for Twi keywords can help you reach customers who prefer searching in their native language.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-600 mb-6">
              <li>Use Twi keywords in product titles and descriptions</li>
              <li>Create Twi-language landing pages</li>
              <li>Optimize for common Twi search terms</li>
              <li>Consider Twi in your URL structure</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Yoruba SEO for Nigeria</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              With over 40 million speakers, Yoruba is one of Nigeria's major languages. Creating Yoruba-optimized content can help you tap into this large market.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Swahili SEO for East Africa</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Swahili is spoken across East Africa by over 200 million people. Optimizing for Swahili can open up markets in Kenya, Tanzania, and beyond.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Implementation Strategies</h2>
            <ol className="list-decimal pl-6 space-y-4 text-gray-600 mb-6">
              <li><strong>Keyword Research:</strong> Identify high-volume local language keywords</li>
              <li><strong>Content Translation:</strong> Translate key pages and product descriptions</li>
              <li><strong>Meta Tags:</strong> Use local language in meta titles and descriptions</li>
              <li><strong>URL Structure:</strong> Consider language-specific URLs</li>
              <li><strong>Local Backlinks:</strong> Build links from local language websites</li>
            </ol>

            <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-r-xl my-12">
              <p className="text-gray-700 font-medium">
                <strong>Pro Tip:</strong> Start with your most popular products and pages. Translate these first, then expand to other content based on performance.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Tools and Resources</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Use translation tools, local language keyword research tools, and native speakers to ensure your content is accurate and culturally appropriate.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusion</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Local language SEO is an untapped opportunity for African e-commerce. By optimizing for Twi, Yoruba, Swahili, and other local languages, you can reach more customers and build stronger connections with your audience.
            </p>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Share this article</h3>
                <div className="flex gap-4">
                  <button className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center hover:bg-indigo-200 transition-colors">
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

export default SEOLocalLanguages;



