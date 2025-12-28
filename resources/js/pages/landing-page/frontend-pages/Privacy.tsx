import React from 'react';
import { Shield, Lock, Eye, UserCheck, Database, AlertCircle } from 'lucide-react';
import { COMPANY } from '../constants';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-dark pt-40 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs font-medium text-white mb-8 backdrop-blur-sm">
            <Shield size={14} className="text-emerald-400" />
            Privacy Policy
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
            Your privacy is <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">our priority</span>
          </h1>
          
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Last updated: November 22, 2025
          </p>
        </div>
      </section>

      {/* Quick Overview Cards */}
      <section className="py-16 -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lock size={28} className="text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Secure Data</h3>
              <p className="text-gray-500">Your information is encrypted and securely stored</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Eye size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Transparency</h3>
              <p className="text-gray-500">Clear information about how we use your data</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center">
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <UserCheck size={28} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Your Control</h3>
              <p className="text-gray-500">You control your data and privacy settings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Welcome to {COMPANY.NAME}. We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, store, and protect your information when you use our e-commerce platform and services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By using {COMPANY.NAME}, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-16 bg-slate-50 rounded-3xl p-10 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Database size={24} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 m-0">Information We Collect</h2>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Personal Information</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  <span><strong>Account Information:</strong> Name, email address, phone number, and password</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  <span><strong>Business Information:</strong> Store name, business type, and business address</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  <span><strong>Payment Information:</strong> Billing address and payment method details (processed securely by our payment partners)</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Automatically Collected Information</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                When you use our services, we automatically collect certain information:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  <span><strong>Usage Data:</strong> How you interact with our platform, features used, and pages visited</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  <span><strong>Device Information:</strong> IP address, browser type, operating system, and device identifiers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  <span><strong>Cookies:</strong> We use cookies and similar technologies to enhance your experience</span>
                </li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
              <div className="space-y-4 text-gray-600">
                <p className="leading-relaxed">We use the information we collect for the following purposes:</p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-2">Provide Services</h4>
                    <p className="text-sm">Create and manage your account, process transactions, and deliver our platform features</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-2">Improve Platform</h4>
                    <p className="text-sm">Analyze usage patterns to enhance features and user experience</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-2">Customer Support</h4>
                    <p className="text-sm">Respond to your requests and provide technical assistance</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-2">Communications</h4>
                    <p className="text-sm">Send updates, security alerts, and marketing messages (with your consent)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-16 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-10 border border-emerald-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield size={24} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 m-0">Data Security</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                We implement industry-standard security measures to protect your personal information:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">✓</span>
                  <span>SSL/TLS encryption for all data transmission</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">✓</span>
                  <span>Regular security audits and vulnerability assessments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">✓</span>
                  <span>Secure data centers with 24/7 monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">✓</span>
                  <span>Access controls and authentication protocols</span>
                </li>
              </ul>
            </div>

            {/* Your Rights */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                You have the following rights regarding your personal data:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-gray-100">
                  <UserCheck className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Access & Portability</h4>
                    <p className="text-gray-600 text-sm">Request a copy of your personal data in a machine-readable format</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-gray-100">
                  <AlertCircle className="text-amber-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Correction & Update</h4>
                    <p className="text-gray-600 text-sm">Update or correct inaccurate personal information</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-gray-100">
                  <Lock className="text-red-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Deletion</h4>
                    <p className="text-gray-600 text-sm">Request deletion of your personal data (subject to legal obligations)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-primary/5 border border-primary/10 rounded-3xl p-10 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Questions About Privacy?</h2>
              <p className="text-gray-600 mb-6">
                If you have any questions or concerns about this privacy policy, please contact us.
              </p>
              <a 
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary-dark transition-colors"
              >
                Contact Us
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;

