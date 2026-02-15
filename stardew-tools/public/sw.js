const CACHE_NAME = "stardew-tools-v4";
const OFFLINE_FALLBACK_URL = "/";
const PRECACHE_URLS = [
  "/",
  "/calculator",
  "/secret-notes",
  "/manifest.json",
  "/fonts/geist-latin.woff2",
  "/fonts/geist-latin-ext.woff2",
  "/fonts/geist-mono-latin.woff2",
  "/fonts/geist-mono-latin-ext.woff2",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/notes/secret-note-01.svg",
  "/notes/secret-note-02.svg",
  "/notes/secret-note-03.svg",
  "/notes/secret-note-04.svg",
  "/notes/secret-note-05.svg",
  "/notes/secret-note-06.svg",
  "/notes/secret-note-07.svg",
  "/notes/secret-note-08.svg",
  "/notes/secret-note-09.svg",
  "/notes/secret-note-10.svg",
  "/notes/secret-note-11.svg",
  "/notes/secret-note-12.svg",
  "/notes/secret-note-13.svg",
  "/notes/secret-note-14.svg",
  "/notes/secret-note-15.svg",
  "/notes/secret-note-16.svg",
  "/notes/secret-note-17.svg",
  "/notes/secret-note-18.svg",
  "/notes/secret-note-19.svg",
  "/notes/secret-note-20.svg",
  "/notes/secret-note-21.svg",
  "/notes/secret-note-22.svg",
  "/notes/secret-note-23.svg",
  "/notes/secret-note-24.svg",
  "/notes/secret-note-25.svg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);

      try {
        await cache.addAll(PRECACHE_URLS);
      } catch {
        return;
      }
    })(),
  );

  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      const staleKeys = keys.filter((key) => key !== CACHE_NAME);

      await Promise.all(staleKeys.map((key) => caches.delete(key)));
      await self.clients.claim();
    })(),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.method !== "GET") {
    return;
  }

  const requestUrl = new URL(request.url);

  if (requestUrl.origin !== self.location.origin) {
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(
      (async () => {
        const cache = await caches.open(CACHE_NAME);

        try {
          const networkResponse = await fetch(request);
          cache.put(request, networkResponse.clone());

          return networkResponse;
        } catch {
          const cachedResponse = await cache.match(request);

          if (cachedResponse) {
            return cachedResponse;
          }

          const fallbackResponse = await cache.match(OFFLINE_FALLBACK_URL);

          if (fallbackResponse) {
            return fallbackResponse;
          }

          return Response.error();
        }
      })(),
    );

    return;
  }

  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const cachedResponse = await cache.match(request);

      if (cachedResponse) {
        return cachedResponse;
      }

      try {
        const networkResponse = await fetch(request);

        if (networkResponse.ok) {
          cache.put(request, networkResponse.clone());
        }

        return networkResponse;
      } catch {
        return Response.error();
      }
    })(),
  );
});
