import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Height of your navbar
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-md' : 'bg-white/80 backdrop-blur-lg'
    }`}>
      <div className="container mx-auto px-6">
        <div className="relative flex items-center justify-between h-20">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-green-600">EcoSpin</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} 
              className="text-gray-600 hover:text-green-600 transition-colors">Home</button>
            <button onClick={() => scrollToSection('features')}
              className="text-gray-600 hover:text-green-600 transition-colors">Features</button>
            <button onClick={() => scrollToSection('how-it-works')}
              className="text-gray-600 hover:text-green-600 transition-colors">How It Works</button>
            <button onClick={() => scrollToSection('gallery')}
              className="text-gray-600 hover:text-green-600 transition-colors">Gallery</button>
            <button onClick={() => scrollToSection('pricing')}
              className="text-gray-600 hover:text-green-600 transition-colors">Pricing</button>
            <button onClick={() => scrollToSection('contact')}
              className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-green-600 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('features')}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-green-600 transition-colors">
                Features
              </button>
              <button onClick={() => scrollToSection('how-it-works')}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-green-600 transition-colors">
                How It Works
              </button>
              <button onClick={() => scrollToSection('gallery')}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-green-600 transition-colors">
                Gallery
              </button>
              <button onClick={() => scrollToSection('pricing')}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-green-600 transition-colors">
                Pricing
              </button>
              <button onClick={() => scrollToSection('contact')}
                className="block w-full mt-4 bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}