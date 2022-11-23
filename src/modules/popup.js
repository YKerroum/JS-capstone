import { getData } from './likes.js';

const list = document.getElementById('movies');
const displayPopUp = (movieId) => {
  const { image } = movieId;
  const comments=[];
  let popComments='';
  let popUp='';
  getData(`comments?item_id=item${movieId.id}`).then((result) => { comments.push(...result);
  comments.forEach((comment) => {
  popComments += `<p>${comment.creation_date} ${comment.username} ${comment.comment}</p>`;
  });
  
  
   })
   .catch(()=> {
   
  
   })
   .finally(() => {
   popUp += `
<div class="popup">
  <div>
    <img class="poster2" src="${image}" alt="" />
    <img class="xbutton" src="b17907ef6e75236830e9.png" alt="" />
  </div>
  <h2>${movieId.name}</h2>
  <p>${movieId.genres}</p>
  <h3 id="commentCounter">Comments(${comments.length})</h3>
  <div id="popComment">${popComments}</div>
  
</div>
  `;
  list.innerHTML = popUp + list.innerHTML;
   });
  
};

export default displayPopUp;