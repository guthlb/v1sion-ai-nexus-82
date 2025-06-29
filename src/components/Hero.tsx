import React from 'react';
import { ArrowRight, Mail, Phone, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Animated Digital Mesh Background */}
      <div className="absolute inset-0 digital-mesh opacity-40" />
      
      {/* Subtle Data Flow Lines */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent data-flow" />
        <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-600/20 to-transparent data-flow" style={{animationDelay: '1.5s'}} />
      </div>
      
      {/* Content */}
      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Professional Badge */}
          <div className="mb-8 inline-flex items-center gap-2 frosted-glass px-6 py-3 hover-lift">
            <Sparkles className="w-5 h-5 text-amber-600 animated-icon" />
            <span className="text-sm font-semibold text-gray-800 tracking-wide">Enterprise AI Transformation</span>
          </div>

          {/* Main Headline with Animated Reveal */}
          <h1 className="text-6xl md:text-8xl font-mooxy font-bold mb-8 leading-tight fade-in-up">
            <span className="block text-gray-900">
              Strategic AI-Native
            </span>
            <span className="block text-gradient mt-4">
              Transformation
            </span>
          </h1>
          
          {/* Sophisticated Subheadline - Moved closer to buttons */}
          <p className="text-2xl md:text-3xl font-agile text-gray-700 mb-8 max-w-4xl mx-auto fade-in-up leading-relaxed" style={{animationDelay: '0.3s'}}>
            for the Enterprise
          </p>
          
          <p className="text-xl md:text-2xl font-agile text-gray-600 mb-12 max-w-4xl mx-auto fade-in-up leading-relaxed" style={{animationDelay: '0.4s'}}>
            Building Tomorrow's AI-Native Organizations Today
          </p>
          
          {/* Elegant CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 fade-in-up" style={{animationDelay: '0.6s'}}>
            <button className="professional-button group flex items-center justify-center gap-4 text-lg">
              Schedule AI Readiness Assessment
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
            </button>
            
            <button className="professional-button-secondary text-lg">
              Book Strategic Consultation
            </button>
          </div>

          {/* Refined Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-700 fade-in-up" style={{animationDelay: '0.9s'}}>
            <div className="frosted-glass px-6 py-4 flex items-center gap-3 hover-lift elegant-underline">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-emerald-600 p-0.5">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gray-800" />
                </div>
              </div>
              <span className="font-semibold text-lg">hello@v1sion.ai</span>
            </div>
            <div className="frosted-glass px-6 py-4 flex items-center gap-3 hover-lift elegant-underline">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-600 to-amber-500 p-0.5">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <Phone className="w-5 h-5 text-gray-800" />
                </div>
              </div>
              <span className="font-semibold text-lg">+91-9876543210</span>
            </div>
          </div>
        </div>
      </div>

      {/* Ambient Bottom Gradient */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-to-t from-amber-50 to-transparent opacity-50" />
    </section>
  );
};

export default Hero;