import idb from "idb";
import uuidv4 from "uuid/v4";

const MOVIES = "movies";

export const dbPromise = idb.open("moviesIDB", 1, upgradeDB => {
  switch (upgradeDB.oldVersion) {
    case 0:
    case 1:
      console.log("Creating movies object store");
      const movieStore = upgradeDB.createObjectStore(MOVIES, {
        keyPath: "id"
      });
      const genreIndex = movieStore.createIndex("genres", "genre", {
        unique: false
      });
  }
});

export const movieStore = {
  set(value) {
    return dbPromise.then(db => {
      const _v = {
        id: uuidv4(),
        ...value
      };
      const tx = db.transaction(MOVIES, "readwrite");
      tx.objectStore(MOVIES).put(_v);
      console.log("Added: ", _v);
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
