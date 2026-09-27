// src/components/UpdateNotification.tsx
"use client"

import React, { useState, useEffect } from 'react';
import { Bell, X, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

// 🚀 v1.0.0 — Primer lanzamiento estable del panel GE en Datos (Next.js App Router)
const CURRENT_VERSION = 'v1.0.0';

const UpdateNotification: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const updateNotes = [
    t('update.note1'),
    t('update.note2'),
    t('update.note3'),
    t('update.note4'),
  ];

  useEffect(() => {
    // Comprueba la última versión que el usuario vio en este navegador
    const lastSeenVersion = localStorage.getItem('portfolio_version');

    // Si no ha visto esta versión, mostramos la notificación
    if (lastSeenVersion !== CURRENT_VERSION) {
      // Pequeño retraso de 2s para que aparezca con suavidad tras cargar el panel
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    // Guarda la versión actual para que no vuelva a aparecer en esta versión
    localStorage.setItem('portfolio_version', CURRENT_VERSION);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-step max-w-sm w-[calc(100%-3rem)]">
      <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-700 rounded-xl p-5 shadow-2xl shadow-blue-900/20 relative overflow-hidden">

        {/* Línea decorativa animada */}
        <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 w-full"></div>

        {/* Botón de cierre */}
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 text-slate-400 hover:text-slate-100 transition-colors p-1 rounded-md hover:bg-slate-800"
          aria-label="Close notification"
        >
          <X size={18} />
        </button>

        {/* Encabezado */}
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <Bell size={18} className="text-blue-400 animate-pulse" />
          </div>
          <h4 className="text-slate-100 font-cyber font-bold text-lg">
            {t('update.title')}
          </h4>
        </div>

        {/* Lista de novedades */}
        <div className="space-y-2 mb-5">
          <p className="text-slate-400 text-xs font-tech uppercase tracking-wider mb-3 border-b border-slate-700/50 pb-2">
            {t('update.whatsnew')} {CURRENT_VERSION}:
          </p>
          {updateNotes.map((note, index) => (
            <div key={index} className="flex items-start gap-2">
              <ChevronRight size={14} className="text-indigo-400 flex-shrink-0 mt-0.5" />
              <p className="text-slate-300 text-sm leading-tight">{note}</p>
            </div>
          ))}
        </div>

        {/* Botón de confirmación */}
        <button
          onClick={handleDismiss}
          className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-tech text-sm font-semibold transition-all active:scale-95 shadow-md shadow-blue-900/20"
        >
          {t('update.acknowledge')}
        </button>
      </div>
    </div>
  );
};

export default UpdateNotification;