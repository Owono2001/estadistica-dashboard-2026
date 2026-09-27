"use client";

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Globe, Menu, X, Activity } from 'lucide-react';

const Header: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Efecto para cambiar el fondo del header al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.analytics' as any) || 'Analytics', href: '#dashboard' },
    { name: t('nav.profile' as any) || 'Profile', href: '#profile' },
    { name: t('nav.contact' as any) || 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/80 backdrop-blur-md border-b border-slate-800 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo / Brand */}
        <div className="flex items-center gap-2">
          <div className="text-2xl font-cyber font-bold tracking-wider">
            <span className="text-slate-100">P</span>
            <span className="text-blue-500">F</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 ml-2 px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
            <Activity size={12} className="text-blue-400" />
            <span className="text-[10px] font-mono text-blue-400 tracking-widest uppercase">M.Eng</span>
          </div>
        </div>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-tech text-slate-300 hover:text-blue-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          {/* Botón de Idioma */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800 transition-all text-sm font-tech text-slate-200"
          >
            <Globe size={14} className="text-blue-400" />
            <span>{language.toUpperCase()}</span>
          </button>
        </nav>

        {/* Botón Menú Móvil */}
        <button 
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú Móvil Desplegable */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-slate-900 border-b border-slate-800 shadow-xl">
          <div className="flex flex-col px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-tech text-slate-300 hover:text-blue-400 border-b border-slate-800 pb-2"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => {
                toggleLanguage();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 text-sm font-tech text-slate-300 w-full pt-2"
            >
              <Globe size={16} className="text-blue-400" />
              <span>Cambiar a {language === 'en' ? 'Español' : 'English'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;