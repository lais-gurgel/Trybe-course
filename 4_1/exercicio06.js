// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// - Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// - Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
// - Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop -> diagonals

let peçaXadrez = 'Torre';

switch (peçaXadrez.toLowerCase()) {
    case 'peão':
      console.log('Peão - uma casa para frente, pode atacar na diagonal, pode andar duas casas no primeiro movimento.')
      break;
    case 'torre':
        console.log('Torre - percorre todo o tabuleiro, na vertical ou horizontal.')
        break;
    case 'cavalo':
        console.log('Cavalo - salta duas casas e se posiciona à esquerda ou direita da segunda casa.')
        break;
    case 'bispo':
        console.log('Bispo - percorre todo o tabuleiro, na diagonal.')
        break;
    case 'rainha':
        console.log('Rainha - pode movimentar-se na horizontal, vertical e diagonal, quantas casas estiverem disponíveis.')
        break;
    case 'rei':
        console.log('Rei - uma casa em qualquer direção.')
        break;
    default:
      console.log('Atenção! Peça inválida.')
      break;
  }
