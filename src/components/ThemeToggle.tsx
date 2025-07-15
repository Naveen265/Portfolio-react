import React, { useState, useRef, useEffect } from 'react';
import { Moon, Sun, Zap, ChevronDown, Gamepad2, Film, Car } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleDarkLight, toggleSpecial } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="w-5 h-5" />;
      case 'special':
        return <Zap className="w-5 h-5 text-red-500" />;
      default:
        return <Moon className="w-5 h-5" />;
    }
  };

  const getThemeLabel = () => {
    switch (theme) {
      case 'light':
        return 'Light';
      case 'special':
        return 'F1 Special';
      default:
        return 'Dark';
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Theme Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 border ${
          theme === 'light'
            ? 'bg-white text-gray-800 border-gray-300 hover:bg-gray-50'
            : theme === 'special'
            ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white border-red-500 hover:from-red-700 hover:to-orange-700'
            : 'bg-gray-800 text-gray-200 border-gray-600 hover:bg-gray-700'
        }`}
      >
        {getThemeIcon()}
        <span className="text-sm font-medium hidden sm:inline">{getThemeLabel()}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className={`absolute right-0 mt-2 w-72 rounded-xl shadow-2xl border z-50 ${
          theme === 'light'
            ? 'bg-white border-gray-200'
            : theme === 'special'
            ? 'bg-gray-900 border-red-500/30 shadow-red-500/20'
            : 'bg-gray-800 border-gray-600'
        }`}>
          <div className="p-4 space-y-4">
            {/* Header */}
            <div className="flex items-center gap-2 pb-2 border-b border-gray-600">
              <div className={`p-1.5 rounded-lg ${
                theme === 'special' ? 'bg-red-600' : 'bg-blue-600'
              }`}>
                <Zap className="w-4 h-4 text-white" />
              </div>
              <h3 className={`font-semibold ${
                theme === 'light' ? 'text-gray-800' : 'text-white'
              }`}>
                Theme Settings
              </h3>
            </div>

            {/* Dark/Light Toggle */}
            <div className="space-y-2">
              <label className={`text-sm font-medium ${
                theme === 'light' ? 'text-gray-700' : 'text-gray-300'
              }`}>
                Appearance Mode
              </label>
              <div className={`flex items-center justify-between p-3 rounded-lg ${
                theme === 'light' ? 'bg-gray-50' : 'bg-gray-700'
              }`}>
                <div className="flex items-center gap-3">
                  {theme === 'light' ? (
                    <Sun className="w-5 h-5 text-yellow-500" />
                  ) : (
                    <Moon className="w-5 h-5 text-blue-400" />
                  )}
                  <span className={`text-sm ${
                    theme === 'light' ? 'text-gray-800' : 'text-gray-200'
                  }`}>
                    {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
                  </span>
                </div>
                <button
                  onClick={toggleDarkLight}
                  className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                    theme === 'light' ? 'bg-blue-500' : 'bg-gray-600'
                  }`}
                >
                  <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                    theme === 'light' ? 'translate-x-6' : 'translate-x-0.5'
                  }`} />
                </button>
              </div>
            </div>

            {/* Special Theme Toggle */}
            <div className="space-y-2">
              <label className={`text-sm font-medium ${
                theme === 'light' ? 'text-gray-700' : 'text-gray-300'
              }`}>
                Special Theme
              </label>
              <div className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                theme === 'special'
                  ? 'bg-gradient-to-r from-red-900/30 to-orange-900/30 border-red-500'
                  : theme === 'light'
                  ? 'bg-gray-50 border-gray-200'
                  : 'bg-gray-700 border-gray-600'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Car className="w-4 h-4 text-red-500" />
                      <Gamepad2 className="w-4 h-4 text-blue-500" />
                      <Film className="w-4 h-4 text-purple-500" />
                    </div>
                    <span className={`text-sm font-medium ${
                      theme === 'light' ? 'text-gray-800' : 'text-gray-200'
                    }`}>
                      F1 Gaming Cinema
                    </span>
                  </div>
                  <button
                    onClick={toggleSpecial}
                    className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                      theme === 'special' ? 'bg-red-500' : 'bg-gray-600'
                    }`}
                  >
                    <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                      theme === 'special' ? 'translate-x-6' : 'translate-x-0.5'
                    }`} />
                  </button>
                </div>
                <p className={`text-xs ${
                  theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                }`}>
                  Formula 1 inspired theme with gaming and cinema vibes
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;