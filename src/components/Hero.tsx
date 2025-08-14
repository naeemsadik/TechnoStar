import React from 'react';
import { ArrowRight, Play, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-primary-900/20 to-secondary-900/20" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary-500 rounded-full blur-3xl float" />
        <div className="absolute top-40 right-20 w-48 h-48 bg-secondary-500 rounded-full blur-3xl float" />
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-accent-500 rounded-full blur-3xl float" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium scale-in">
            <Star className="w-4 h-4 mr-2 fill-current" />
            Leading Tech Innovation
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight slide-in-left">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Transforming Ideas
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary-400 via-secondary-500 to-accent-400 bg-clip-text text-transparent">
              Into Digital Reality
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed slide-in-right">
            We craft cutting-edge software solutions that drive innovation, boost efficiency, and 
            transform businesses. From AI-powered applications to scalable cloud infrastructure.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 scale-in">
            <button
              onClick={scrollToServices}
              className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-gray-500 hover:text-white transition-all duration-300 flex items-center space-x-2">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-800">
            <div className="text-center scale-in">
              <div className="text-3xl font-bold text-primary-400">500+</div>
              <div className="text-gray-400 mt-2">Projects Delivered</div>
            </div>
            <div className="text-center scale-in">
              <div className="text-3xl font-bold text-secondary-400">98%</div>
              <div className="text-gray-400 mt-2">Client Satisfaction</div>
            </div>
            <div className="text-center scale-in">
              <div className="text-3xl font-bold text-accent-400">24/7</div>
              <div className="text-gray-400 mt-2">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;