// Escreva um programa que defina três números em variáveis no seu começo e retorne true se uma das três for par. Caso contrário, ele retorna false.
// Bonus: use somente um if.

let a = 1;
let b = 2;
let c = 3;

if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0 ) {
    console.log('true')
} else {
    console.log('false')
}

//ou 

let result = false;

if ((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
    result = true;
  };
  console.log(result);