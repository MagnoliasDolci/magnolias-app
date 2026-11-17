// Service worker mínimo: guarda la "cáscara" (página, íconos, configuración) para que la app abra rápido.
// Los datos NO se guardan aquí: siempre se leen y escriben en vivo en el ERP de Google.
var VERSION = 'magnolias-v1';
var CASCARA = ['./', 'index.html', 'config.js', 'manifest.webmanifest', 'iconos/iso_crema.png',
               'iconos/icon-192.png', 'iconos/icon-512.png', 'iconos/apple-touch-icon.png', 'iconos/favicon-32.png'];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) { return c.addAll(CASCARA); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
// Primero la red (así un cambio en config.js se ve al instante); si no hay internet, lo guardado.
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== self.location.origin) return;
  e.respondWith(fetch(e.request).then(function (r) {
    var copia = r.clone();
    caches.open(VERSION).then(function (c) { c.put(e.request, copia); });
    return r;
  }).catch(function () { return caches.match(e.request, { ignoreSearch: true }); }));
});
