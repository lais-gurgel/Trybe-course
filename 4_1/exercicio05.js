// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário: Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. Caso os ângulos estejam inválidos, o programa deve retornar uma mensagem de erro.

let angulo1 = 60;
let angulo2 = 80;
let angulo3 = 60;

let somaAngulos = angulo1 + angulo2 + angulo3

if (somaAngulos === 180) {
    console.log('Ângulos válidos: é um triângulo!')
} else {
    console.log('Ângulos inválidos')
}