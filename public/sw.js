// public/sw.js
const CACHE_NAME = 'ge-en-datos-v1.0.0'; // 👈 Debe coincidir con CURRENT_VERSION en UpdateNotification.tsx

// Rutas y archivos estáticos reales de este proyecto (portfolio + panel INEGE)
const STATIC_ASSETS = [
  '/',
  '/dashboard',
  '/favicon.ico',
  '/manifest.json',
];

self.addEventListener('install', (event) => {
  self.skipWaiting(); // Fuerza a que el nuevo Service Worker tome el control ya
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('📦 Precacheando rutas base del panel GE en Datos...');
      return cache.addAll(STATIC_ASSETS);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('🧹 Eliminando caché antigua:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Caché dinámico agresivo: sirve desde caché primero, y guarda copia de lo nuevo
// (JS/CSS de Next.js, chunks, etc.) para que la próxima carga sin red funcione.
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  if (!event.request.url.startsWith('http')) return;
  if (event.request.url.includes('/_vercel/')) return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // 1. Si ya está en caché (JS, CSS, imagen, ruta), se sirve al instante
      if (cachedResponse) {
        return cachedResponse;
      }

      // 2. Si no, se busca en la red
      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }

        // 3. Se guarda una copia para futuras visitas sin conexión
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return networkResponse;
      }).catch(() => {
        // 4. Modo offline: si es una navegación, sirve el panel del dashboard cacheado
        if (event.request.mode === 'navigate') {
          return caches.match('/dashboard');
        }
      });
    })
  );
});