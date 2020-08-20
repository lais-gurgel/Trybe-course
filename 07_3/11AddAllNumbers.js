const assert = require('assert');
// Escreva a função addAllnumbers para passar nos testes já implementados.
const addAllNumbers = (array) => {
  let sum = 0;
  for (const number in array) {
    sum += array[number];
  }
  return sum;
};
// Escreva a função addAllnumbers entre os comentários

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllNumbers(numbers);

assert.strictEqual(typeof addAllNumbers, 'function');
assert.strictEqual(output, expected);