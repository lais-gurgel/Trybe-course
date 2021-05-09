const express = require('express');

const categoriesController = require('./controllers/CategoriesController');
const jokeController = require('./controllers/JokeController');

const app = express();

app.use(express.json());

app.set('view engine', 'ejs')

app.set('views', './views');

app.get('/', categoriesController.listCategories);

app.get('/jokes', jokeController.listJoke);

app.get('/jokes/:category', jokeController.listJokeByCategory);

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});