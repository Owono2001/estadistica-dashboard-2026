// public/sw.js
const CACHE_NAME = 'pedro-portfolio-v32'; // 👈 IMPORTANTE: Subimos a v22 para forzar la actualización

// Archivos estáticos base
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/favicon.ico',
  '/manifest.json',
  '/images/1bem-qr.png',
  '/audio/eg-anthem.mp3',
  '/images/apu_logo.webp',
  '/images/pics1.jpeg'
];

self.addEventListener('install', (event) => {
  self.skipWaiting(); // Fuerza a que el nuevo Service Worker tome el control ya
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('📦 Precaching archivos estáticos base...');
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

// EL CORAZÓN DEL MODO OFFLINE (Caché Dinámico Agresivo)
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  if (!event.request.url.startsWith('http')) return;
  if (event.request.url.includes('/_vercel/')) return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // 1. Si el archivo (JS, CSS, Imagen) ya está guardado, lo devolvemos INMEDIATAMENTE.
      if (cachedResponse) {
        return cachedResponse;
      }

      // 2. Si no lo tenemos, vamos a buscarlo a internet
      return fetch(event.request).then((networkResponse) => {
        // Asegurarnos de que la respuesta es válida
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }

        // 3. CACHÉ DINÁMICO: Guardamos una copia del archivo nuevo (ej. main.js de React) 
        // para que la próxima vez que no haya internet, el paso 1 lo encuentre.
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return networkResponse;
      }).catch(() => {
        // 4. MODO SUPERVIVENCIA OFFLINE: Si falla la red y es una petición de navegación, sirve el HTML base.
        if (event.request.mode === 'navigate') {
          return caches.match('/index.html');
        }
      });
    })
  );
});