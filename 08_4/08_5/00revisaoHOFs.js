// Revisão de HOFs
// Dado um array de N elementos
const array = [1, 2, 3, 4]; // poderia ser [1,2,{3}] ou [1,[2,3]]

// 1. HOF: forEach
// executa uma dada função em cada elemento de um ARRAY, sem RETURN, subtitui um for normal

function forEach(doSomething) {
  for (let index = 0; index < array.length; index += 1) {
    // vai acessar o elemento com array[index]
    doSomething(array[index], index, array);
  }
  // SEM return, apenas executa
}

function printValues(arrayElement, currentIndex, array) {
  console.log('element:', arrayElement, 'currentIndex:', currentIndex, 'array:', array);
}

forEach(printValues)
  // element: 1 currentIndex: 0 array: [ 1, 2, 3, 4 ]
  // element: 2 currentIndex: 1 array: [ 1, 2, 3, 4 ]
  // element: 3 currentIndex: 2 array: [ 1, 2, 3, 4 ]
  // element: 4 currentIndex: 3 array: [ 1, 2, 3, 4 ]
// 

console.log(array.forEach(printValues)) // return undefined - porque o forEach não retorna nada, apenas executa para cada elemento

// 2. HOF: map
// invoca a função passada como argumento e devolve um novo Array como resultado
const mappedArray = array.map((element) => {
  return { value: element, dollarValue: element * 5 };
}); // return [] com N elementos (N = número elementos array original)

console.log(mappedArray) // o return do map ficou armazenado na variavel mapedArray
// [ { value: 1, dollarValue: 5 },
//   { value: 2, dollarValue: 10 },
//   { value: 3, dollarValue: 15 },
//   { value: 4, dollarValue: 20 } ]

// 3. HOF: filter
// filtra o array, return [] com N ou menos elementos, pelas possibilidades:
// se a condição passa para todos os elementos, retorna todos, se não passa, retorna excluindo as exceções, se nenhum passa, retorna vazio
const filteredArray = array.filter((element) => {
  return element % 2 === 0;
}); // return [] com N ou menos elementos
console.log(filteredArray) // [ 2, 4 ] - VERDADEIRO PARA ALGUNS

const filteredArray2 = array.filter((element) => element > 5);
console.log(filteredArray2) // [] - FALSO PARA TODOS

const filteredArray3 = array.filter((element) => element > 0);
console.log(filteredArray3) // [ 1, 2, 3, 4 ] - VERDADEIRO PARA TODOS - Resultado N elementos

// 4. HOF: reduce
// transforma o array, mas não necessariamente em outro array como o map
const reducedArray = array.reduce((previousValue, currentValue, currentIndex) => {
  return previousValue + currentValue;
}, 0); // return previousValue = 'accumulator' -> independente do tipo dele
// initialValue = 0, valor inicial do previousValue
console.log(reducedArray) // 10

// 5. HOF: some
// testa se alguma condição é verdadeira para pelo menos 1 dos elementos
// encerra quando encontra a condição verdadeira, seja na primeira posição ou na ultima
// return BOOLEAN = TRUE(algum elemento é verdadeiro) or FALSE(todos os elementos são falsos)
const resultSome = array.some((element) => {
  return element === 2
}); // return true
console.log(resultSome); // true

// 6. HOF: every
// testa se alguma condição é verdadeira para TODOS os elementos do array
// encerra quando encontra o valor falso, pois só retorna TRUE quando TODOS são verdadeiros
const resultEvery = array.every((element) => {
  return element < 5
})
console.log(resultEvery); // true

// 7. HOF: extra: includes
// testa se inclui, retorna BOOLEAN caso inclua o elemento passado
const includes = [2, 2, 2].includes(1);
console.log(includes)

