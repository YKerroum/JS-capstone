const list = document.getElementById('movies');
const displayPopUp = (movieId) => {
  const image = movieId.image;
  
  const popUp = `
<div class="popup">
  <div>
    <img class="poster2" src="${image}" alt="" />
    <img class="heart xbutton" src="b17907ef6e75236830e9.png" alt="" />
  </div>
  <h2>${movieId.name}</h2>
  <p>${movieId.genres}</p>
 
  
</div>
  `;
  
  list.innerHTML = popUp + list.innerHTML;
}
const closePopUp = () => {
  const popup = document.querySelector('.popup');
  popup.parentElement.removeChild(popup);
}


export {displayPopUp, closePopUp};