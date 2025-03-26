import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`${darkMode ? 'bg-gray-900/90 text-white' : 'bg-white/90 text-gray-900'} sticky top-0 z-50 backdrop-blur-md transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo with animation */}
          <div className="flex items-center group">
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full p-2 mr-2 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
              <Globe className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 group-hover:from-indigo-600 group-hover:via-purple-600 group-hover:to-pink-600 transition-all duration-300">Gleam</span>
          </div>

          {/* Desktop Navigation with hover effects */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: "Features", href: "#features" },
              { name: "How It Works", href: "#how-it-works" },
              { name: "Security", href: "#security" },
              { name: "Pricing", href: "#pricing" },
              { name: "FAQ", href: "#faq" },
              { name: "Contact", href: "#contact" }
            ].map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-indigo-600'} font-medium transition-all duration-300 relative group`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Buttons and Dark Mode Toggle with enhanced effects */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 text-yellow-300 hover:bg-gray-700' : 'bg-gray-100 text-indigo-600 hover:bg-gray-200'} transition-all duration-300 transform hover:scale-110 hover:rotate-12`}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className={`${darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-800'} font-semibold transition-all duration-300 relative group`}>
              Log In
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 shadow-lg transform hover:-translate-y-1 hover:shadow-indigo-500/25">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button and Dark Mode Toggle with animations */}
          <div className="md:hidden flex items-center space-x-2">
            <button 
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 text-yellow-300 hover:bg-gray-700' : 'bg-gray-100 text-indigo-600 hover:bg-gray-200'} transition-all duration-300 transform hover:scale-110`}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              type="button"
              className={`${darkMode ? 'text-white hover:text-indigo-300' : 'text-gray-700 hover:text-indigo-600'} transition-all duration-300 transform hover:scale-110`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with animations */}
      <div 
        className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg backdrop-blur-md transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-5 space-y-4">
          {[
            { name: "Features", href: "#features" },
            { name: "How It Works", href: "#how-it-works" },
            { name: "Security", href: "#security" },
            { name: "Pricing", href: "#pricing" },
            { name: "FAQ", href: "#faq" },
            { name: "Contact", href: "#contact" }
          ].map((item, index) => (
            <a 
              key={index}
              href={item.href} 
              className={`block ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-indigo-600'} font-medium transition-all duration-300 transform hover:translate-x-2`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className={`pt-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} flex flex-col space-y-4`}>
            <button className={`${darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-800'} font-semibold transition-all duration-300 transform hover:translate-x-2`}>
              Log In
            </button>
            <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 shadow-lg transform hover:-translate-y-1">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;