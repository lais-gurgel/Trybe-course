// Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um triangulo feito de asteriscos de base e lateral esquerda de tamanho n.
//BABY STEPS
// Adicao de variavel n, variavel asterisco
// Criacao de loop para adicionar "*" n vezes
// Criacao de loop para imprimir "*" a cada simbolo adicionado

let n = 5;
let linhaAsteriscos = "";
let asterisco = "*";

for (let i=0; i < n; i += 1) {
    linhaAsteriscos = linhaAsteriscos + asterisco;
    console.log(linhaAsteriscos)
}
