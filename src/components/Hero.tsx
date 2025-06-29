import React, { useEffect, useRef } from 'react';
import { ArrowRight, Mail, Phone, Sparkles } from 'lucide-react';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        
        // Apply parallax transform to video
        videoRef.current.style.transform = `translateY(${scrolled * parallaxSpeed}px) scale(1.1)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* First Screen - Video with Parallax Effect and Only Main Heading */}
      <section className="relative min-h-screen w-full bg-black overflow-hidden">
        {/* Video Background with Parallax */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-75 ease-out"
            style={{ 
              transform: 'scale(1.1)',
              willChange: 'transform'
            }}
          >
            <source src="/public/Strategic.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Video Overlay for Better Text Contrast */}
          <div className="absolute inset-0 bg-black/20 z-5"></div>
        </div>

        {/* Only Main Heading on First Screen */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-tomorrow font-medium leading-tight fade-in-up">
              <span className="block text-white drop-shadow-2xl">
                Strategic AI-Native
              </span>
              <span className="block bg-gradient-to-r from-green-300 via-green-200 to-emerald-400 bg-clip-text text-transparent mt-2 drop-shadow-2xl">
                Transformation
              </span>
            </h1>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Screen - Content Below Video */}
      <section className="section-spacing bg-white relative z-20">
        <div className="section-container">
          <div className="text-center flex flex-col items-center">
            {/* Professional Badge */}
            <div className="mb-8 inline-flex items-center gap-2 frosted-glass px-6 py-3 hover-lift">
              <Sparkles className="w-5 h-5 text-amber-600 animated-icon" />
              <span className="text-sm font-semibold text-gray-800 tracking-wide">Enterprise AI Transformation</span>
            </div>

            {/* Subheadline */}
            <p className="text-2xl md:text-3xl font-agile text-gray-700 mb-8 max-w-4xl mx-auto fade-in-up leading-relaxed">
              Building Tomorrow's AI-Native Organizations Today
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8 fade-in-up">
              <button className="professional-button group flex items-center justify-center gap-4 text-lg">
                Schedule AI Readiness Assessment
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </button>
              <button className="professional-button-secondary text-lg">
                Book Strategic Consultation
              </button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-700 fade-in-up">
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
    </>
  );
};

export default Hero;