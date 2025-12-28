import Layout from '../Layout';
import React, { useState } from 'react';
import { TrendingUp, DollarSign, Users, Zap, CheckCircle, ArrowRight, Mail, Globe, User, Building } from 'lucide-react';
import { COMPANY, EXTERNAL_LINKS, CONTACT } from '../constants';

const Affiliate: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    website: '',
    socialMedia: '',
    audienceSize: '',
    promotionMethod: '',
    experience: '',
    whyJoin: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Affiliate application:', formData);
    alert('Thank you for your application! We\'ll review it and get back to you within 2-3 business days.');
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      website: '',
      socialMedia: '',
      audienceSize: '',
      promotionMethod: '',
      experience: '',
      whyJoin: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const benefits = [
    {
      icon: <DollarSign size={32} />,
      title: '30% Recurring Commission',
      description: 'Earn 30% of every subscription payment, every month, for as long as your referrals stay active.'
    },
    {
      icon: <Zap size={32} />,
      title: 'Instant Payouts',
      description: 'Get paid monthly via Mobile Money or bank transfer. No minimum thresholds.'
    },
    {
      icon: <Users size={32} />,
      title: 'Dedicated Support',
      description: 'Access to marketing materials, tracking dashboard, and dedicated affiliate manager.'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Unlimited Earnings',
      description: 'No cap on how much you can earn. The more you refer, the more you make.'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-dark pt-40 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs font-medium text-white mb-8 backdrop-blur-sm">
            <TrendingUp size={14} className="text-primary" />
            Affiliate Program
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
            Earn while you <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">promote</span>
          </h1>
          
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Join our affiliate program and earn up to 30% recurring commission for every merchant you refer to {COMPANY.NAME}.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Why become an affiliate?
            </h2>
            <p className="text-xl text-gray-500">
              Everything you need to succeed
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              How it works
            </h2>
            <p className="text-xl text-gray-500">
              Simple 3-step process to start earning
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { step: '01', title: 'Apply & Get Approved', description: 'Fill out our affiliate application form. We review and approve within 2-3 business days.' },
              { step: '02', title: 'Get Your Unique Link', description: 'Receive your personalized affiliate link and marketing materials to start promoting.' },
              { step: '03', title: 'Earn Commissions', description: 'Get 30% recurring commission every month for every active merchant you refer.' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Become an affiliate
            </h2>
            <p className="text-xl text-gray-500">
              Fill out the form below and we'll get back to you within 2-3 business days
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-bold text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-bold text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="+233 XX XXX XXXX"
                  />
                </div>
              </div>

              {/* Promotion Channels */}
              <div>
                <label htmlFor="website" className="block text-sm font-bold text-gray-700 mb-2">
                  Website/Blog URL (if applicable)
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="https://yourwebsite.com"
                />
              </div>

              <div>
                <label htmlFor="socialMedia" className="block text-sm font-bold text-gray-700 mb-2">
                  Social Media Handles
                </label>
                <input
                  type="text"
                  id="socialMedia"
                  name="socialMedia"
                  value={formData.socialMedia}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="@instagram, @twitter, etc."
                />
              </div>

              <div>
                <label htmlFor="audienceSize" className="block text-sm font-bold text-gray-700 mb-2">
                  Audience Size *
                </label>
                <select
                  id="audienceSize"
                  name="audienceSize"
                  value={formData.audienceSize}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                >
                  <option value="">Select audience size</option>
                  <option value="0-1k">0 - 1,000 followers</option>
                  <option value="1k-10k">1,000 - 10,000 followers</option>
                  <option value="10k-50k">10,000 - 50,000 followers</option>
                  <option value="50k-100k">50,000 - 100,000 followers</option>
                  <option value="100k+">100,000+ followers</option>
                </select>
              </div>

              <div>
                <label htmlFor="promotionMethod" className="block text-sm font-bold text-gray-700 mb-2">
                  How will you promote {COMPANY.NAME}? *
                </label>
                <select
                  id="promotionMethod"
                  name="promotionMethod"
                  value={formData.promotionMethod}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                >
                  <option value="">Select promotion method</option>
                  <option value="social-media">Social Media Posts</option>
                  <option value="blog">Blog Articles</option>
                  <option value="youtube">YouTube Videos</option>
                  <option value="email">Email Marketing</option>
                  <option value="podcast">Podcast</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-bold text-gray-700 mb-2">
                  Affiliate Marketing Experience *
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                >
                  <option value="">Select experience level</option>
                  <option value="beginner">Beginner (New to affiliate marketing)</option>
                  <option value="intermediate">Intermediate (Some experience)</option>
                  <option value="advanced">Advanced (Experienced affiliate marketer)</option>
                </select>
              </div>

              <div>
                <label htmlFor="whyJoin" className="block text-sm font-bold text-gray-700 mb-2">
                  Why do you want to join our affiliate program? *
                </label>
                <textarea
                  id="whyJoin"
                  name="whyJoin"
                  value={formData.whyJoin}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  placeholder="Tell us about yourself and why you'd be a great affiliate partner..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5"
              >
                Submit Application <ArrowRight size={20} />
              </button>

              <p className="text-sm text-gray-500 text-center">
                By submitting this form, you agree to our{' '}
                <a href="/terms" className="text-primary hover:underline font-bold">Terms & Conditions</a>
                {' '}and{' '}
                <a href="/privacy" className="text-primary hover:underline font-bold">Privacy Policy</a>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">How much can I earn?</h3>
              <p className="text-gray-600">You earn 30% recurring commission on every subscription payment. If you refer 10 merchants on the Starter plan (₵100/month), you'd earn ₵300/month recurring.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">When do I get paid?</h3>
              <p className="text-gray-600">Commissions are paid monthly via Mobile Money or bank transfer. Payouts are processed within 5 business days after the end of each month.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Is there a minimum payout?</h3>
              <p className="text-gray-600">No minimum payout threshold. You'll receive your commission regardless of the amount.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">How long do I earn commissions?</h3>
              <p className="text-gray-600">You earn commissions for as long as your referred merchants remain active subscribers. This is a lifetime recurring commission model.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Ready to start earning?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Join hundreds of affiliates already earning with {COMPANY.NAME}
          </p>
          <a 
            href="#application"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Apply Now <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </div>
  );
};

Affiliate.layout = (page: any) => <Layout>{page}</Layout>;
export default Affiliate;





