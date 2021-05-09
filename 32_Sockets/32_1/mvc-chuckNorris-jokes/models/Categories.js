const axios = require('axios');

const ENDPOINT = 'https://api.chucknorris.io/jokes/categories'

const api = axios
  .get(ENDPOINT)
  .then((response) => {
    const { data } = response
    return data;
  })
  .catch((error) => console.log(error));

const getCategories = async () => {
  const categories = await api;
  return categories;
};

module.exports = {
  getCategories,
};