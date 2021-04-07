// Defina uma função que retorna um número aleatório entre 1 e 100. A seguir, defina uma outra função que recebe um parâmetro e checa se o número aleatório é divisível pelo número do parâmetro.

let randomNumber = () => Math.floor(Math.random() * 101);

const isDivisible = (number) => (randomNumber() % number) === 0;

// Escreva um teste que verifica que a função randomNumber() é chamada quando invocamos a isDivisible()
// Teste que, quando a randomNumber() retorna um número par e isDivisible() recebe um dois, o retorno é true
// Simule (mocke) dois valores para a função randomNumber() retornar e um terceiro valor default. Chame a função isDivisible() quatro vezes num mesmo teste e cheque que os retornos são conforme esperado. 

describe('isDivisible', () => {
  it('randomNumber() é chamada quando invocamos a isDivisible()', () => {
    randomNumber = jest
      .fn()
    
    isDivisible(1);
    expect(randomNumber).toHaveBeenCalledTimes(1);
  });

  it('quando a randomNumber() retorna um número par e isDivisible() recebe um dois, o retorno é true', () => {
    randomNumber = jest
      .fn()
      .mockReturnValueOnce(12)
    
    expect(isDivisible(2)).toBe(true);
  });
  it('a função isDivisible tem os retornos esperados', () => {
    randomNumber = jest
      .fn()
      .mockReturnValueOnce(2)
      .mockReturnValueOnce(3)
      .mockReturnValue(4)
    
    expect(isDivisible(2)).toBe(true);
    expect(isDivisible(3)).toBe(true);
    expect(isDivisible(3)).toBe(false);
    expect(isDivisible(4)).toBe(true);
  });
});
