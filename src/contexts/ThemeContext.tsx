import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeType = 'dark' | 'light' | 'special';

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  toggleDarkLight: () => void;
  toggleSpecial: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeType;
    if (savedTheme && ['dark', 'light', 'special'].includes(savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    
    // Apply theme classes to document
    document.documentElement.classList.remove('theme-dark', 'theme-light', 'theme-special');
    document.documentElement.classList.add(`theme-${theme}`);
  }, [theme]);

  const toggleDarkLight = () => {
    setTheme(current => current === 'light' ? 'dark' : 'light');
  };

  const toggleSpecial = () => {
    setTheme(current => current === 'special' ? 'dark' : 'special');
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleDarkLight, toggleSpecial }}>
      {children}
    </ThemeContext.Provider>
  );
};