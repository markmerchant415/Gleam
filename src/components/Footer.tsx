import React from 'react';
import { Globe, Twitter, Facebook, Instagram, Linkedin, Mail, Phone, Github, Heart } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer className={`${darkMode ? 'bg-gray-900' : 'bg-gray-900'} text-white relative overflow-hidden`}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            {Array.from({ length: 10 }).map((_, i) => (
              <path 
                key={i}
                d={`M${Math.random() * 100} ${Math.random() * 100} Q${Math.random() * 100} ${Math.random() * 100}, ${Math.random() * 100} ${Math.random() * 100}`}
                stroke="#8b5cf6"
                strokeWidth="0.2"
                fill="none"
              />
            ))}
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="transform transition-all duration-500 hover:-translate-y-2">
            <div className="flex items-center mb-4 group">
              <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full p-2 mr-2 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Gleam</span>
            </div>
            <p className="text-gray-400 mb-4">
              Revolutionizing cross-border payments with blockchain technology. Send money anywhere, instantly and securely.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Twitter size={20} />, href: "#" },
                { icon: <Facebook size={20} />, href: "#" },
                { icon: <Instagram size={20} />, href: "#" },
                { icon: <Linkedin size={20} />, href: "#" },
                { icon: <Github size={20} />, href: "#" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-125"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="transform transition-all duration-500 hover:-translate-y-2">
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"></span>
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Features", href: "#features" },
                { name: "How It Works", href: "#how-it-works" },
                { name: "Security", href: "#security" },
                { name: "Pricing", href: "#pricing" },
                { name: "FAQ", href: "#faq" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-all duration-300 group flex items-center"
                  >
                    <span className="w-0 h-0.5 bg-indigo-500 mr-0 transition-all duration-300 group-hover:w-2 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="transform transition-all duration-500 hover:-translate-y-2">
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Legal
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"></span>
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Terms of Service", href: "#" },
                { name: "Privacy Policy", href: "#" },
                { name: "Cookie Policy", href: "#" },
                { name: "Compliance", href: "#" },
                { name: "AML Policy", href: "#" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-all duration-300 group flex items-center"
                  >
                    <span className="w-0 h-0.5 bg-indigo-500 mr-0 transition-all duration-300 group-hover:w-2 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="transform transition-all duration-500 hover:-translate-y-2">
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"></span>
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center group">
                <Mail size={16} className="mr-2 text-gray-400 group-hover:text-indigo-400 transition-colors duration-300" />
                <a href="mailto:support@gleam.com" className="text-gray-400 hover:text-white transition-all duration-300">
                  support@gleam.com
                </a>
              </li>
              <li className="flex items-center group">
                <Phone size={16} className="mr-2 text-gray-400 group-hover:text-indigo-400 transition-colors duration-300" />
                <a href="tel:+18001234567" className="text-gray-400 hover:text-white transition-all duration-300">
                  +1 (800) 123-4567
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Subscribe to our newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all duration-300 focus:-translate-y-1"
                />
                <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-r-lg transition-all duration-300 transform hover:-translate-y-1">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Gleam. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center">
            <p className="text-gray-400 text-sm mr-2">
              Made with
            </p>
            <Heart size={16} className="text-pink-500 animate-pulse-slow mx-1" />
            <p className="text-gray-400 text-sm ml-1">
              by the Gleam Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;