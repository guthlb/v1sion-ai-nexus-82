
import React from 'react';
import { ArrowRight, Mail, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Strategic AI-Native Transformation 
            <span className="text-teal-600"> for the Enterprise</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Building Tomorrow's AI-Native Organizations Today
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors flex items-center justify-center gap-2">
              Schedule AI Readiness Assessment
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg font-semibold hover:border-teal-600 hover:text-teal-600 transition-colors">
              Book Strategic Consultation
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-600">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-teal-600" />
              <span>hello@v1sion.ai</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-teal-600" />
              <span>+91-9876543210</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
