7.3: Testes unitários em JavaScript
Sobre TESTES UNITÁRIOS e TESTAR EM PEQUENOS PASSOS
Testes unitários são porções de código responsáveis por validar o comportamento de unidades funcionais de código. Nesse contexto, entende-se como unidade funcional qualquer porção de código que, através de algum estímulo, seja capaz de gerar um comportamento esperado.

O conceito de testar em pequenos passos fala sobre como orientar nosso desenvolvimento com base nos testes.

Conhecimentos:
- O que são e para que servem os testes unitários.
Os testes unitários são porções de código responsáveis pela validação, necessárias para o desenvolvimento com foco em qualidade, que tem três dimensões principais:
CONFIANÇA
O sistema deve ser resistente a falhas durante a execução, não entrar em loop, não interromper a execução por falta de recursos, entre outros.
FUNCIONALIDADE
O sistema se comporta como o esperado e definido em seus requisitos.
PERFORMANCE
O sistema tem um tempo de resposta adequado e aceitável, mesmo quando submetido a um volume de processamento próximo de situações reais ou de pico.

- Biblioteca NODEJS ASSERT para criar testes unitários.
Existem diversas ferramentas para cada linguagem de programação. Focando no JavaScript, utilizaremos o NodeJS Assert Module.
Métodos que auxiliam nos testes: 
  assert.equal(actual, expected, [message]) 
  - operador de comparação ==
  assert.deepStrictEqual(actual, expected, [message])
  - operador de comparação ===
  assert.notEqual(actual, expected, [message])
  - compara se dois objetos, ou arrays, não são iguais
  assert.ok(value, [message])
  - verifica se o valor é true
  assert.fail(actual, expected, message, operator)
  - lança uma exceção que exibe os valores reais e esperados, separados pelo operador fornecido
lista de métodos e documentação: https://nelsonic.gitbooks.io/node-js-by-example/content/core/assert/README.html

- Testar 100% dos fluxos de um programa completo com eficácia e rapidez.
Test Driven Development: TDD
Inicie o teste observando as regras de negócio
1. Escreva um teste que falhe
2. Faça o código funcionar
3. Elimine redundância

OUTROS
NodeJS Assert Module: https://www.w3schools.com/nodejs/ref_assert.asp
Ferramentas de outras linguagens: https://github.com/atinfo/awesome-test-automation