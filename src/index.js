import './index.css';
import { fetchMovie, displayMovie } from './modules/fetch.js';
import displayPopUp from './modules/popup.js';
/* eslint-disable  no-unused-vars */
import { heart } from './images/heart.png';
import { xbutton } from './images/xbutton.png';
import { postData } from './modules/likes.js';
import itemCounter from './modules/items.js';

const list = document.getElementById('movies');
const movies = [];
const data = () => {
  fetchMovie().then((results) => {
    const movie = results.map((data) => ({
      name: data.name,
      id: data.id,
      image: data.image.medium,
      genres: data.genres,
    }));
    movies.push(...movie);
    displayMovie(movie);
    itemCounter();
  });
};

data();

list.addEventListener('click', (e) => {
  if (e.target.classList.contains('comment')) {
    const movieId = parseInt(e.target.id.slice(-1), 10);
    displayPopUp(movies.find((m) => m.id === movieId));
  }
  if (e.target.classList.contains('xbutton')) {
    list.firstElementChild.remove();
  }
  if (e.target.classList.contains('heart')) {
    postData(e.target.id.charAt(0));
    displayMovie(movies);
  }
});