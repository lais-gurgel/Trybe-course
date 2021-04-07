const express = require('express');
const app = express();

app.use(express.json()); // Usar somente quando usar o request.body ou body-parser (transformação para json)

// Atividade 1:
// Rota: /login
// Objetivo: Receber uma requisição que envie email/senha e receba um token como resposta. O formato desse token deve ser uma string aleatória com 12 caracteres. O email recebido deve ter o formato email@mail.com e a senha deve conter no mínimo 4 caracteres e no máximo 8, todos números. Caso algum desses campos seja enviado em formato incorreto, deve-se retornar uma mensagem de erro email or password is incorrect. e seu devido status code.
// const emailFormat = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/.test(email);


// Atividade 3:
// Rotas: /posts/:id e /posts
// Objetivo: Deve receber uma requisição com o param id e verificar a existência do post com aquele id . 
// Caso exista, retorne os dados daquele post. Caso não exista, retorne um status de erro com a mensagem id not found. . 
// A rota /posts deve trazer todos os posts cadastrados.
const posts = require('./posts');

app.get('/posts/:id', (request, response) => {
  const { id } = request.params;
  const postRequired = posts.find((post) => post.id === parseInt(id));
  if (!postRequired) {
    return response.status(404).json({ message: 'id not found'});  
  }
  response.json(postRequired); // send é equivalente, podendo retornar outros tipos de dados como HTML
});

app.get('/posts', (_request, response) => {
  response.json(posts); // send é equivalente, podendo retornar outros tipos de dados como HTML
})

// Atividade 4
// Rota: /user/:name
// Objetivo: Deve validar se o usuário existe e, caso exista, deve retornar os comentários feitos por ele. Caso não exista, deve retornar um status de erro com uma mensagem user not found. 
const users = require('./users');
app.get('/user/:name', (request, response) => {
  const { name } = request.params;
  const userRequired = users.find((user) => user.user === name);
  if (!userRequired) {
    return response.status(404).json({ message: 'user not found'});
  }
  response.json(userRequired);
});

app.listen(3000, () => console.log('Servidor iniciado!'));