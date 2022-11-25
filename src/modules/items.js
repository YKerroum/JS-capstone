const itemCounter = () => {
  const list = document.getElementById('movies');
  const movieCount = document.getElementById('movieNav');
  const movieCountMobile = document.getElementById('mobileCount');
  movieCount.innerHTML = `Movies (${list.children.length})`;
  movieCountMobile.innerHTML = `Movies (${list.children.length})`;
};

export default itemCounter;