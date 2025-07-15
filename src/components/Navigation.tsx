import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const getThemeClasses = () => {
    switch (theme) {
      case 'light':
        return {
          nav: isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm',
          logo: 'text-orange-600',
          text: 'text-gray-700',
          mobile: 'bg-white shadow-lg border-gray-200',
          mobileText: 'text-gray-700 hover:text-orange-600 hover:bg-gray-100'
        };
      case 'special':
        return {
          nav: isScrolled ? 'bg-black shadow-2xl shadow-red-500/20' : 'bg-black/90 backdrop-blur-sm',
          logo: 'text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500',
          text: 'text-gray-200',
          mobile: 'bg-black shadow-2xl border-red-500/30 shadow-red-500/20',
          mobileText: 'text-gray-300 hover:text-red-400 hover:bg-red-900/20'
        };
      default:
        return {
          nav: isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent',
          logo: isScrolled ? 'text-orange-400' : 'text-white',
          text: isScrolled ? 'text-gray-300' : 'text-white',
          mobile: 'bg-gray-900 shadow-lg border-gray-700',
          mobileText: 'text-gray-300 hover:text-orange-400 hover:bg-gray-800'
        };
    }
  };

  const themeClasses = getThemeClasses();

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${themeClasses.nav}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className={`text-2xl font-bold transition-colors duration-300 ${themeClasses.logo}`}
            >
              NJ
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="ml-10 flex items-baseline space-x-8">
              {[
                { name: 'Home', id: 'home' },
                { name: 'Skills', id: 'skills' },
                { name: 'Experience', id: 'experience' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 hover:text-orange-400 ${themeClasses.text}`}
                >
                  {item.name}
                </button>
              ))}
            </div>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${themeClasses.text}`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden absolute top-16 left-0 right-0 ${themeClasses.mobile} rounded-b-lg border-t`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { name: 'Home', id: 'home' },
                { name: 'Skills', id: 'skills' },
                { name: 'Experience', id: 'experience' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${themeClasses.mobileText}`}
                >
                  {item.name}
                </button>
              ))}
              <div className="px-3 py-2">
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;