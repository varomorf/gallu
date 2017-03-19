/**
 * Created by Alvaro on 18/03/2017.
 */

// use a cacheName for cache versioning
var CACHE_NAME = 'static-v0.0.1';
var urlsToCache = [
  './',
  './js/main.js',
  './js/build/ObjectivesList.js',
  './js/vendor/react.min.js',
  './js/vendor/react-com.min.js'
];

// during the install phase you usually want to cache static assets
self.addEventListener('install', function(event) {
  // once the SW is installed, go ahead and fetch the resources to make this work offline
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log('Opening cache for ' + CACHE_NAME);
      return cache.addAll(urlsToCache).then(function() {
        self.skipWaiting();
      });
    })
  );
});

// when the browser fetches a url
self.addEventListener('fetch', function(event) {
  // either respond with the cached object or go ahead and fetch the actual url
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        // retrieve from cache
        return response;
      }
      // fetch as normal
      return fetch(event.request);
    })
  );
});