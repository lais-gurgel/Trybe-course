function secondThirdSmallest(array) {
  const numbers = array;
  const results = [];
  numbers.sort(function (x, y) {
    return (x - y);
  });
  results.push(numbers[1], numbers[2]);
  return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];

// Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

const assert = require('assert');

assert.deepStrictEqual(typeof secondThirdSmallest, 'function');
assert.deepStrictEqual(secondThirdSmallest(parameter), result);
// assert.deepStrictEqual(parameter, [4, 10, 32, 9, 21, 90, 5, 11, 8, 6]);