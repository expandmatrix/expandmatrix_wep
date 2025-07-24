import React, { createContext, useState, useEffect, useContext } from 'react';
import { translations } from '@/components/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    // First check localStorage for saved preference
    const savedLanguage = localStorage.getItem('expandMatrix_language');
    
    if (savedLanguage && (savedLanguage === 'cs' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    } else {
      // Detect browser language
      const browserLang = navigator.language || navigator.userLanguage;
      const detectedLang = browserLang.toLowerCase().startsWith('cs') ? 'cs' : 'en';
      setLanguage(detectedLang);
      localStorage.setItem('expandMatrix_language', detectedLang);
    }
  }, []);

  const switchLanguage = (newLang) => {
    if (newLang === 'cs' || newLang === 'en') {
      setLanguage(newLang);
      localStorage.setItem('expandMatrix_language', newLang);
    }
  };
  
  const t = translations[language] || translations.en;

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};