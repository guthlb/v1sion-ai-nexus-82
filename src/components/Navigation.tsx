
import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="glass-card backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00f0ff] to-[#b967ff] p-0.5">
                <div className="w-full h-full rounded-full bg-[#0a0e17] flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="text-2xl font-mooxy font-black text-white">
                V1S1ON
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('approach')} 
                className="text-gray-300 hover:text-[#00f0ff] transition-colors font-agile font-medium"
              >
                Our Approach
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-gray-300 hover:text-[#00f0ff] transition-colors font-agile font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('impact')} 
                className="text-gray-300 hover:text-[#00f0ff] transition-colors font-agile font-medium"
              >
                Impact
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="holographic-button text-sm px-6 py-2"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden glass-card p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 glass-card p-4 space-y-4">
              <button 
                onClick={() => scrollToSection('approach')} 
                className="block w-full text-left text-gray-300 hover:text-[#00f0ff] transition-colors font-agile font-medium py-2"
              >
                Our Approach
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="block w-full text-left text-gray-300 hover:text-[#00f0ff] transition-colors font-agile font-medium py-2"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('impact')} 
                className="block w-full text-left text-gray-300 hover:text-[#00f0ff] transition-colors font-agile font-medium py-2"
              >
                Impact
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="holographic-button text-sm w-full mt-4"
              >
                Get Started
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
