// Default destructuring
// Obtendo uma propriedade que não existe em um objeto
const person = {
  name: "João",
  lastName: "Jr",
  age: 34
}
// const { nationality } = person
// console.log(nationality) // undefined
const { nationality = "Brazilian" } = person // valor padrão para nationality, caso essa propriedade não exista no objeto
console.log(nationality)
console.log(person)

// Obtendo um valor em uma posição inexistente em um array
// desestruturando um array
const position2d = [1.0, 2.0]
const [x, y, z = 0] = position2d
console.log(z) // 0