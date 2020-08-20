// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 1000;

for (let i = 0; i < numbers.length; i++) {
    result = result < numbers[i] ? result : result = numbers[i]
}

console.log(result);
