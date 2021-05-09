const axios = require('axios');

const ENDPOINT = 'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single'

const api = axios
  .get(ENDPOINT)
  .then((response) => {
    const { data } = response
    return data;
  })
  .catch((error) => console.log(error));

const getJoke = async () => {
  const joke = await api;
  return joke;
};

module.exports = {
  getJoke,
};