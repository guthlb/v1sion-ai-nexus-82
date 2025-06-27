
import React from 'react';
import { ArrowRight, Mail, Phone, Rocket, Calendar } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section-spacing bg-gray-50">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Section Badge */}
          <div className="inline-flex items-center gap-2 frosted-glass px-4 py-2 mb-8">
            <Rocket className="w-4 h-4 text-emerald-700" />
            <span className="text-tiny font-medium text-gray-700 uppercase tracking-wider">Ready to Transform</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-section-title text-gray-900 mb-6 fade-in-up">
            Ready to Transform Your
            <span className="block text-gradient mt-2">Organization?</span>
          </h2>
          
          <p className="text-body-large text-gray-600 mb-12 max-w-2xl mx-auto fade-in-up">
            Start your AI transformation journey with a comprehensive readiness assessment
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button className="professional-button flex items-center justify-center gap-3 group">
              <Calendar className="w-5 h-5 transition-transform group-hover:rotate-12" />
              Schedule AI Readiness Assessment
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            
            <button className="professional-button-secondary flex items-center justify-center gap-3">
              <Rocket className="w-5 h-5 text-emerald-700" />
              Book Strategic Consultation
            </button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-700 mb-12">
            <div className="frosted-glass px-6 py-4 flex items-center gap-3 hover-lift group">
              <div className="w-10 h-10 rounded-full bg-emerald-100 p-0.5 group-hover:scale-110 transition-transform duration-300">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <Mail className="w-5 h-5 text-emerald-700" />
                </div>
              </div>
              <span className="font-medium">hello@v1sion.ai</span>
            </div>
            
            <div className="frosted-glass px-6 py-4 flex items-center gap-3 hover-lift group">
              <div className="w-10 h-10 rounded-full bg-gray-100 p-0.5 group-hover:scale-110 transition-transform duration-300">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <Phone className="w-5 h-5 text-gray-900" />
                </div>
              </div>
              <span className="font-medium">+91-9876543210</span>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mb-12">
            <div className="frosted-glass inline-block px-8 py-4 hover-lift">
              <div className="flex items-center justify-center gap-6 text-tiny font-medium text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span>Enterprise Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  <span>ISO Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gray-900 animate-pulse" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <div className="text-xl font-mooxy font-bold text-gray-900 mb-2">
                  V1S1ON
                </div>
                <p className="text-small text-gray-600 font-agile">
                  Building Tomorrow's AI-Native Organizations Today
                </p>
              </div>
              
              <div className="text-center md:text-right">
                <p className="text-small text-gray-600">
                  © 2024 V1S1ON. All rights reserved.
                </p>
                <p className="text-tiny text-gray-500 mt-1">
                  Strategic AI-Native Transformation for the Enterprise
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
