// Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um triangulo feito de asteriscos de base e lateral DIREITA de tamanho n.
// BABY STEPS
// Adição de variaveis n, linha para impressaowq e asterisco
// Adição de loop com impressão de linha com espaço e asteriscos
// Adição de loop com repetição de impressao de linha

let n = 5;
let linha = '';
let asterisco = '*';
let posicaoColunaInicial = n;

for (let i = 0; i <= n; i++) {
    for (let colunaAtual = 0; colunaAtual < n; colunaAtual++) {
        if (colunaAtual < posicaoColunaInicial) {
            linha += "";
        } else {
            linha += asterisco;
        }
    }

    console.log(linha);
    linha = "";
    posicaoColunaInicial = posicaoColunaInicial - 1;
}
