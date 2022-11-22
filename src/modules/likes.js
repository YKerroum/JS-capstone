const getData = async (action) => {
  const interaction = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fMjDgeXVKzKMyQltWGlL/${action}`;
  const response = await fetch(interaction);
  const data = await response.json();

  return data;
};

const getLikes = (id) => {
  getData('likes').then((result) => console.log(result[id].likes));
}

export default getLikes;