const CACHE='fox-treino-v3-bahia';
const ASSETS=[
  './',
  './index.html',
  './styles.css?v=3',
  './app.js?v=3',
  './manifest.webmanifest?v=3',
  './profile.jpg?v=3',
  './share.jpg?v=3',
  './icon-180.png?v=3',
  './icon-512.jpg?v=3'
];

self.addEventListener('install',event=>{
  event.waitUntil(
    caches.open(CACHE)
      .then(cache=>cache.addAll(ASSETS))
      .then(()=>self.skipWaiting())
  );
});

self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET') return;
  event.respondWith(
    caches.match(event.request).then(cached=>{
      const network=fetch(event.request)
        .then(response=>{
          if(response && response.ok){
            const copy=response.clone();
            caches.open(CACHE).then(cache=>cache.put(event.request,copy));
          }
          return response;
        })
        .catch(()=>cached);
      return cached || network;
    })
  );
});
