const Joke = require('../models/Joke');

const listJoke = async (_req, res) => {
  const jokeObj = await Joke.getJoke();
  const { joke, category } = jokeObj;

  res.status(200).render('jokeView', { joke, category });
};

module.exports = {
  listJoke,
};
