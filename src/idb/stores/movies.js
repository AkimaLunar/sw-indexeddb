import { dbPromise } from "../index";

export const MOVIES = "movies";

export const movieStore = {
  set(value) {
    return dbPromise.then(db => {
      const tx = db.transaction(MOVIES, "readwrite");
      tx.objectStore(MOVIES).put(value);
      return tx.complete;
    });
  },
  count() {
    return dbPromise.then(db => {
      return db
        .transaction(MOVIES)
        .objectStore(MOVIES)
        .count();
    });
  }
};
