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
A função find é utilizada para achar o primeiro elemento que satisfaça a condição passada. Então, a função que deverá ser passada precisa retornar true ou false. 
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find

3- funções Array.some e Array.every para testar se os elementos de um array satisfazem a uma condição;
As funções some e every são parecidas. A primeira retorna true se ao menos um elemento de um array satisfaz a uma condição. A segunda retorna true se todos os elementos de um array satisfazem a uma condição. O MDN contém explicações mais detalhadas sobre essas funções, além de exemplos.
https://developer.cdn.mozilla.net/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/some
https://developer.cdn.mozilla.net/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every

4- função Array.sort para ordenar arrays de acordo com algum critério.
A função sort permite ordenar um array de acordo com algum critério. Ela ordena sempre por ordem alfabética. E se o array possui algum elemento que não é uma string, a sort a ordena de acordo com a ordem alfabética dos códigos desse elemento na tabela de caracteres.
https://www.w3schools.com/jsref/jsref_sort.asp