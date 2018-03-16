self.addEventListener('install', function (event) {
  // New service worker to activate immediately
  self.skipWaiting();

  console.log('ServiceWorker installing...', event);
  // Caching static assets
})

self.addEventListener('activate', function (event) {
  console.log('ServiceWorker activated!', event);
  // Update caches
})

self.addEventListener('fetch', function (event) {
  console.log('Fetching: ', event.request.url)
})
