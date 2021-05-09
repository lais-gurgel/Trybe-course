const axios = require('axios');

const ENDPOINT_RANDOM_JOKE = 'https://api.chucknorris.io/jokes/random'

const api = axios
  .get(ENDPOINT_RANDOM_JOKE)
  .then((response) => {
    const { data } = response
    return data;
  })
  .catch((error) => console.log(error));

const getJoke = async () => {
  const joke = await api;
  return joke;
};

const getJokeByCategory = async () => {
  const joke = await api;
  return joke;
}

module.exports = {
  getJoke,
  getJokeByCategory,
};