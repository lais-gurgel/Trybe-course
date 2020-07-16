//Adicione funções para o funcionamento de um carro:

let statusCarro = "desligado";
let aceleracao = 0;
let rotacaoDoVolante = 0;

//instruções de ligar e desligar
function ligarDesligar() {
    if (statusCarro === "desligado") {
        statusCarro = "ligado";
    } else {
        statusCarro = "desligado";
    }

    return statusCarro;
}

// instruções de acelerar

function acelerar(incremento) {
    aceleracao = aceleracao + incremento;

    return "Acelerando a " + aceleracao + "m/s²";
}

// instruções de frear

function frear(decremento) {
    aceleracao = aceleracao - decremento;

    return "Desacelerando para " + aceleracao + "m/s²";
}

// instruções de direção

function girarVolante(anguloRotacao) {
    rotacaoDoVolante = anguloRotacao;

    return rotacaoDoVolante + "º";
}
