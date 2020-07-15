// Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
//BABY STEPS
//Criacao de variavel n
//Criacao de loop para adicionar * n vezes
//Criacao de loop para imprimir linha de * n vezes

let n = 5;
let linhaAsteriscos = "";
let asterisco = "*"

for (let i=0; i < n; i += 1) {
    linhaAsteriscos = linhaAsteriscos+ asterisco
}

console.log(linhaAsteriscos)
