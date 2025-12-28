import React from 'react';
import { Code, Book, Zap, Shield, Globe, Terminal, FileCode, Cpu, Key, ArrowRight } from 'lucide-react';
import { COMPANY, EXTERNAL_LINKS } from '../constants';

const Developers: React.FC = () => {
  const features = [
    {
      icon: <Zap size={24} />,
      title: 'RESTful API',
      description: 'Simple, predictable REST endpoints for all platform features'
    },
    {
      icon: <Shield size={24} />,
      title: 'Secure by Default',
      description: 'OAuth 2.0, HTTPS, and webhook signatures for security'
    },
    {
      icon: <Globe size={24} />,
      title: 'Global CDN',
      description: 'Low latency API responses from servers across Africa'
    },
    {
      icon: <FileCode size={24} />,
      title: 'SDKs & Libraries',
      description: 'Official libraries for JavaScript, Python, PHP, and more'
    },
    {
      icon: <Terminal size={24} />,
      title: 'CLI Tools',
      description: 'Command-line tools for testing and deployment'
    },
    {
      icon: <Cpu size={24} />,
      title: 'Webhooks',
      description: 'Real-time event notifications for your applications'
    },
  ];

  const endpoints = [
    {
      method: 'GET',
      path: '/api/v1/products',
      description: 'List all products'
    },
    {
      method: 'POST',
      path: '/api/v1/products',
      description: 'Create a new product'
    },
    {
      method: 'GET',
      path: '/api/v1/orders',
      description: 'List all orders'
    },
    {
      method: 'POST',
      path: '/api/v1/orders',
      description: 'Create a new order'
    },
    {
      method: 'GET',
      path: '/api/v1/customers',
      description: 'List all customers'
    },
    {
      method: 'PATCH',
      path: '/api/v1/stores/:id',
      description: 'Update store settings'
    },
  ];

  const codeExample = `// Initialize WepStore API
const wepstore = require('@wepstore/node-sdk');

const client = new wepstore.Client({
  apiKey: 'your_api_key_here',
  apiSecret: 'your_api_secret_here'
});

// Create a new product
const product = await client.products.create({
  name: 'African Print Shirt',
  price: 150.00,
  currency: 'GHS',
  description: 'Beautiful handmade African print shirt',
  images: ['https://...'],
  inventory: 50
});

console.log('Product created:', product.id);`;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-dark pt-40 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-dark to-dark"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs font-medium text-white mb-8 backdrop-blur-sm">
            <Code size={14} className="text-primary" />
            Developer Platform
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
            Build on <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">{COMPANY.NAME}</span>
          </h1>
          
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Powerful APIs and tools to integrate, extend, and build on Africa's leading e-commerce platform
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#documentation"
              className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20 inline-flex items-center justify-center gap-2"
            >
              <Book size={20} />
              View Documentation
            </a>
            <a 
              href="/contact"
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-colors inline-flex items-center justify-center gap-2"
            >
              <Key size={20} />
              Get API Keys
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Developer-first platform
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Everything you need to build powerful integrations and custom solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-primary mb-6 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                Simple, powerful APIs
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our REST API is designed to be intuitive and easy to use. Get started in minutes with our comprehensive SDKs.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Complete Documentation</h4>
                    <p className="text-gray-600 text-sm">Detailed guides and API references for all endpoints</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Code Examples</h4>
                    <p className="text-gray-600 text-sm">Working examples in multiple programming languages</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Sandbox Environment</h4>
                    <p className="text-gray-600 text-sm">Test your integration before going live</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1e293b] rounded-2xl p-8 shadow-2xl border border-gray-700 overflow-hidden">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-gray-400 text-sm font-mono">example.js</span>
              </div>
              <pre className="text-sm text-gray-300 font-mono overflow-x-auto">
                <code>{codeExample}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-24 bg-white" id="documentation">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              API endpoints
            </h2>
            <p className="text-xl text-gray-500">
              Quick reference to our most popular endpoints
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {endpoints.map((endpoint, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all group">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-bold uppercase ${
                    endpoint.method === 'GET' ? 'bg-blue-100 text-blue-700' :
                    endpoint.method === 'POST' ? 'bg-green-100 text-green-700' :
                    'bg-amber-100 text-amber-700'
                  }`}>
                    {endpoint.method}
                  </span>
                  <code className="font-mono text-sm text-gray-900 font-medium flex-1">{endpoint.path}</code>
                  <span className="text-sm text-gray-500">{endpoint.description}</span>
                  <ArrowRight size={18} className="text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 text-primary font-bold hover:underline text-lg"
            >
              View Full API Reference <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Developer resources
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <a href="/contact" className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <Book size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">Documentation</h3>
              <p className="text-gray-600 mb-4">Complete guides and API reference</p>
              <span className="text-primary font-bold text-sm flex items-center gap-2">
                Read Docs <ArrowRight size={16} />
              </span>
            </a>

            <a href="/contact" className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">SDKs & Libraries</h3>
              <p className="text-gray-600 mb-4">Official libraries for popular languages</p>
              <span className="text-emerald-600 font-bold text-sm flex items-center gap-2">
                Download SDKs <ArrowRight size={16} />
              </span>
            </a>

            <a href="/contact" className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                <Terminal size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">Support</h3>
              <p className="text-gray-600 mb-4">Get help from our developer community</p>
              <span className="text-purple-600 font-bold text-sm flex items-center gap-2">
                Get Support <ArrowRight size={16} />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Ready to start building?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Get your API keys and start building your integration today
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Get Started <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Developers;

