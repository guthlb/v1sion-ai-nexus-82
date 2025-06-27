
import React from 'react';
import { ArrowRight, Mail, Phone, Rocket, Calendar } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="cinematic-section bg-gradient-to-b from-[#151922] via-[#0a0e17] to-[#000000] relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00f0ff]/5 via-transparent to-[#b967ff]/5" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00f0ff]/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Section Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8">
            <Rocket className="w-5 h-5 text-[#00f0ff]" />
            <span className="text-sm font-agile text-gray-300 uppercase tracking-wider">Ready to Transform</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-mooxy font-black text-white mb-8 floating-text">
            Ready to Transform Your
            <span className="block bg-gradient-to-r from-[#00f0ff] to-[#b967ff] bg-clip-text text-transparent mt-2">
              Organization?
            </span>
          </h2>
          
          <p className="text-xl font-agile text-gray-300 mb-12 max-w-2xl mx-auto">
            Start your AI transformation journey with a comprehensive readiness assessment
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="holographic-button group">
              <Calendar className="w-5 h-5 transition-transform group-hover:rotate-12" />
              <span className="relative z-10">Schedule AI Readiness Assessment</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            
            <button className="glass-card px-8 py-4 font-agile font-semibold text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3">
              <Rocket className="w-5 h-5 text-[#b967ff]" />
              Book Strategic Consultation
            </button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-300 mb-16">
            <div className="glass-card px-6 py-4 flex items-center gap-3 hover-zoom group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00f0ff] to-[#0080ff] p-0.5 group-hover:scale-110 transition-transform duration-300">
                <div className="w-full h-full rounded-full bg-[#0a0e17] flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
              </div>
              <span className="font-inter font-medium">hello@v1sion.ai</span>
            </div>
            
            <div className="glass-card px-6 py-4 flex items-center gap-3 hover-zoom group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#b967ff] to-[#8b4eff] p-0.5 group-hover:scale-110 transition-transform duration-300">
                <div className="w-full h-full rounded-full bg-[#0a0e17] flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
              </div>
              <span className="font-inter font-medium">+91-9876543210</span>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mb-16">
            <div className="glass-card inline-block px-8 py-4">
              <div className="flex items-center justify-center gap-6 text-sm font-agile text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span>Enterprise Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse" />
                  <span>ISO Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#b967ff] animate-pulse" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <div className="text-2xl font-mooxy font-black text-white mb-2">
                  V1S1ON
                </div>
                <p className="text-sm text-gray-400 font-agile">
                  Building Tomorrow's AI-Native Organizations Today
                </p>
              </div>
              
              <div className="text-center md:text-right">
                <p className="text-sm text-gray-400 font-inter">
                  © 2024 V1S1ON. All rights reserved.
                </p>
                <p className="text-xs text-gray-500 font-inter mt-1">
                  Strategic AI-Native Transformation for the Enterprise
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ambient Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-[#00f0ff] opacity-10 blur-3xl" />
    </section>
  );
};

export default ContactSection;
