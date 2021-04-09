const express = require('express');

const jokeController = require('./controllers/JokeController')

const app = express();

app.use(express.json());

app.set('view engine', 'ejs')

app.set('views', './views');

app.get('/', jokeController.listJoke);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});