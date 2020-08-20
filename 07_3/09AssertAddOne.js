const assert = require('assert');
// Escreva a função addOne para passar nos testes já implementados.

const addOne = (array) => {
  const arrayResult = [];
  for (let index = 0; index < array.length; index += 1) { 
    arrayResult.push(array[index] + 1);
  }
  return arrayResult;
};

// Escreva a função entre os comentários.

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepEqual(output, expected);
assert.deepEqual(myArray, unchanged);