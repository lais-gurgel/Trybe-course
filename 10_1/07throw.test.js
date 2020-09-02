// Exceções
// toThrow testa que uma função lança um erro quando é executada. Note que é preciso envolver o código em uma função (normalmente uma arrow function). Chamar a função diretamente dentro de expect fará com que o erro não seja capturado, e a asserção falhará, porque o erro acontecerá antes mesmo de expect ser executado e ter a chance de capturar o erro.
// Use .toThrow para testar que uma função é capaz de lançar erros quando é chamada. Por exemplo, se queremos testar que drinkFlavor('octopus') lança um erro, porque o sabor "octopus", ou polvo, é muito nojento para beber, podemos escrever:
function drinkFlavor(flavor) {
  if (flavor == 'octopus') {
    throw new DisgustingFlavorError('yuck, octopus flavor');
  }
  // Do some other stuff
}

test('throws on octopus', () => {
  expect(() => {
    drinkFlavor('octopus');
  }).toThrow();
});