const numbers = [1, 2, 3, 4, -5];

// With FOR
// const negativeNumbers = [];
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > 0) {
//     negativeNumbers.push(numbers[i] * -1);
//   } else {
//     negativeNumbers.push(numbers[i]);
//   }
// }

// With MAP
const negativeNumbers = numbers.map(number => ((number > 0) ? number * (-1) : number));
//

console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
console.log(numbers); // [ 1, 2, 3, 4, -5 ]