import React from 'react';
import { ArrowRight, Mail, Phone, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-end justify-center bg-white overflow-hidden pb-32">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200/40 to-transparent" />
        <div className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-200/30 to-transparent" />
      </div>
      
      {/* Content - Positioned in lower portion of viewport */}
      <div className="section-container relative z-10 w-full">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Professional Badge */}
          <div className="mb-12 inline-flex items-center gap-3 frosted-glass px-8 py-4 hover-lift">
            <Sparkles className="w-5 h-5 text-emerald-600" />
            <span className="text-sm font-medium text-gray-700 tracking-wide">Enterprise AI Transformation</span>
          </div>

          {/* Main Headline - Positioned Lower */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-mooxy font-black text-gray-900 leading-[0.9] tracking-tight fade-in-up">
              Strategic AI-Native
              <br />
              <span className="text-gradient bg-gradient-to-r from-gray-900 via-emerald-700 to-gray-900 bg-clip-text text-transparent">
                Transformation
              </span>
            </h1>
          </div>
          
          {/* Enhanced Subheading - Larger and More Prominent */}
          <div className="mb-16 fade-in-up" style={{animationDelay: '0.2s'}}>
            <p className="text-3xl md:text-4xl lg:text-5xl font-agile font-semibold text-gray-700 tracking-wide leading-tight">
              for the Enterprise
            </p>
          </div>
          
          {/* Supporting Line - Clear Tertiary Hierarchy */}
          <div className="mb-20 fade-in-up" style={{animationDelay: '0.4s'}}>
            <p className="text-xl md:text-2xl font-inter font-light text-gray-500 max-w-4xl mx-auto leading-relaxed">
              Building Tomorrow's AI-Native Organizations Today
            </p>
          </div>
          
          {/* CTA Buttons - Enhanced Visibility and Spacing */}
          <div className="mb-24 fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-4xl mx-auto">
              <button className="group inline-flex items-center justify-center gap-4 px-10 py-5 bg-gray-900 text-white font-semibold text-lg rounded-2xl transition-all duration-300 hover:bg-gray-800 hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto sm:min-w-[320px] shadow-lg">
                Schedule AI Readiness Assessment
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button className="inline-flex items-center justify-center px-10 py-5 bg-white text-gray-900 font-semibold text-lg rounded-2xl border-2 border-gray-300 transition-all duration-300 hover:bg-gray-50 hover:border-gray-400 hover:shadow-lg hover:-translate-y-1 w-full sm:w-auto sm:min-w-[320px] shadow-md">
                Book Strategic Consultation
              </button>
            </div>
          </div>

          {/* Contact Information - Clean Separation */}
          <div className="fade-in-up" style={{animationDelay: '0.8s'}}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
              <div className="group flex items-center gap-4 px-8 py-4 frosted-glass hover-lift transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 p-0.5">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <Mail className="w-6 h-6 text-gray-800" />
                  </div>
                </div>
                <span className="font-medium text-lg text-gray-700">hello@v1sion.ai</span>
              </div>
              
              <div className="group flex items-center gap-4 px-8 py-4 frosted-glass hover-lift transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 p-0.5">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <Phone className="w-6 h-6 text-gray-800" />
                  </div>
                </div>
                <span className="font-medium text-lg text-gray-700">+91-9876543210</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal Bottom Accent */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-24 bg-gradient-to-t from-gray-50/50 to-transparent" />
    </section>
  );
};

export default Hero;