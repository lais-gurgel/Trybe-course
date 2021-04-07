// https://youtu.be/cHvh-munKyA
// ex.1 com dois parametros
var soma = function (num1, num2) {
  return num1 + num2;
}

var soma = (num1, num2) => {
  return num1 + num2;
} // arrow functions

var soma = (num1, num2) => num1 + num2; //arrow functions

// ex.2 com 1 parametro 
var contaPalavras = function(frase) {
  return frase.split(' ').length;
}

var contaPalavras = (frase) => {
  return frase.split(' ').length;
} // arrow functions

var contaPalavras = frase => frase.split(' ').length; // arrow functions

// ex.3 sem parametros
var mostraSegundos = function () {
  return new Date().getSeconds();
}

var mostraSegundos = () => {
  return new Date().getSeconds(); // arrow functions
}

var mostraSegundos = () => new Date().getSeconds(); // arrow functions

//ex.4 objeto

var objetoUsuario = function(id, nome) {
  return {
    id: id,
    nome: nome, 
  };
};

var objetoUsuario = (id, nome) => {
  return {
    id: id,
    nome: nome,
  };
}; // arrow functions

var objetoUsuario = (id, nome) => ({id:id, nome:nome}); // arrow functions

// ex.5 
var itemsCarrinho = [
  { id: 1, nome: 'Item 1', preco: 1200},
  { id: 2, nome: 'Item 2', preco: 2500},
];

var total = itemsCarrinho.reduce((total, item) => {
  return total +_item.preco;
}, 0); // arrow functions

var total = itemsCarrinho.reduce((total, item) => total + item.preco, 0); // arrow functions



