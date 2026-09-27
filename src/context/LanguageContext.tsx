"use client";

import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations } from '../data/translations';
import type { TranslationKey } from '../data/translations';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 1. Inicializa con 'es' por defecto (idioma original del panel) para que el
  //    render del servidor y el primer render del cliente coincidan (evita hydration mismatch).
  const [language, setLanguage] = useState<Language>('es');

  // 2. Lee localStorage solo después del montaje: es la única forma segura de
  //    sincronizar con un valor que solo existe en el navegador sin desajustar la hidratación.
  useEffect(() => {
    const saved = window.localStorage.getItem('portfolio_lang');
    if (saved === 'es' || saved === 'en') {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- sync desde localStorage tras montar, patrón intencional
      setLanguage(saved);
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