// Caso queira ordenar de forma alfabética, basta chamar sort, passando nenhuma função como parâmetro.
console.log([1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10].sort())
// [ 1, 10, 2, 3, 4, 5, 6, 6, 7, 8, 9 ]
const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]

// Para ordenar de forma numérica crescente, é necessário passar a função a seguir:
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){ return a - b });
console.log(points); 
// [1, 5, 10, 25, 40, 100]
// A lógica é a seguinte: a função recebe, da sort, todos os elementos do array, em pares, e vai comparando-os. O formato é meuArray.sort((elemento1, elemento2) => /* logica da função */). Ou seja: para o array [1, 2, 3, 4], a função receberá (1, 2), (1, 3), ..., (3, 4) como parâmetros e ordenará o array com base em seu resultado. Se a operação de elemento1 com elemento2 der resultado negativo, elemento1 vai para trás. Caso contrário, vai para frente, para, de forma decrescente, só inverter elemento1 - elemento2 para elemento2 - elemento1.