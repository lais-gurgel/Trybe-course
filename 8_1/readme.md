JavaScript ES6 - Higher Order Functions - forEach, find, some, every, sort

1- função Array.forEach para iterar sobre todos os elementos de um array;
ESTRUTURA
  arrayOfValues.forEach((element) => {
    console.log('Cada elemento do array:', element);
  });

PARTES
  - arrayOfValues - Nome do array que será percorrido;
  - .forEach - A HOF, pode ser, .find, .some, .every;
  - element - Valor do elemento do array;
  - (element) => {console.log('Cada elemento do array:', element); - função a ser executada, pode ser passada igual ao terceiro exemplo do conteúdo com a função verifyNote.

2- função Array.find para encontrar o primeiro elemento de um array que satisfaça a uma condição;

3- funções Array.some e Array.every para testar se os elementos de um array satisfazem a uma condição;

4- função Array.sort para ordenar arrays de acordo com algum critério.