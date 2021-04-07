// Trabalhando com mock e funções originais
// Há também como limpar, resetar ou restaurar mocks. Existem três métodos capazes de fazer isso:

// 1 mock.mockClear()
// Útil quando você deseja limpar os dados de uso de uma simulação entre dois expects;

// 2 mock.mockReset()
// Faz o que o mockClear() faz;
// Remove qualquer retorno estipulado ou implementação;
// Útil quando você deseja resetar uma simulação para seu estado inicial;

// 3 mock.mockRestore()
// Faz tudo que mockReset() faz;
// Restaura a implementação original;
// Útil para quando você quer simular funções em certos casos de teste e restaurar a implementação original em outros;

const math = require('./math');

test("#somar", () => {
  // testando a implementação original, o mock e o mock resetado

  // implementação original
  // expect(math.somar(1, 2)).toBe(3);

  // criando o mock e substituindo a implementação para uma subtração
  math.somar = jest.fn().mockImplementation((a, b) => a - b);

  math.somar(5, 1);
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar(5, 1)).toBe(4);
  expect(math.somar).toHaveBeenCalledTimes(2);
  expect(math.somar).toHaveBeenLastCalledWith(5, 1);

  // resetando o mock
  math.somar.mockReset();
  expect(math.somar(1, 2)).toBe(undefined);
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar).toHaveBeenLastCalledWith(1, 2);
});

// No exemplo acima, por termos usado o jest.fn(), não há como restaurar as implementações originais da função, pois suas funcionalidades não permitem. A única ferramenta que nos permite transitar entre simulação e comportamento original é o jest.spyOn().