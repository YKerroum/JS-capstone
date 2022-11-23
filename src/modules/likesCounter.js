import { getData } from './likes.js';

const likesCounter = () => {
  const parag = document.querySelectorAll('.text');
  parag.forEach((paragraph) => {
    const like = ' Likes';
    getData('likes').then((result) => { paragraph.textContent = (result[paragraph.id - 1].likes) + like; });
  });
};

const updateLike = (id) => {
  const parag = document.getElementById(id);
  const likes = parseInt(parag.textContent, 10) + 1;
  parag.innerHTML = `${likes} Likes`;
};

export { likesCounter, updateLike };