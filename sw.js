const cacheName = 'gautam-scoreboard-v1';
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(c => c.addAll([
      '.',
      'index.html',
      'manifest.json',
      'sw.js',
      'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js'
    ]))
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
