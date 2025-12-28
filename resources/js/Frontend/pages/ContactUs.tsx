import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe } from 'lucide-react';
import { COMPANY, CONTACT } from '../constants';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We\'ll get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-dark pt-40 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs font-medium text-white mb-8 backdrop-blur-sm">
            <MessageSquare size={14} className="text-primary" />
            Get In Touch
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
            We'd love to <br />
            <span className="text-highlight-blue text-dark cursor-default">hear from you</span>
          </h1>
          
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Have questions? Need support? Want to partner with us? Our team is here to help.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-500 mb-4">Our team responds within 24 hours</p>
              <a href={`mailto:${CONTACT.EMAIL}`} className="text-primary font-bold hover:underline">
                {CONTACT.EMAIL}
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone size={28} className="text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-500 mb-4">Mon-Fri from 8am to 6pm</p>
              <a href={`tel:${CONTACT.PHONE}`} className="text-emerald-600 font-bold hover:underline">
                {CONTACT.PHONE_DISPLAY}
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin size={28} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-500 mb-4">Our office in Accra</p>
              <p className="text-purple-600 font-bold">
                {CONTACT.ADDRESS}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Info */}
            <div>
              <div className="inline-block border border-primary/20 bg-primary/5 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary mb-6">
                Contact Form
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                Send us a <br />
                <span className="text-primary">message</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                Fill out the form and our team will get back to you within 24 hours. For urgent matters, please call us directly.
              </p>

              {/* Additional Info */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Clock size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Business Hours</h4>
                    <p className="text-gray-500 text-sm">Monday - Friday: 8am - 6pm GMT</p>
                    <p className="text-gray-500 text-sm">Saturday: 9am - 3pm GMT</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Globe size={20} className="text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Global Support</h4>
                    <p className="text-gray-500 text-sm">We support customers in over 120 countries worldwide</p>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="mt-10">
                <h4 className="font-bold text-gray-900 mb-4 text-lg">Our Location</h4>
                <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.817!2d-0.210868!3d5.589325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14cb2d7f12f7d!2s111%20Newtown%20Road%2C%20Accra!5e0!3m2!1sen!2sgh!4v1732295000000!5m2!1sen!2sgh"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="111 Newtown Road, Accra - WepStore Office Location"
                  />
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                  <MapPin size={16} className="text-primary" />
                  <span>{CONTACT.ADDRESS_FULL}</span>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

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
                  <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="sales">Sales & Pricing</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="billing">Billing Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5"
                >
                  Send Message <Send size={20} />
                </button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to our{' '}
                  <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Looking for quick answers?
          </h2>
          <p className="text-gray-500 mb-8">
            Check out our FAQ page for instant answers to common questions
          </p>
          <a 
            href="/faq"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-black transition-colors"
          >
            View FAQ
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;



