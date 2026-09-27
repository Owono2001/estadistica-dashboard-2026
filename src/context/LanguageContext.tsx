"use client";

import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations, TranslationKey } from '../data/translations';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 1. Inicializa con 'en' por defecto para que el servidor no falle
  const [language, setLanguage] = useState<Language>('en');

  // 2. Lee el localStorage solo en el cliente (después del primer renderizado)
  useEffect(() => {
    const saved = localStorage.getItem('portfolio_lang');
    if (saved === 'es' || saved === 'en') {
      setLanguage(saved as Language);
    }
  }, []);

  // 3. Guarda en localStorage cada vez que cambie el idioma
  useEffect(() => {
    localStorage.setItem('portfolio_lang', language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en');
  };

  const t = (key: TranslationKey): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};