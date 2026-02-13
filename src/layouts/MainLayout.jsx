import React, { useState, useEffect } from 'react';
import { coachInfo } from '../data/content';

const MainLayout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            <div className="text-xl font-bold font-display text-white">
              {coachInfo.name}
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-300 hover:text-primary transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-gray-300 hover:text-primary transition-colors"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('payment')}
                className="text-gray-300 hover:text-primary transition-colors"
              >
                Payment
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;


