import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, Zap, ChevronRight, Sparkles, ArrowUpRight } from 'lucide-react';

const LandingPage = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure Ownership',
      description: 'Tokenize your creative works with blockchain technology for secure and transparent ownership.',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Global Community',
      description: 'Connect with creators and investors from around the world in our decentralized marketplace.',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Instant Trading',
      description: 'Buy and sell fractional ownership of creative works instantly with our advanced trading system.',
    },
  ];

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-dark-800 to-dark-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary-500/10 backdrop-blur-sm mb-8 animate-fade-in border border-primary-500/20">
              <Sparkles className="w-5 h-5 text-primary-400" />
              <span className="text-sm font-medium text-primary-400">The Future of Creative Ownership</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in">
              Revolutionize Creative
              <span className="block mt-2 bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent">
                Ownership
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-300 animate-fade-in animation-delay-200 leading-relaxed">
              Tokenize your creative works and connect with investors in the world's first
              decentralized IP marketplace.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in animation-delay-400">
              <Link
                to="/creator-studio"
                className="btn-primary bg-primary-500 text-white hover:bg-primary-600 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Start Creating
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link
                to="/marketplace"
                className="btn-secondary bg-transparent border-2 border-primary-500 text-primary-400 hover:bg-primary-500/10 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Explore Marketplace
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>

            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-primary-400">$50M+</div>
                <div className="text-gray-400 text-sm">Total Value Locked</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-primary-400">10K+</div>
                <div className="text-gray-400 text-sm">Active Creators</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-primary-400">100K+</div>
                <div className="text-gray-400 text-sm">Transactions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-primary-400">24/7</div>
                <div className="text-gray-400 text-sm">Trading Available</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float animation-delay-200" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-dark-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose <span className="text-primary-400">Articuno</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform offers everything you need to tokenize and trade creative works
              in a secure and efficient way.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="stat-card group hover:border-primary-500/50 animate-fade-in relative overflow-hidden bg-dark-700/50 border border-dark-600"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="text-primary-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-dark-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="relative bg-gradient-to-br from-dark-800 to-dark-900 rounded-3xl p-12 text-center overflow-hidden border border-primary-500/20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            
            <div className="relative">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                Join thousands of creators and investors who are already using Articuno to
                revolutionize creative ownership.
              </p>
              <Link
                to="/creator-studio"
                className="inline-flex items-center btn-primary bg-primary-500 text-white hover:bg-primary-600 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Get Started Now
                  <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage; 