
import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-slate-800">
            V1S1ON
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection('approach')} className="text-slate-600 hover:text-teal-600 transition-colors">
              Our Approach
            </button>
            <button onClick={() => scrollToSection('services')} className="text-slate-600 hover:text-teal-600 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('impact')} className="text-slate-600 hover:text-teal-600 transition-colors">
              Impact
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
