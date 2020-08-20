const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 10 32 47 50 52 47 103
  return result + number;
  };
const sumNumbers = numbers.reduce(getSum, 10); // Parâmetro adicionado ao reduce: o "0"
console.log(sumNumbers); // 123

// Agora o resultado mudou para 123, e o primeiro número impresso foi o 10. Entendeu? Ao adicionar esse segundo parâmetro você está colocando um valor inicial na variável result, ou seja, no acumulador. Ele é o valor inicial do reduce. Caso nenhum parâmetro seja passado, o seu valor inicial será a primeira posição do array.