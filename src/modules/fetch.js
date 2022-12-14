import { likesCounter } from './likesCounter.js';

const displayMovie = (movie) => {
  const list = document.getElementById('movies');
  const newMovie = movie.map((movieId) => `
  <div class="card-container">
        <img class="poster" src="${movieId.image}" alt="" />
        <div class="name">
          <p>${movieId.name}</p>
          <div class="likes">
            <img id="${movieId.id}A" class="heart" src="ced5220738fcbc8b88e8.png" alt="" />
            <p id="${movieId.id}" class="text">Likes</p>
          </div>
        </div>
        <button id="item${movieId.id}" class="comment">Comments</button>
        <button class="reservation">Reservations</button>
      </div>
  `).join('');
  list.innerHTML = newMovie;
  likesCounter();
};

const fetchMovie = async () => {
  const promises = [];
  for (let i = 1; i < 7; i += 1) {
    const api = `https://api.tvmaze.com/shows/${i}`;
    // eslint-disable-next-line no-await-in-loop
    const data = await fetch(api).then((res) => res.json());
    promises.push(data);
  }
  return promises;
};

export { fetchMovie, displayMovie };