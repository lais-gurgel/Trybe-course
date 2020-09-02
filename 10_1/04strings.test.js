// Strings
// Para comparar strings com expressões regulares, utilize o matcher toMatch
// Por exemplo, você talvez não saiba o que exatamente essayOnTheBestFlavor() retorna, mas você sabe que é uma string muito longa, e a substring grapefruit deve estar em algum lugar. Você pode testar isso com:

function essayOnTheBestFlavor() {
  const phrase = 'grapefruits are healthy'
  return phrase
}

describe('an essay on the best flavor', () => {
  test('mentions grapefruit', () => {
    expect(essayOnTheBestFlavor()).toMatch(/grapefruit/);
    expect(essayOnTheBestFlavor()).toMatch(new RegExp('grapefruit'));
  });
});

// Este "matcher" também aceita uma string, a qual tentará corresponder:
describe('grapefruits are healthy', () => {
  test('grapefruits are a fruit', () => {
    expect('grapefruits').toMatch('fruit');
  });
});
