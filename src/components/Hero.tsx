import React from 'react';
import { ArrowRight, Mail, Phone, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full bg-white overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/public/Strategic.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content at Bottom Center */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-5xl px-4 pb-12 z-10">
        <div className="text-center flex flex-col items-center">
          {/* Professional Badge */}
          <div className="mb-8 inline-flex items-center gap-2 frosted-glass px-6 py-3 hover-lift">
            <Sparkles className="w-5 h-5 text-amber-600 animated-icon" />
            <span className="text-sm font-semibold text-gray-800 tracking-wide">Enterprise AI Transformation</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-mooxy font-bold mb-2 leading-tight fade-in-up">
            <span className="block text-white">
              Strategic AI-Native
            </span>
            <span className="block bg-gradient-to-r from-green-300 via-green-200 to-emerald-400 bg-clip-text text-transparent mt-2">
              Transformation
            </span>
            
          </h1>

          {/* Subheadline */}
          <p className="text-2xl md:text-3xl font-agile text-white mb-8 max-w-4xl mx-auto fade-in-up leading-relaxed" style={{animationDelay: '0.3s'}}>
            Building Tomorrow's AI-Native Organizations Today
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8 fade-in-up" style={{animationDelay: '0.6s'}}>
            <button className="professional-button group flex items-center justify-center gap-4 text-lg">
              Schedule AI Readiness Assessment
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
            </button>
            <button className="professional-button-secondary text-lg">
              Book Strategic Consultation
            </button>
          </div>

          {/* Contact Info */}
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
    </section>
  );
};

export default Hero;