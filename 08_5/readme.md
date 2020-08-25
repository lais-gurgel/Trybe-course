JavaScript ES6 - Higher Order Functions 

Revisão de HOFs

1- forEach
2- map
3- filter
4- reduce
5- some
6- every
7- extra: includes

// REVISÃO SINTAXE FUNÇÃO
// 1. Passando a função separada
function doSomething(element, index, array) {
  console.log(element);
}
array.forEach(doSomething() // retorna/executa a declaração da função
array.forEach(doSomething()) // passa o que a função retornar como return
// 2. Passando a função nomeada
array.forEach(function doSomething(element, index, array) {
  console.log(element);
}) 
// 3. Passando a função anonima
array.forEach(function(element, index, array) {
  console.log(element);
})
// 4. Passando a função como arrow function
// 4.1 Junto
array.forEach((element, index, array) => {
  console.log(element);
})
// 4.2 Separado
const doSomething = (element, index, array) => {
  console.log(element);
}
array.forEach(doSomething);


