const CACHE_NAME = "My Notes-cache-v1";

const urlsToCache = [
  "/",
  "/index.html",
  "/offline.html",

  // HTML
  "/main/books.html",
  "/main/books_shelf.html",
  "/main/books_detail.html",
  "/main/memo.html",
  "/main/view.html",
  "/main/view_detail.html",

  // CSS
  "/css/style.css",
  "/css/books.css",
  "/css/books_shelf.css",
  "/css/books_detail.css",
  "/css/memo.css",
  "/css/view.css",
  "/css/detail.css",

  // JS
  "/move/script.js",
  "/move/books.js",
  "/move/books_shelf.js",
  "/move/books_detail.js",
  "/move/memo.js",
  "/move/view.js",
  "/move/detail.js",

  // Icons
  "/images/icon-192.png",
  "/images/icon-512.png",
  "/images/icon-180.png"
];

// インストール（キャッシュ作成）
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

// 有効化（古いキャッシュ削除）
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// fetch（オフライン対応）
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return (
        response ||
        fetch(event.request).catch(() => caches.match("/offline.html"))
      );
    })
  );
});