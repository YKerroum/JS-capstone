const commentCounter = () => {
  const commentElement = document.querySelector('#popComment');
  const commentHeader = document.querySelector('#commentCounter');
  commentHeader.innerHTML = `Comment(${commentElement.childElementCount})`;
};

export default commentCounter;