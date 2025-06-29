import React from 'react';
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50/30 to-white overflow-hidden">
      
      {/* Sophisticated Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        {/* Floating Geometric Elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-500/20 rounded-full animate-pulse" style={{animationDelay: '0s'}} />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-gray-400/30 rounded-full animate-pulse" style={{animationDelay: '2s'}} />
        <div className="absolute bottom-1/3 left-1/5 w-1.5 h-1.5 bg-emerald-600/15 rounded-full animate-pulse" style={{animationDelay: '4s'}} />
        
        {/* Gradient Orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-emerald-100/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-gray-100/30 to-transparent rounded-full blur-3xl" />
      </div>
      
      {/* Main Content */}
      <div className="section-container relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Premium Badge */}
          <div className="mb-8 inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-full shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-700 tracking-wide">Enterprise AI Transformation</span>
            <Sparkles className="w-4 h-4 text-emerald-600" />
          </div>

          {/* Hero Headline */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-gray-900 leading-[0.9] tracking-tight mb-6">
              <span className="block font-extralight">Strategic</span>
              <span className="block font-semibold bg-gradient-to-r from-gray-900 via-emerald-800 to-gray-900 bg-clip-text text-transparent">
                AI-Native
              </span>
              <span className="block font-extralight text-gray-600">Transformation</span>
            </h1>
            
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto mb-8" />
            
            <p className="text-xl md:text-2xl font-light text-gray-600 max-w-4xl mx-auto leading-relaxed tracking-wide">
              Building tomorrow's AI-native organizations with 
              <span className="font-medium text-gray-800"> systematic precision</span> and 
              <span className="font-medium text-gray-800"> measurable impact</span>
            </p>
          </div>
          
          {/* CTA Section */}
          <div className="mb-16">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button 
                onClick={() => navigate('/get-started')}
                className="group relative px-8 py-4 bg-gray-900 text-white font-medium rounded-2xl transition-all duration-300 hover:bg-gray-800 hover:shadow-2xl hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/0 via-emerald-600/10 to-emerald-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center justify-center gap-3">
                  <span className="text-lg">Start Assessment</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </div>
              </button>
              
              <button 
                onClick={() => navigate('/our-approach')}
                className="px-8 py-4 bg-white/80 backdrop-blur-xl text-gray-700 font-medium rounded-2xl border border-gray-200/50 transition-all duration-300 hover:bg-white hover:shadow-xl hover:scale-105"
              >
                <span className="text-lg">Explore Approach</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-600">
              <div className="flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-xl rounded-full border border-gray-200/30">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-sm font-medium">Enterprise Ready</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-xl rounded-full border border-gray-200/30">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                <span className="text-sm font-medium">ISO Compliant</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-xl rounded-full border border-gray-200/30">
                <div className="w-2 h-2 bg-gray-500 rounded-full" />
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
            {[
              { value: "85%", label: "Faster Deployment", delay: "0s" },
              { value: "60%", label: "ROI Improvement", delay: "0.2s" },
              { value: "90%", label: "Client Satisfaction", delay: "0.4s" },
              { value: "25+", label: "Fortune 500 Clients", delay: "0.6s" }
            ].map((metric, index) => (
              <div 
                key={index} 
                className="text-center opacity-0 animate-fade-in-up"
                style={{ animationDelay: metric.delay, animationFillMode: 'forwards' }}
              >
                <div className="text-3xl md:text-4xl font-light text-gray-900 mb-2 font-mono">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-600 font-medium tracking-wide">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <a 
              href="mailto:hello@v1sion.ai"
              className="flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200/50 transition-all duration-300 hover:bg-white hover:shadow-lg hover:scale-105 text-gray-700"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">@</span>
              </div>
              <span className="font-medium">hello@v1sion.ai</span>
            </a>
            
            <a 
              href="tel:+919876543210"
              className="flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200/50 transition-all duration-300 hover:bg-white hover:shadow-lg hover:scale-105 text-gray-700"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">📞</span>
              </div>
              <span className="font-medium">+91-9876543210</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/80 to-transparent" />
    </section>
  );
};

export default Hero;