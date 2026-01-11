'use client';

import { createContext, useContext, useState, useEffect, useMemo } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Initialize from localStorage if available, otherwise default to 'en'
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('language') || 'en';
    }
    return 'en';
  });

  useEffect(() => {
    // Sync with localStorage on mount
    const savedLanguage = localStorage.getItem('language') || 'en';
    if (savedLanguage !== language) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  };

  const value = useMemo(() => ({
    language,
    changeLanguage
  }), [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

