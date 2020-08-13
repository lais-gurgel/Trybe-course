const assert = require('assert');
// Escreva a função factorial para passar nos testes já implementados.
const factorial = (number) => {
  if (number === 0 || number === 1) {
    number = 1;
  }
  for (let index = number -1; index >= 1; index -= 1) {
    number *= index;
  }  
  return number;
};

// const factorials = (int) => {
//   let factorial = 1;
//   for (let i = int; i > 0; i -= 1) factorial *= i;
//   return factorial;
// }
// Escreva a função entre os comentários

const in1 = 5;
const exp1 = 120;

const in2 = 9;
const exp2 = 362880;

const in3 = 1;
const exp3 = 1;

const in4 = 0;
const exp4 = 1;

const in5 = 3;
const exp5 = 6;

const out1 = factorial(in1);
const out2 = factorial(in2);
const out3 = factorial(in3);
const out4 = factorial(in4);
const out5 = factorial(in5);

assert.strictEqual(out1, exp1);
assert.strictEqual(out2, exp2);
assert.strictEqual(out3, exp3);
assert.strictEqual(out4, exp4);
assert.strictEqual(out5, exp5);