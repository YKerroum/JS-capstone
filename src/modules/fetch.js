const displayMovie = (movie) => {
  const list = document.getElementById('movies');
  const newMovie = movie.map((movieId) => `
  <div class="card-container">
        <img class="poster" src="${movieId.image}" alt="" />
        <div class="name">
          <p>${movieId.name}</p>
          <div class="likes">
            <img id="${movieId.id}A" class="heart" src="ced5220738fcbc8b88e8.png" alt="" />
            <p class="text">5 Likes</p>
          </div>
        </div>
        <button id="item${movieId.id}" class="comment">Comments</button>
        <button class="reservation">Reservations</button>
      </div>
  `).join('');
  list.innerHTML = newMovie;
};

const fetchMovie = () => {
  const promises = [];
  for (let i = 1; i < 7; i++) {
    const api = `https://api.tvmaze.com/shows/${i}`;
    promises.push(fetch(api).then((res) => res.json()));
  }

  Promise.all(promises).then((results) => {
    const movie = results.map((data) => ({
      name: data.name,
      id: data.id,
      image: data.image.medium
    }))
    displayMovie(movie);
  })

};

export { fetchMovie, displayMovie };