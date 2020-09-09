// Mockando Funções
// O método jest.fn() configura-se como a forma mais simples de se mockar algo: ele transforma uma função em uma simulação. Ou seja: ao mockar uma função com o jest.fn() e fazer a chamada da mesma, o comportamento definido no mock será chamado, em vez da função original.

function randomRgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
 
test("#randomRgbColor", () => {
  // testando quantas vezes a função foi chamada e qual seu retorno
  randomRgbColor = jest
    .fn()
    .mockReturnValue('default value')
    .mockReturnValueOnce('first call')
    .mockReturnValueOnce('second call');

  expect(randomRgbColor).toHaveBeenCalledTimes(0);

  expect(randomRgbColor()).toBe("first call");
  expect(randomRgbColor).toHaveBeenCalledTimes(1);

  expect(randomRgbColor()).toBe("second call");
  expect(randomRgbColor).toHaveBeenCalledTimes(2);

  expect(randomRgbColor()).toBe("default value");
  expect(randomRgbColor).toHaveBeenCalledTimes(3);
});
// A propriedade toHaveBeenCalled() espera que a função dentro do expect tenha sido executada por alguma chamada anterior a essa linha dentro do contexto desse teste. Além disso, podemos também testar quantas vezes a função foi chamada. Para isso, utilizamos a propriedade toHaveBeenCalledTimes(number).
// É possível implementar vários comportamentos em uma simulação. No exemplo acima, note que a implementação mockReturnValueOnce se sobrepõe em relação a mockReturnValue, que se torna um padrão apenas após os retornos de mockReturnValueOnce serem executados.
