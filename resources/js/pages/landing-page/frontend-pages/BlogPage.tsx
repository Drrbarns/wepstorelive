import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock, TrendingUp } from 'lucide-react';
import { EXTERNAL_LINKS } from '../constants';

const BlogPage: React.FC = () => {
  const featuredPost = {
    title: 'The Complete Guide to Starting an Online Store in Africa',
    excerpt: 'Everything you need to know about launching, growing, and scaling your e-commerce business across African markets.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2340&auto=format&fit=crop',
    category: 'Guides',
    date: 'Nov 20, 2025',
    author: 'Dr. Barns',
    readTime: '12 min read'
  };

  const posts = [
    {
      title: 'Top 5 Payment Gateways for West African Merchants',
      excerpt: 'A comprehensive comparison of the best payment solutions for businesses in Ghana, Nigeria, and beyond.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
      category: 'FinTech',
      date: 'Nov 15, 2025',
      author: 'Ama Mensah',
      readTime: '8 min read',
      slug: 'top-5-payment-gateways'
    },
    {
      title: 'Design Tips: Reflecting African Culture in Your Store',
      excerpt: 'How to create authentic, culturally-rich e-commerce experiences that resonate with African customers.',
      image: 'https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?auto=format&fit=crop&w=800&q=80',
      category: 'Design',
      date: 'Nov 10, 2025',
      author: 'Kwame Osei',
      readTime: '6 min read',
      slug: 'design-tips-african-culture'
    },
    {
      title: 'Dropshipping in Ghana: A Complete Guide for 2025',
      excerpt: 'Step-by-step guide to starting a successful dropshipping business in Ghana without holding inventory.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      category: 'Business',
      date: 'Nov 5, 2025',
      author: 'Kojo Boateng',
      readTime: '10 min read',
      slug: 'dropshipping-ghana'
    },
    {
      title: 'Mobile Money Integration: Boosting Conversion Rates',
      excerpt: 'Why Mobile Money is essential for African e-commerce and how to implement it effectively.',
      image: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&w=800&q=80',
      category: 'Payments',
      date: 'Nov 1, 2025',
      author: 'Abena Antwi',
      readTime: '7 min read',
      slug: 'mobile-money-integration'
    },
    {
      title: 'Success Story: How Accra Thrift Grew by 300%',
      excerpt: 'Inside look at how one merchant tripled their revenue using WepStore\'s marketing tools.',
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=800&q=80',
      category: 'Case Study',
      date: 'Oct 28, 2025',
      author: 'Emmanuel Darko',
      readTime: '9 min read',
      slug: 'accra-thrift-success'
    },
    {
      title: 'SEO for Local Languages: Twi, Yoruba, and Swahili',
      excerpt: 'Optimize your store for local language searches and reach more customers in their native tongue.',
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80',
      category: 'Marketing',
      date: 'Oct 25, 2025',
      author: 'Akosua Agyapong',
      readTime: '11 min read',
      slug: 'seo-local-languages'
    },
  ];

  const categories = ['All', 'Guides', 'Business', 'Marketing', 'Design', 'FinTech', 'Case Studies'];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-dark pt-40 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs font-medium text-white mb-8 backdrop-blur-sm">
            <TrendingUp size={14} className="text-primary" />
            WepStore Blog
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
            E-commerce insights <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">for Africa</span>
          </h1>
          
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Tips, guides, and stories to help you launch and grow your online business
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-0 z-20 backdrop-blur-lg bg-white/90">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-bold text-sm whitespace-nowrap transition-all ${
                  index === 0
                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 grid lg:grid-cols-2 gap-0">
            <div className="relative h-[400px] lg:h-auto">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Featured
              </div>
            </div>
            <div className="p-10 lg:p-12 flex flex-col justify-center">
              <div className="inline-block bg-blue-50 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 w-fit">
                {featuredPost.category}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {featuredPost.title}
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
                <span className="flex items-center gap-2">
                  <User size={16} />
                  {featuredPost.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar size={16} />
                  {featuredPost.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={16} />
                  {featuredPost.readTime}
                </span>
              </div>
              <Link to="/blog/scaling-kiosk-to-digital" className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-dark transition-colors flex items-center gap-2 w-fit shadow-lg shadow-primary/20">
                Read Article <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Link key={index} to={`/blog/${post.slug}`} className="group cursor-pointer">
                <div className="relative h-64 rounded-2xl overflow-hidden mb-6 bg-gray-100">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-white/10">
                    {post.category}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>
                <div className="text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-16">
            <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-black transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-gradient-to-br from-primary to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Stay updated
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Get the latest e-commerce tips and insights delivered to your inbox
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:border-white focus:outline-none"
            />
            <button type="submit" className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;

