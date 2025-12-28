import React from 'react';
import { ArrowRight, Calendar, User } from 'lucide-react';

const Blog: React.FC = () => {
  const posts = [
    {
        title: "Top 5 Payment Gateways for West African Merchants",
        date: "Oct 12, 2024",
        category: "FinTech",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Design Tips: Reflecting African Culture in Your Store",
        date: "Sep 28, 2024",
        category: "Web Design",
        image: "https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Dropshipping in Ghana: A Complete Guide for 2025",
        date: "Sep 15, 2024",
        category: "Guides",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Mobile Money Integration: Boosting Conversion Rates",
        date: "Aug 30, 2024",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Success Story: How 'Accra Thrift' Grew by 300%",
        date: "Aug 10, 2024",
        category: "Case Study",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "SEO for Local Languages: Twi, Yoruba, and Swahili",
        date: "Jul 22, 2024",
        category: "Marketing",
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="insights" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
                <div className="inline-flex items-center gap-2 uppercase text-xs font-bold text-gray-500 tracking-wider mb-4">
                    <span className="w-1 h-1 bg-primary rounded-full"></span> Insights
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-dark">
                    E-commerce insights <br/>
                    <span className="text-white bg-primary px-2 transform rotate-1 inline-block">for Africa</span>
                </h2>
            </div>
            <button className="bg-primary text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-primary-dark transition-colors mt-6 md:mt-0 shadow-lg shadow-primary/20">
                View all articles <ArrowRight size={18} />
            </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
             {/* Featured Big Post */}
             <div className="md:col-span-1 group cursor-pointer">
                <div className="bg-gray-100 rounded-3xl overflow-hidden mb-6 h-72 relative">
                    <img 
                        src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=800&q=80" 
                        alt="Featured" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wide">
                        Featured
                    </div>
                </div>
                <div className="flex items-center gap-4 mb-4 text-xs text-gray-500 font-medium">
                    <span className="flex items-center gap-1"><Calendar size={14} /> Oct 24, 2024</span>
                    <span className="flex items-center gap-1"><User size={14} /> Dr. Barns</span>
                </div>
                <h3 className="text-2xl font-bold text-dark mb-3 group-hover:text-primary transition-colors leading-tight">
                    Scaling from a Kiosk to a Digital Empire: The WepStore Journey
                </h3>
                <p className="text-gray-500 leading-relaxed mb-4 line-clamp-3">
                    How local entrepreneurs are leveraging WepStore's mobile-first tools to bypass traditional brick-and-mortar limitations and reach a global audience instantly.
                </p>
                <div className="text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read Article <ArrowRight size={16} />
                </div>
             </div>

             {/* Grid of smaller posts */}
             <div className="md:col-span-2 grid sm:grid-cols-2 gap-x-8 gap-y-10">
                {posts.map((post, i) => (
                    <div key={i} className="flex flex-col group cursor-pointer">
                        <div className="w-full h-48 rounded-2xl overflow-hidden mb-4 bg-gray-100 relative">
                            <img 
                                src={post.image} 
                                alt={post.title} 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                            />
                            <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-md text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border border-white/10">
                                {post.category}
                            </div>
                        </div>
                        <div>
                            <div className="text-xs text-gray-400 mb-2 flex items-center gap-2">
                                <Calendar size={12} /> {post.date}
                            </div>
                            <h4 className="text-lg font-bold text-dark group-hover:text-primary transition-colors leading-snug">
                                {post.title}
                            </h4>
                        </div>
                    </div>
                ))}
             </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;


