
import React from 'react';
import { ArrowRight, Mail, Phone, Code2 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 code-bg opacity-30" />
      
      {/* Circuit Pattern Overlay */}
      <div className="absolute inset-0 circuit-pattern" />
      
      {/* Content */}
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Professional Badge */}
          <div className="mb-8 inline-flex items-center gap-2 glass-card px-4 py-2 hover-lift">
            <Code2 className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Enterprise AI Transformation</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-mooxy font-bold mb-6 leading-tight fade-in-up">
            <span className="block text-gray-900">
              Strategic AI-Native
            </span>
            <span className="block text-gradient mt-2">
              Transformation
            </span>
            <span className="block text-xl md:text-2xl font-agile text-gray-600 mt-6 font-normal">
              for the Enterprise
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl font-agile text-gray-700 mb-12 max-w-3xl mx-auto fade-in-up" style={{animationDelay: '0.2s'}}>
            Building Tomorrow's AI-Native Organizations Today
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 fade-in-up" style={{animationDelay: '0.4s'}}>
            <button className="professional-button group flex items-center justify-center gap-3">
              Schedule AI Readiness Assessment
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="professional-button-secondary">
              Book Strategic Consultation
            </button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-600 fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="glass-card px-4 py-2 flex items-center gap-2 hover-lift">
              <Mail className="w-4 h-4 text-blue-600" />
              <span className="font-medium">hello@v1sion.ai</span>
            </div>
            <div className="glass-card px-4 py-2 flex items-center gap-2 hover-lift">
              <Phone className="w-4 h-4 text-purple-600" />
              <span className="font-medium">+91-9876543210</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
