const express = require('express');
const app = express();
const port = 3000;

const author = require('./models/author');

app.get('/authors', async (request, response) => {
  const authors = await author.getAll();
  
  response.status(200).json(authors);
})

app.listen(port, () => console.log('port 3000'))