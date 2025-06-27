
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Mail, Phone, Sparkles } from 'lucide-react';

const Hero = () => {
  const particleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createParticles = () => {
      if (!particleRef.current) return;
      
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (8 + Math.random() * 4) + 's';
        particleRef.current.appendChild(particle);
      }
    };

    createParticles();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0e17] via-[#1a1f2e] to-[#0a0e17]">
      {/* Particle Background */}
      <div ref={particleRef} className="particle-bg" />
      
      {/* Neural Grid Background */}
      <div className="absolute inset-0 neural-grid opacity-30" />
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Floating Badge */}
          <div className="mb-8 inline-flex items-center gap-2 glass-card px-6 py-3 hover-zoom">
            <Sparkles className="w-5 h-5 text-[#00f0ff]" />
            <span className="text-sm font-agile text-gray-300">Architecting AI-Native Ecosystems</span>
          </div>

          {/* Main Headline with Floating Animation */}
          <h1 className="text-6xl md:text-8xl font-mooxy font-black mb-8 leading-tight floating-text">
            <span className="block bg-gradient-to-r from-[#00f0ff] via-white to-[#b967ff] bg-clip-text text-transparent">
              Strategic AI-Native
            </span>
            <span className="block text-white mt-4">
              Transformation
            </span>
            <span className="block text-2xl md:text-3xl font-agile text-gray-400 mt-6">
              for the Enterprise
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl font-agile text-gray-300 mb-12 max-w-3xl mx-auto floating-text" style={{animationDelay: '0.5s'}}>
            Building Tomorrow's AI-Native Organizations Today
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="holographic-button group">
              <span className="relative z-10 flex items-center justify-center gap-3">
                Schedule AI Readiness Assessment
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
            <button className="glass-card px-8 py-4 font-agile font-semibold text-white hover:bg-white/10 transition-all duration-300 hover:scale-105">
              Book Strategic Consultation
            </button>
          </div>

          {/* Contact Info with Glass Effect */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-300">
            <div className="glass-card px-6 py-3 flex items-center gap-3 hover-zoom">
              <Mail className="w-5 h-5 text-[#00f0ff]" />
              <span className="font-inter">hello@v1sion.ai</span>
            </div>
            <div className="glass-card px-6 py-3 flex items-center gap-3 hover-zoom">
              <Phone className="w-5 h-5 text-[#b967ff]" />
              <span className="font-inter">+91-9876543210</span>
            </div>
          </div>
        </div>
      </div>

      {/* Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00f0ff] rounded-full opacity-10 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#b967ff] rounded-full opacity-10 blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
    </section>
  );
};

export default Hero;
