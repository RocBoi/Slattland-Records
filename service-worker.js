const CACHE_NAME = 'slattland-cache-v1';

const ASSETS_TO_CACHE = [
  '/', // assuming index.html is served at root
  '/Slattland-Records/index.html',
  '/Slattland-Records/manifest.json',
  '/Slattland-Records/robots.txt',
  '/Slattland-Records/sitemap.xml',
  '/Slattland-Records/script.js',
  '/Slattland-Records/style.css',
  '/Slattland-Records/Picsart_25-04-30_03-58-16-923.jpg',
  '/Slattland-Records/Slattland-logo 192x192.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => 
      Promise.all(
        cacheNames.filter(name => name !== CACHE_NAME)
                  .map(name => caches.delete(name))
      )
    )
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});
