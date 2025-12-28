import Layout from '../Layout';
import React from 'react';
import { FileText, CheckCircle, AlertTriangle, Scale } from 'lucide-react';
import { COMPANY } from '../constants';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-dark pt-40 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs font-medium text-white mb-8 backdrop-blur-sm">
            <FileText size={14} className="text-indigo-400" />
            Terms & Conditions
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
            Terms of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Service</span>
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
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Scale size={28} className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fair Terms</h3>
              <p className="text-gray-500">Clear and reasonable terms for all users</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Your Rights</h3>
              <p className="text-gray-500">Understand your rights as a user</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center">
              <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <AlertTriangle size={28} className="text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Responsibilities</h3>
              <p className="text-gray-500">Know your obligations when using our service</p>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Agreement to Terms</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                These Terms and Conditions ("Terms") govern your access to and use of {COMPANY.NAME}'s website, platform, and services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Please read these Terms carefully before using our Services. If you do not agree to these Terms, you must not access or use our Services.
              </p>
            </div>

            {/* Account Terms */}
            <div className="mb-16 bg-slate-50 rounded-3xl p-10 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Account Terms</h2>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Account Creation</h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  <span>You must be at least 18 years old to create an account</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  <span>You must provide accurate and complete information during registration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  <span>You are responsible for maintaining the security of your account credentials</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  <span>One person or legal entity may not maintain more than one free account</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Account Responsibilities</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                You are responsible for all activity that occurs under your account. You must immediately notify us of any unauthorized use of your account or any other security breach.
              </p>
            </div>

            {/* Service Terms */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Usage</h2>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">Acceptable Use</h3>
              <p className="text-gray-600 leading-relaxed mb-4">You agree to use our Services only for lawful purposes. You must not:</p>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-red-50 border border-red-100 rounded-xl p-6">
                  <h4 className="font-bold text-red-900 mb-2">❌ Prohibited</h4>
                  <ul className="text-sm text-red-700 space-y-2">
                    <li>• Sell illegal goods or services</li>
                    <li>• Engage in fraudulent activities</li>
                    <li>• Violate intellectual property rights</li>
                    <li>• Transmit harmful code or viruses</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6">
                  <h4 className="font-bold text-emerald-900 mb-2">✓ Encouraged</h4>
                  <ul className="text-sm text-emerald-700 space-y-2">
                    <li>• Comply with all applicable laws</li>
                    <li>• Respect other users' rights</li>
                    <li>• Provide accurate information</li>
                    <li>• Report security vulnerabilities</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="mb-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-10 border border-blue-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Payment Terms</h2>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pricing & Billing</h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>All prices are listed in Ghanaian Cedis (₵) unless otherwise stated</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Subscription fees are billed in advance on a monthly or annual basis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>All fees are non-refundable except as required by law</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>We reserve the right to change our pricing with 30 days notice</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Free Trial</h3>
              <p className="text-gray-600 leading-relaxed">
                We offer a 14-day free trial. Your credit card will not be charged during the trial period. You can cancel anytime before the trial ends to avoid charges.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Intellectual Property</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Our Content</h3>
                  <p className="text-gray-600 leading-relaxed">
                    The Services and their original content, features, and functionality are owned by {COMPANY.NAME} and are protected by international copyright, trademark, and other intellectual property laws.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Your Content</h3>
                  <p className="text-gray-600 leading-relaxed">
                    You retain all rights to the content you upload to the Services. By uploading content, you grant us a license to use, modify, and display that content as necessary to provide the Services.
                  </p>
                </div>
              </div>
            </div>

            {/* Termination */}
            <div className="mb-16 bg-amber-50 border border-amber-100 rounded-3xl p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Termination</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may terminate or suspend your account and access to the Services immediately, without prior notice, if you breach these Terms. Upon termination:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-amber-600">•</span>
                  <span>Your right to access the Services will immediately cease</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600">•</span>
                  <span>We will provide you with a reasonable opportunity to retrieve your data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600">•</span>
                  <span>No refunds will be provided for any prepaid fees</span>
                </li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                To the maximum extent permitted by law, {COMPANY.NAME} shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our total liability to you for any claims arising from or related to these Terms or the Services shall not exceed the amount you paid us in the 12 months preceding the claim.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-16 bg-slate-50 rounded-3xl p-10 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We reserve the right to modify these Terms at any time. We will notify you of any changes by:
              </p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  <span>Posting the new Terms on this page</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  <span>Updating the "Last updated" date at the top of these Terms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  <span>Sending you an email notification (for material changes)</span>
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Your continued use of the Services after any changes indicates your acceptance of the new Terms.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-primary/5 border border-primary/10 rounded-3xl p-10 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Questions About These Terms?</h2>
              <p className="text-gray-600 mb-6">
                If you have any questions about these Terms and Conditions, please contact us.
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

Terms.layout = (page: any) => <Layout>{page}</Layout>;
export default Terms;





