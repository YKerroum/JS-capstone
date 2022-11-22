const list = document.getElementById('movies');
const movieCount = document.getElementById('movieNav');

const itemCounter = () => {
  movieCount.innerHTML = `Movies (${list.children.length})`;
};

export default itemCounter;