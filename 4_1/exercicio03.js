// Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

let a = 9
let b = 11
let c = 8

if (a>b && a>c) {
    console.log('O maior número é: ' + (a));
} else if (b>a && b>c) {
    console.log('O maior número é: ' + (b));
} else {
    console.log('O maior número é: ' + (c));
};