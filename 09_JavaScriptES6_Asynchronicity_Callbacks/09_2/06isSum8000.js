// Agora, um passo para trás: vamos fazer, passo a passo, uma Promise. Primeiramente, instancie uma Promise. Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado. Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um then e um catch à Promise com qualquer coisa dentro só para que o código funcione.
// Tente usar Higher Order Functions! Lembre-se de que tanto uma quanto a outra recebem, como parâmetro, funções!

const fetch = require('node-fetch');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isSum8000() {
  return new Promise((resolve, reject) => {
    const arrNumbers = [];
    
    for (let index = 0; index <= 10; index++) {
      const number = getRandomInt(1, 50);
      arrNumbers.push(Math.pow(number, 2));
    }
    const sum = arrNumbers.reduce((acc, curr) => acc + curr);
    
    if (sum < 8000) {
      resolve(sum);
    } else {
      reject(new Error('Failed'));
    }
  })
}

isSum8000()
  .then((result) => {
    const divisors = [2, 3, 5, 10];
    const division = divisors.map((divisor) => result / divisor);
    console.log(division);
    return division;
  })
  .then((divisionResult) => {
    const sumOfDivision = divisionResult.reduce((acc, curr) => acc + curr);
    console.log(sumOfDivision);
  })
  .catch((err) => {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  })

// Quando a promise for resolvida com sucesso, retorne o resultado da divisão desse número por 2, 3, 5 e 10 em um array.
// Quando a Promise for rejeitada, imprima, via console.log, a frase "É mais de oito mil! Essa promise deve estar quebrada!"
// Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.
