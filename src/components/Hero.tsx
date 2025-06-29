import React from 'react';
import { ArrowRight, Mail, Phone, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-end justify-center bg-white overflow-hidden pb-16">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200/40 to-transparent" />
        <div className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-200/30 to-transparent" />
      </div>
      
      {/* Content - Positioned much lower in viewport */}
      <div className="section-container relative z-10 w-full">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Professional Badge */}
          <div className="mb-16 inline-flex items-center gap-3 frosted-glass px-8 py-4 hover-lift">
            <Sparkles className="w-5 h-5 text-emerald-600" />
            <span className="text-sm font-medium text-gray-700 tracking-wide">Enterprise AI Transformation</span>
          </div>

          {/* Main Headline - Positioned Much Lower */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-mooxy font-black text-gray-900 leading-[0.9] tracking-tight fade-in-up">
              Strategic AI-Native
              <br />
              <span className="text-gradient bg-gradient-to-r from-gray-900 via-emerald-700 to-gray-900 bg-clip-text text-transparent">
                Transformation
              </span>
              <br />
              <span className="text-4xl md:text-5xl lg:text-6xl font-agile font-bold text-gray-700 tracking-wide leading-tight mt-4 block">
                for the Enterprise
              </span>
            </h1>
          </div>
          
          {/* Supporting Line - Much Bolder and More Prominent */}
          <div className="mb-20 fade-in-up" style={{animationDelay: '0.2s'}}>
            <p className="text-2xl md:text-3xl lg:text-4xl font-agile font-bold text-gray-600 max-w-5xl mx-auto leading-relaxed tracking-wide">
              Building Tomorrow's AI-Native Organizations Today
            </p>
          </div>
          
          {/* CTA Buttons - Much Bolder and More Prominent */}
          <div className="mb-24 fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center max-w-5xl mx-auto">
              <button className="group inline-flex items-center justify-center gap-4 px-12 py-6 bg-gray-900 text-white font-bold text-xl rounded-2xl transition-all duration-300 hover:bg-gray-800 hover:shadow-2xl hover:-translate-y-2 w-full sm:w-auto sm:min-w-[380px] shadow-xl border-2 border-gray-900">
                <span className="font-black tracking-wide">Schedule AI Readiness Assessment</span>
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
              </button>
              
              <button className="inline-flex items-center justify-center px-12 py-6 bg-white text-gray-900 font-bold text-xl rounded-2xl border-3 border-gray-400 transition-all duration-300 hover:bg-gray-50 hover:border-gray-500 hover:shadow-xl hover:-translate-y-2 w-full sm:w-auto sm:min-w-[380px] shadow-lg">
                <span className="font-black tracking-wide">Book Strategic Consultation</span>
              </button>
            </div>
          </div>

          {/* Contact Information - Enhanced Visibility */}
          <div className="fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
              <div className="group flex items-center gap-4 px-10 py-5 frosted-glass hover-lift transition-all duration-300 shadow-lg">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 p-0.5">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <Mail className="w-7 h-7 text-gray-800" />
                  </div>
                </div>
                <span className="font-bold text-xl text-gray-700">hello@v1sion.ai</span>
              </div>
              
              <div className="group flex items-center gap-4 px-10 py-5 frosted-glass hover-lift transition-all duration-300 shadow-lg">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 p-0.5">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <Phone className="w-7 h-7 text-gray-800" />
                  </div>
                </div>
                <span className="font-bold text-xl text-gray-700">+91-9876543210</span>
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