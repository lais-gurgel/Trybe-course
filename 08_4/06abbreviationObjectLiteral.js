// Use a abreviatura de propriedade de objeto com literais de objeto para criar e retornar um objeto com propriedades de nome, idade e gênero
// const createPerson = (name, age, gender) => {
//   return {
//     name: name,
//     age: age,
//     gender: gender
//   };
// };

// Abbreviation object literal
const createPerson = (name, age, gender) => {
  return {
    name,
    age,
    gender
  };
};

console.log(createPerson("Zodiac Hasbro", 56, "male"))
// { name: 'Zodiac Hasbro', age: 56, gender: 'male' }