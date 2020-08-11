// Crie uma função que receba um número e retorne seu fatorial.

const factorial = function (number) {
  let result = 1;

  for (let i = 2; i <= number; i += 1) {
    result *= i;
  }

  return result;
}

//arrow functions
const factorial = number => {
  let result = 1;

  for (let i = 2; i <= number; i += 1) {
    result *= i;
  }

  return result;
}

//arrow functions
const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
