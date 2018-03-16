import idb from 'idb';
import uuidv4 from 'uuid/v4';

const dbPromise = idb.open('movies-store', 1, (upgradeDB) => {
  switch (upgradeDB.oldVersion) {
    case 0:
    case 1:
      console.log('Creating movies object store');
      upgradeDB.createObjectStore('movies', { keyPath: 'id' })
  }
});

// TODO: Replace `movies` with db write
let movies;

fetch('https://elated-repair.glitch.me/api/movies')
  .then(response => {
    if (!response.ok) {
      console.log('Failed to retrieve data');
    }
    return response;
  })
  .then(response => response.json())
  .then(data => {
    movies = data
    console.log(movies[0])

    data.map(movie => {

    })
  })
  .catch(error => console.log(error));
