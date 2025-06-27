
import React from 'react';
import { ArrowRight, Mail, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Start your AI transformation journey with a comprehensive readiness assessment
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors flex items-center justify-center gap-2">
              Schedule AI Readiness Assessment
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:border-teal-400 hover:text-teal-400 transition-colors">
              Book Strategic Consultation
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-300">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-teal-400" />
              <span>hello@v1sion.ai</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-teal-400" />
              <span>+91-9876543210</span>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-700 text-center">
            <p className="text-slate-400 text-sm">
              © 2024 V1S1ON. Building Tomorrow's AI-Native Organizations Today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
