// Expect And Matchers

// Ao escrever testes, você precisa verificar que valores satisfazem a algumas condições. A função expect é utilizada para dar acesso a um conjunto de métodos chamados matchers. Esses métodos permitem testar valores de diversas formas. expect recebe o valor a ser testado e retorna um objeto representando uma expectation. Sobre esse objeto pode-se chamar os matchers que Jest fornece.

// toBe
// Esse matcher testa igualdade estrita entre o valor passado para expect e seu argumento. Isso significa, por exemplo, que um teste com o expectation abaixo falharia porque a string "5" não é igual ao número 5.
test('string and number equality', () => {
  const number = 1;
  const string = '1';

  // expect(number).toBe(string); // fails
  expect(number).toBe(1); // OK
})

// toEqual
// JavaScript faz comparação por referência. Isso significa que objetos e arrays com conteúdo iguais são considerados diferentes JavaScript. Para testar igualdade de objetos e arrays, é preciso usar o matcher toEqual, que acessa cada elemento do objeto ou array, fazendo um trabalho de comparação específico e que retorna uma resposta mais voltada para a necessidade dos testes:
test('array and object equality', () => {
  const arr = [1, 2 ,3];
  const obj = { a: 1, b: 2, c: 3};

  // expect(arr).toBe([1, 2, 3]); // fails
  // expect(obj).toBe({ a: 1, b: 2, c: 3}); // fails
  expect(arr).toEqual([1, 2, 3]); // OK
  expect(obj).toEqual({ a: 1, b: 2, c: 3}); // OK
});

// outros podem ser consultados na documentação oficial do Jest