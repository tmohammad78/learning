/// each major change, required to add version to upate
const version = 2.1; 
const cacheName = `testing-${version}`
const urlsToCache = [
    '/web/index.html',
    '/web/css/style.css',
    '/web/images/image1.webp',
    '/web/images/image2.webp',
    '/web/images/image3.webp',
]


self.addEventListener('install', onInstall)
self.addEventListener('activate', onActivate)
self.addEventListener('fetch', onFetch)
self.addEventListener("push", onEvent)


main().catch(console.error)

////

async function main() {
    console.log(`Service Worker (${version}) is starting...`)
}

async function onInstall(event) {
    self.skipWaiting()
    console.log(`Service Worker (${version}) installed...`)
    event.waitUntil(caches.open(cacheName).then( cache => {
        cache.addAll(urlsToCache)
    }))
}

function onActivate(event) {
    event.waitUntil(handleActivation())
}

async function handleActivation() {
   await self.clients.claim()
   const cacheAllowList = [cacheName]
   console.log(`Service Worker (${version}) activated...`)

   return caches.keys().then((keys) => {
        return Promise.all(keys.map((key) => {
            if (!cacheAllowList.includes(key)) {
                return caches.delete(key);
            }
        }))
    })
}

async function onFetch(event) {
    /// cache first
    // event.respondWith(
    //     caches.match(event.request)  // searching in the cache
    //         .then( response => {
    //             if (response) {
    //                 // The request is in the cache 
    //                 return response; // cache hit
    //             } else {
    //                 // We need to go to the network  
    //                 return fetch(event.request);  // cache miss
    //             }
    //         })
    // );
    event.respondWith(
        caches.match(event.request)
        .then(cachedResponse => {
            const fetchPromise = fetch(event.request).then(
                networkResponse => {
                   caches.open(cacheName).then( cache => {
                       cache.put(event.request, networkResponse.clone());
                       return networkResponse;
                   });
               });
            console.log(cachedResponse,'cachedResponse')
           return cachedResponse || fetchPromise;
        })
    )
}

function onEvent(e) {
    const title = "New Notification"
    const options = {
        body: "You have a new update"
    }
    e.waitUntil(self.registration.showNotification(title, options))
}