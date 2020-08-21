const arr = [0,1,2]

// Array Literal
const newArr = [...arr, 3]
console.log(newArr) // [0,1,2,3]

// Chamada de função
function sum (a,b,c) {
  return a+b+c
}
console.log(sum(...arr)) // 3

// Desestruturação
const [a, b, ...c] = [1, 2, 3, 4, 5]
a = 1
b = 2
c = [3, 4, 5]
