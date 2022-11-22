import './index.css';
import { fetchMovie, displayMovie } from './modules/fetch.js';
import displayPopUp from './modules/popup.js';
/* eslint-disable  no-unused-vars */
import { heart } from './images/heart.png';
import { xbutton } from './images/xbutton.png';

const list = document.getElementById('movies');
const movies = [];
fetchMovie().then((results) => {
  const movie = results.map((data) => ({
    name: data.name,
    id: data.id,
    image: data.image.medium,
    genres: data.genres,
  }));
  movies.push(movie);
  displayMovie(movie);
});

list.addEventListener('click', (e) => {
//   e.preventDefault();
  if (e.target.classList.contains('comment')) {
    const movieId = e.target.id.slice(-1);

    displayPopUp(movies[0].find((m) => m.id === movieId));
  }
  if (e.target.classList.contains('heart')) {
    list.firstElementChild.remove();
  }
});
