const getData = async (action) => {
  const interaction = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${process.env.API_KEY}/${action}`;
  const response = await fetch(interaction);
  const data = await response.json();

  return data;
};

const postData = async (id) => {
  const settings = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: `item${id}`,
    }),
  };
  try {
    const fetchResponse = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${process.env.API_KEY}/likes`, settings);
    const data = await fetchResponse.json();
    return data;
  } catch (e) {
    return e;
  }
};

const postComments = async (id, user, comment) => {
  const settings = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: `item${id}`,
      username: user,
      comment,
    }),
  };

  try {
    const fetchResponse = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${process.env.API_KEY}/comments`, settings);
    const data = await fetchResponse.json();
    return data;
  } catch (e) {
    return e;
  }
};

export { getData, postData, postComments };