import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Kwame Osei",
      role: "CEO, Ashanti Crafts",
      image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=150&q=80",
      quote: "The multi-store feature allowed me to expand my traditional fabric business globally without losing track of local inventory. Truly a game changer."
    },
    {
      name: "Ama Mensah",
      role: "Founder, Accra Eats",
      image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=150&q=80",
      quote: "WepStore's delivery integration revolutionized my food delivery service. Revenue doubled in 3 months and customer satisfaction is at an all-time high."
    },
    {
      name: "Kojo Boateng",
      role: "Director, TechHaven GH",
      image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=150&q=80",
      quote: "Best platform for electronics in Ghana. The seamless Mobile Money integration makes checkout effortless for my local customers."
    },
    {
      name: "Abena Antwi",
      role: "Creative Lead, StyleGh",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=150&q=80",
      quote: "Designing my storefront was effortless. The drag-and-drop builder is intuitive, allowing me to showcase our fashion designs exactly how I imagined."
    },
    {
      name: "Emmanuel Darko",
      role: "Owner, Darko Logistics",
      image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=150&q=80",
      quote: "Automated shipping calculations saved us hours of manual work every week. Now we focus on scaling, not spreadsheets."
    },
    {
      name: "Akosua Agyapong",
      role: "Founder, SheaGold",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=150&q=80",
      quote: "From a small home business in Kumasi to shipping shea butter worldwide. WepStore provided the tools I needed to reach a global market."
    }
  ];

  // Duplicate array to create seamless infinite scroll loop
  const scrollingTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="reviews" className="bg-slate-50 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
         <div className="inline-block border border-gray-300 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">Success Stories</div>
         <h2 className="text-4xl md:text-5xl font-display font-bold text-dark">
            Loved by <span className="text-white bg-primary px-2 transform -rotate-1 inline-block">entrepreneurs</span> everywhere.
         </h2>
      </div>

      <div className="relative w-full">
          {/* Gradient Masks for smooth fade at edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

          {/* Marquee Track */}
          <div className="flex animate-marquee hover:[animation-play-state:paused] gap-6 w-max pl-6">
              {scrollingTestimonials.map((item, i) => (
                  <div key={i} className="w-[350px] md:w-[400px] bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 flex-shrink-0">
                      <div className="flex gap-1 mb-6">
                          {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="#f97316" stroke="none" />)}
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-8 min-h-[100px]">
                          "{item.quote}"
                      </p>
                      <div className="flex items-center gap-4">
                          <img src={item.image} className="w-12 h-12 rounded-full object-cover border-2 border-gray-50" alt={item.name} />
                          <div>
                              <div className="font-bold text-dark">{item.name}</div>
                              <div className="text-sm text-gray-500">{item.role}</div>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>
    </section>
  );
};

export default Testimonials;