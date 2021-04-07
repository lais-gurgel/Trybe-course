const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const isEven = (number) => number % 2 === 0;
const sumPair = (currentValue, number) => currentValue + number;

const sumNumbers = (array) => array.filter(isEven).reduce(sumPair);

console.log(sumNumbers(numbers)); // 152