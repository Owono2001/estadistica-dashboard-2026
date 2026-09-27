"use client";

import { useEffect } from "react";

export default function ServiceWorkerRegistry() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => console.log('🚀 Service Worker V4 activado. Scope:', registration.scope))
          .catch(error => console.error('⚠️ Error al registrar el Service Worker:', error));
      });
    }
  }, []);

  return null;
}