const CACHE_NAME = 'belief-hospitals-v1';
const ASSETS = [
  '/',
  '/code.html',
  '/op.html',
  '/manifest.json',
  '/Belief-Hospitals.webp',
  '/PREGNENT.webp'
];

// Install Service Worker
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Fetch Assets
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});