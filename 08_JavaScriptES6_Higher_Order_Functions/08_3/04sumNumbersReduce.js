const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const isEven = (result, number) => (
  (number % 2 === 0) ? result + number : result
);

const sumNumbers = (array) => numbers.reduce(isEven, 0);

console.log(sumNumbers(numbers));
