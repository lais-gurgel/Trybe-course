const assert = require('assert');

const sumFunc = (value1, value2) => value1 + value2;

assert.strictEqual(sumFunc(2,2), 4);
assert.strictEqual(sumFunc(3,3), 6);

const subtractionFunc = (value1, value2) => value1 - value2;

assert.strictEqual(subtractionFunc(3,2), 1);
assert.strictEqual(subtractionFunc(6,3), 3);

const multiplationFunc = (value1, value2) => value1 * value2;

assert.strictEqual(multiplationFunc(3,2), 6);
assert.strictEqual(multiplationFunc(6,3), 18);

const divisionFunc = (value1, value2) => value1 / value2;

assert.strictEqual(divisionFunc(6,2), 3);
assert.strictEqual(divisionFunc(4,2), 2);
