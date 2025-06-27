
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
      <div className="frosted-glass border-b border-gray-200/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-emerald-600 p-0.5">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-gray-800" />
                </div>
              </div>
              <div className="text-3xl font-mooxy font-black text-gray-900">
                V1S1ON
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('approach')} 
                className="text-gray-700 hover:text-gray-900 transition-colors font-agile font-semibold elegant-underline"
              >
                Our Approach
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-gray-700 hover:text-gray-900 transition-colors font-agile font-semibold elegant-underline"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('impact')} 
                className="text-gray-700 hover:text-gray-900 transition-colors font-agile font-semibold elegant-underline"
              >
                Impact
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="professional-button text-sm px-6 py-3"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden frosted-glass p-3 rounded-xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-800" />
              ) : (
                <Menu className="w-6 h-6 text-gray-800" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 frosted-glass p-6 space-y-4 rounded-2xl">
              <button 
                onClick={() => scrollToSection('approach')} 
                className="block w-full text-left text-gray-700 hover:text-gray-900 transition-colors font-agile font-semibold py-3 elegant-underline"
              >
                Our Approach
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="block w-full text-left text-gray-700 hover:text-gray-900 transition-colors font-agile font-semibold py-3 elegant-underline"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('impact')} 
                className="block w-full text-left text-gray-700 hover:text-gray-900 transition-colors font-agile font-semibold py-3 elegant-underline"
              >
                Impact
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="professional-button text-sm w-full mt-4"
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
