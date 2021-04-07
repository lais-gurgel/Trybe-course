// Implemente uma função 'summation' que receba um valor e retorne o somatório desse valor
// summationOf(3) retorna 6: de 1 até 3 = 1 + 2 + 3 = 6

const assert = require('assert');

const summationOf = number => { 
  let summation = 0;

  for (let value = 1; value <= number; value += 1){
    summation += value;
  }

  return summation;
};

assert.strictEqual(typeof(summationOf), "function");
assert.strictEqual(summationOf(1), 1);
assert.strictEqual(summationOf(3), 6);
assert.strictEqual(summationOf(5), 15);
assert.strictEqual(summationOf(0), 0);
