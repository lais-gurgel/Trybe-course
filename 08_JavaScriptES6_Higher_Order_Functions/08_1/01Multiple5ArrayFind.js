const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];

// with FOR and IF
//  let firstMultipleOf5;
//  for (let i = 0; i < numbers.length; i += 1) {
//    if (numbers[i] % 5 === 0) {
//      firstMultipleOf5 = numbers[i];
//      break;
//    }
//  }

// with Array.find
const firstMultipleOf5 = numbers.find(number => number % 5 === 0);

//
console.log(firstMultipleOf5);
// => 50