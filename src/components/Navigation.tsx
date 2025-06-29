import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if we're on the home page (with video background)
  const isHomePage = location.pathname === '/';

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

  // Dynamic styles based on page
  const navBgClass = isHomePage 
    ? "backdrop-blur-sm bg-white/20 border-b border-white/10" 
    : "backdrop-blur-md bg-white/95 border-b border-gray-200/50";
  
  const logoTextClass = isHomePage 
    ? "text-white drop-shadow-lg" 
    : "text-gray-900";
  
  const linkTextClass = isHomePage 
    ? "text-white/90 hover:text-white drop-shadow-md" 
    : "text-gray-700 hover:text-gray-900";
  
  const mobileButtonClass = isHomePage 
    ? "backdrop-blur-sm bg-white/20 border-white/20" 
    : "bg-gray-100 border-gray-200";
  
  const mobileButtonIconClass = isHomePage 
    ? "text-white" 
    : "text-gray-800";
  
  const mobileMenuClass = isHomePage 
    ? "backdrop-blur-md bg-white/30 border-white/20" 
    : "bg-white/95 border-gray-200";
  
  const mobileLinkClass = isHomePage 
    ? "text-white/90 hover:text-white" 
    : "text-gray-700 hover:text-gray-900";

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      {/* Dynamic Navigation Bar */}
      <div className={navBgClass}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigateToPage('/')}>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-emerald-600 p-0.5">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-gray-800" />
                </div>
              </div>
              <div className={`text-3xl font-mooxy font-black ${logoTextClass}`}>
                V1SION
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => navigateToPage('/our-approach')} 
                className={`${linkTextClass} transition-colors font-agile font-semibold elegant-underline`}
              >
                Our Approach
              </button>
              <button 
                onClick={() => navigateToPage('/services')} 
                className={`${linkTextClass} transition-colors font-agile font-semibold elegant-underline`}
              >
                Services
              </button>
              <button 
                onClick={() => navigateToPage('/impact')} 
                className={`${linkTextClass} transition-colors font-agile font-semibold elegant-underline`}
              >
                Impact
              </button>
              <button 
                onClick={() => navigateToPage('/blog')} 
                className={`${linkTextClass} transition-colors font-agile font-semibold elegant-underline`}
              >
                Blog
              </button>
              <button 
                onClick={() => navigateToPage('/kits')} 
                className={`${linkTextClass} transition-colors font-agile font-semibold elegant-underline`}
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
              className={`md:hidden p-3 rounded-xl border ${mobileButtonClass}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${mobileButtonIconClass}`} />
              ) : (
                <Menu className={`w-6 h-6 ${mobileButtonIconClass}`} />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className={`md:hidden mt-4 p-6 space-y-4 rounded-2xl border ${mobileMenuClass}`}>
              <button 
                onClick={() => navigateToPage('/our-approach')} 
                className={`block w-full text-left ${mobileLinkClass} transition-colors font-agile font-semibold py-3 elegant-underline`}
              >
                Our Approach
              </button>
              <button 
                onClick={() => navigateToPage('/services')} 
                className={`block w-full text-left ${mobileLinkClass} transition-colors font-agile font-semibold py-3 elegant-underline`}
              >
                Services
              </button>
              <button 
                onClick={() => navigateToPage('/impact')} 
                className={`block w-full text-left ${mobileLinkClass} transition-colors font-agile font-semibold py-3 elegant-underline`}
              >
                Impact
              </button>
              <button 
                onClick={() => navigateToPage('/blog')} 
                className={`block w-full text-left ${mobileLinkClass} transition-colors font-agile font-semibold py-3 elegant-underline`}
              >
                Blog
              </button>
              <button 
                onClick={() => navigateToPage('/kits')} 
                className={`block w-full text-left ${mobileLinkClass} transition-colors font-agile font-semibold py-3 elegant-underline`}
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