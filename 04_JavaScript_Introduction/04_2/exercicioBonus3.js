// Agora você irá criar um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente do array anterior multiplicado pelo próximo. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (valor correspondente) e 9 (próximo valor). Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let arrayMult = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i+1]) {
   arrayMult.push(numbers[i] * numbers[i+1]);
  } else {
   arrayMult.push(numbers[i]*2);
  }
} 

console.log(arrayMult);
