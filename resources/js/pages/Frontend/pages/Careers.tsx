import Layout from '../Layout';
import React from 'react';
import { Briefcase, Heart, TrendingUp, Users, MapPin, Clock, ArrowRight, Zap, Globe } from 'lucide-react';
import { COMPANY, EXTERNAL_LINKS } from '../constants';

const Careers: React.FC = () => {
  const positions = [
    {
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Accra, Ghana',
      type: 'Internship',
      description: 'Learn to build and scale e-commerce platforms using React, Node.js, and modern web technologies. Work on real projects with mentorship from senior developers.'
    },
    {
      title: 'Product Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Internship',
      description: 'Create beautiful, user-friendly experiences for merchants. Learn design systems, user research, and prototyping with industry professionals.'
    },
    {
      title: 'Customer Success',
      department: 'Customer Success',
      location: 'Accra, Ghana',
      type: 'Internship',
      description: 'Help merchants succeed by providing support and guidance. Learn customer relationship management and problem-solving skills.'
    },
    {
      title: 'Digital Marketing',
      department: 'Marketing',
      location: 'Hybrid',
      type: 'Internship',
      description: 'Drive growth across African markets. Learn SEO, social media marketing, content creation, and analytics.'
    },
  ];

  const benefits = [
    {
      icon: <Heart size={24} />,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance for you and your family'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Career Growth',
      description: 'Learning budget and clear paths for advancement'
    },
    {
      icon: <Users size={24} />,
      title: 'Great Team',
      description: 'Work with talented, passionate people who care'
    },
    {
      icon: <Globe size={24} />,
      title: 'Remote Friendly',
      description: 'Flexible work arrangements and home office support'
    },
    {
      icon: <Zap size={24} />,
      title: 'Impact',
      description: 'Your work directly helps entrepreneurs succeed'
    },
    {
      icon: <Clock size={24} />,
      title: 'Work-Life Balance',
      description: 'Flexible hours and generous time off'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-dark pt-40 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2564&auto=format&fit=crop" 
              alt="Team working together" 
              className="w-full h-full object-cover opacity-20"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/80 to-dark"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs font-medium text-white mb-8 backdrop-blur-sm">
            <Briefcase size={14} className="text-primary" />
            Join Our Team
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
            Build the future of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">African e-commerce</span>
          </h1>
          
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Join a mission-driven team that's empowering entrepreneurs across Africa to launch and grow their online businesses.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Why join <span className="text-primary">{COMPANY.NAME}</span>?
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              We're building something special, and we want you to be part of it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-primary mb-6 shadow-sm">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Opportunities */}
      <section id="open-positions" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Internship Opportunities
            </h2>
            <p className="text-xl text-gray-500">
              Gain real-world experience and build your career with us
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto mb-16">
            {positions.map((position, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <div className="inline-block bg-blue-50 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                      Internship
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {position.title.replace('Senior ', '').replace('Lead ', '')} Intern
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Briefcase size={16} />
                        {position.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={16} />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={16} />
                        3-6 months
                      </span>
                    </div>
                  </div>
                  <a href="/contact" className="bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-dark transition-colors flex items-center gap-2 whitespace-nowrap shadow-lg shadow-primary/20">
                    Apply Now <ArrowRight size={18} />
                  </a>
                </div>
                <p className="text-gray-600 leading-relaxed">{position.description}</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-500"><strong className="text-gray-700">Benefits:</strong> Mentorship, real projects, certificate, potential full-time offer</p>
                </div>
              </div>
            ))}
          </div>

          {/* Affiliate Opportunities */}
          <div className="bg-gradient-to-br from-primary to-indigo-700 rounded-3xl p-12 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                Earn While You Learn
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Affiliate Opportunities
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Promote WepStore and earn up to 30% recurring commission. Perfect for students, influencers, and entrepreneurs looking to monetize their network.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl font-bold mb-2">30%</div>
                  <div className="text-sm text-blue-100">Recurring Commission</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl font-bold mb-2">Free</div>
                  <div className="text-sm text-blue-100">To Join</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl font-bold mb-2">Monthly</div>
                  <div className="text-sm text-blue-100">Payouts</div>
                </div>
              </div>
              <a 
                href="/affiliate"
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Become an Affiliate <ArrowRight size={20} />
              </a>
            </div>
          </div>

          {/* No Perfect Match */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-3xl p-12 border border-gray-100 shadow-xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Don't see the right opportunity?
              </h3>
              <p className="text-gray-600 mb-6">
                We're always looking for talented interns and affiliates. Send us your application and tell us why you'd be a great fit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-black transition-colors"
                >
                  Apply for Internship
                </a>
                <a 
                  href="/affiliate"
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary-dark transition-colors"
                >
                  Become an Affiliate
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Our values
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              These principles guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-10 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer First</h3>
              <p className="text-gray-600 leading-relaxed">
                Our merchants' success is our success. Every decision starts with how it helps them grow their business.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-10 border border-emerald-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Move Fast</h3>
              <p className="text-gray-600 leading-relaxed">
                We iterate quickly, learn from mistakes, and constantly improve. Speed matters when building for Africa.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-10 border border-purple-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Think Big</h3>
              <p className="text-gray-600 leading-relaxed">
                We're not just building a product—we're empowering a generation of African entrepreneurs.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-10 border border-amber-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Own It</h3>
              <p className="text-gray-600 leading-relaxed">
                We take responsibility for outcomes, support each other, and deliver on our commitments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Ready to make an impact?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Join our team and help shape the future of e-commerce in Africa
          </p>
          <a 
            href="#open-positions"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg"
          >
            View Opportunities
          </a>
        </div>
      </section>
    </div>
  );
};

Careers.layout = (page: any) => <Layout>{page}</Layout>;
export default Careers;





