import { movieStore } from "./idb";
import { fetchData } from "./idb/fetchData";

self.addEventListener("install", function(event) {
  // New service worker to activate immediately
  self.skipWaiting();

  console.log("ServiceWorker installing...", event);
  // Caching data on registration
  fetchData()
    .then(response => {
      if (!response.ok) {
        console.log("Failed to retrieve data");
      }
      return response;
    })
    .then(response => response.json())
    .then(data => {
      console.log("Adding movies...");
      return Promise.all(data.map(movie => movieStore.set(movie)));
    })
    .catch(error => {
      console.log(error);
    })
    .then(() => console.log("All movies added!"));
});

self.addEventListener("activate", function(event) {
  console.log("ServiceWorker activated!", event);
  console.log(movieStore.count());
});

self.addEventListener("fetch", function(event) {
  console.log("Fetching: ", event.request.url);
});
