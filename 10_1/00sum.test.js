// Escrevendo testes

const sum = (a, b) => a + b;

// função test
test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});
// A função test espera três argumentos. 
// O primeiro argumento é o nome do teste. Esse nome identifica o teste e é também o texto que aparecerá quando os testes forem executados. Exemplo: 'sums two values'
// O segundo argumento é uma função contendo suas expectations. Em outras palavras, é dentro dessa função que você fará os testes propriamente ditos. Exemplo: a arrow function () => expect(sum(2, 3)).toEqual(5);
// O terceiro argumento (opcional) é um timeout, indicando quanto tempo o Jest deve esperar que o teste execute antes de abortá-lo.

// Neste exemplo o teste e a implementação estão no mesmo arquivo.
// O usual é separar os arquivos: 
// Jest procura por arquivos com as extensões .js, .jsx, .ts e .tsx dentro de uma pasta com o nome __tests__, ou arquivos com o sufixo .test ou .spec. É comum que o arquivo de teste tenha o mesmo nome e fique na mesma pasta do arquivo que está sendo testado, acrescido da sufixo .test.js
// EXEMPLO: 01sum.js arquivo com implementação e 01sum.test.js arquivo com teste

// sum.js
// const sum = (a, b) => a + b;
// module.exports = sum;
// A linha module.exports = sum exporta a função sum no primeiro arquivo para que possa ser utilizada em outros módulos.

// sum.test.js
// const sum = require('./sum');
// test('sums two values', () => {
//   expect(sum(2, 3)).toBe(5);
// });
// Utilizamos require('./sum') para importar a função sum.