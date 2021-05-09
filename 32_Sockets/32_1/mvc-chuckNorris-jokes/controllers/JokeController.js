const Joke = require('../models/Joke');

const listJoke = async (req, res) => {
  const joke = await Joke.getJoke();
  const { value } = joke;

  res.render('joke', { value });
}

const listJokeByCategory = async (req, res) => {
  const joke = await Joke.getJokeByCategory();
  const { value } = joke;
  const { category } = req.params;
  console.log(category);
  
  res.render('joke', { value });
}

module.exports = {
  listJoke,
  listJokeByCategory,
}