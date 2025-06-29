import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navigateToPage = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      {/* Ultra Transparent Navigation Bar that merges with video */}
      <div className="backdrop-blur-sm bg-white/20 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigateToPage('/')}>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-emerald-600 p-0.5">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-gray-800" />
                </div>
              </div>
              <div className="text-3xl font-mooxy font-black text-white drop-shadow-lg">
                V1SION
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => navigateToPage('/our-approach')} 
                className="text-black/90 hover:text-black transition-colors font-agile font-semibold elegant-underline drop-shadow-md"
              >
                Our Approach
              </button>
              <button 
                onClick={() => navigateToPage('/services')} 
                className="text-black/90 hover:text-black transition-colors font-agile font-semibold elegant-underline drop-shadow-md"
              >
                Services
              </button>
              <button 
                onClick={() => navigateToPage('/impact')} 
                className="text-black/90 hover:text-black transition-colors font-agile font-semibold elegant-underline drop-shadow-md"
              >
                Impact
              </button>
              <button 
                onClick={() => navigateToPage('/blog')} 
                className="text-black/90 hover:text-black transition-colors font-agile font-semibold elegant-underline drop-shadow-md"
              >
                Blog
              </button>
              <button 
                onClick={() => navigateToPage('/kits')} 
                className="text-black/90 hover:text-black transition-colors font-agile font-semibold elegant-underline drop-shadow-md"
              >
                Kits
              </button>
              <button 
                onClick={() => navigateToPage('/get-started')} 
                className="professional-button text-sm px-6 py-3 shadow-lg"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden backdrop-blur-sm bg-white/20 p-3 rounded-xl border border-white/20"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-black" />
              ) : (
                <Menu className="w-6 h-6 text-black" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 backdrop-blur-md bg-white/30 p-6 space-y-4 rounded-2xl border border-white/20">
              <button 
                onClick={() => navigateToPage('/our-approach')} 
                className="block w-full text-left text-black/90 hover:text-black transition-colors font-agile font-semibold py-3 elegant-underline"
              >
                Our Approach
              </button>
              <button 
                onClick={() => navigateToPage('/services')} 
                className="block w-full text-left text-black/90 hover:text-black transition-colors font-agile font-semibold py-3 elegant-underline"
              >
                Services
              </button>
              <button 
                onClick={() => navigateToPage('/impact')} 
                className="block w-full text-left text-black/90 hover:text-black transition-colors font-agile font-semibold py-3 elegant-underline"
              >
                Impact
              </button>
              <button 
                onClick={() => navigateToPage('/blog')} 
                className="block w-full text-left text-black/90 hover:text-black transition-colors font-agile font-semibold py-3 elegant-underline"
              >
                Blog
              </button>
              <button 
                onClick={() => navigateToPage('/kits')} 
                className="block w-full text-left text-black/90 hover:text-black transition-colors font-agile font-semibold py-3 elegant-underline"
              >
                Kits
              </button>
              <button 
                onClick={() => navigateToPage('/get-started')} 
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