// Arrays
// Você pode verificar se um array contém um item em particular utilizando toContain. Para verificar que um item possui uma estrutura mais complexa, utilize toContainEqual. toHaveLength permite facilmente verificar o tamanho de um array ou de uma string.

// toContain
// Use .toContain quando você deseja verificar se um item está em um array. Para testar os itens no array, este usa ===, uma verificação de igualdade estrita. .toContain também pode verificar se uma string é uma substring de outra string.Por exemplo, se getAllFlavors() retorna um array de sabores e você quer ter certeza que lime está lá, você pode escrever:
function getAllFlavors() {
  const flavors = [ 'strawberry', 'grape', 'lime'];
  return flavors;
}

test('the flavor list contains lime', () => {
  expect(getAllFlavors()).toContain('lime');
});

// toContainEqual
// Use .toContainEqual quando você deseja verificar que um item com uma estrutura específica e valores está contido em um array. Para testar os itens no array, este "matcher" recursivamente verifica a igualdade de todos os campos, em vez de verificar a identidade do objeto.
describe('my beverage', () => {
  test('is delicious and not sour', () => {
    const myBeverage = {delicious: true, sour: false};
    // expect(myBeverages()).toContainEqual(myBeverage);
  });
});

// toHaveLength
// Use .toHaveLength para verificar que um objeto tem uma propriedade .length e está definida para um determinado valor numérico. Isto é especialmente útil para verificar arrays ou tamanho de strings.
expect([1, 2, 3]).toHaveLength(3);
expect('abc').toHaveLength(3);
expect('').not.toHaveLength(5);