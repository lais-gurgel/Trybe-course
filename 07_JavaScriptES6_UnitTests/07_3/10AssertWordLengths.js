const assert = require('assert');
// Escreva a função wordLengths para passar nos testes já implementados.
const wordLengths = (array) => {
  const result = [];
  for (let index = 0; index < array.length; index += 1) {
    result.push(array[index].length);
  }
  return result;
};
// Escreva a função entre os comentários

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);
