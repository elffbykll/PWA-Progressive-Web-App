self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("pwacache").then(cache => {
            return cache.addAll(["./","./index.css","./worldwide.png","./meal.html","./holiday.html","./hpack1.JPG",
            "./hpack2.JPG","./hpack3.JPG","./taj.jpg","./hpack1.JPG","./temple.png","./tower.png","./meal.JPG","./home.jpg"]);
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response =>{
            return response || fetch(e.request);
        })
    );
  });