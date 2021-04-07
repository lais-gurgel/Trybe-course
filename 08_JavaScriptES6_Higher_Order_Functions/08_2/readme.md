JavaScript ES6 - Higher Order Functions - map e filter

1- Utilizar a função Array.map para manipular e construir arrays;
O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.
  Qual a diferença, afinal, de map para o forEach? São duas principais:
  - O map aplica sobre os elementos de um array uma função e retorna um array novo, sem modificar o original;
  - A forEach não tem tal restrição. Ela pode modificar o array original e retorna nada por padrão - ela pode criar um array novo a partir de um antigo, pode simplesmente buscar por um elemento e retorná-lo, pode não retornar nada, enfim! Ela é genérica e pode fazer diversas coisas.

2- Utilizar a função Array.filter para filtrar um array;
O filter é bem parecido com o find. O que o filter traz de novo é que, em vez de retornar apenas um elemento, ele retornará todos os elementos em um array que satisfaçam à condição verificada pela função. 

3- Aprender a usar de forma conjunta as Higher Order Functions.
MAP && FILTER - EX06 Morning Students
MAP && FIND - EX07 Report Status

Lembre-se! As funções passadas para as HOFs podem receber vários parâmetros, não só o elemento sobre o qual ela está sendo iterada