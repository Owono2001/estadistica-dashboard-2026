// src/components/ServiceWorkerRegistry.tsx
"use client";

import { useEffect } from "react";

export default function ServiceWorkerRegistry() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) =>
            console.log('🚀 Service Worker (GE en Datos v1.0.0) activo. Scope:', registration.scope)
          )
          .catch((error) =>
            console.error('⚠️ Error al registrar el Service Worker:', error)
          );
      });
    }
  }, []);

  return null;
}