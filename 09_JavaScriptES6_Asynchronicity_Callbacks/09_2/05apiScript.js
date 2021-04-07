// const fetch = require('node-fetch');

const API_URL = 'https://icanhazdadjoke.com/';
const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

const fetchJoke = () => {
  fetch(API_URL, myObject)
  .then(response => response.json())
  .then((data) => {
    const joke = data.joke
    console.log(joke)
  })
};

// const showJoke = assync () => {
//   const h2 = document.getElementById('jokeContainer');
//   const joke = await fetchJoke(API_URL);

//   h2.innerText = joke;
// }

window.onload = () => fetchJoke();