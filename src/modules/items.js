const itemCounter = () => {
  const list = document.getElementById('movies');
  const movieCount = document.getElementById('movieNav');
  movieCount.innerHTML = `Movies (${list.children.length})`;
};

export default itemCounter;