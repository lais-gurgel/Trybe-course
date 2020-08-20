const persons = [
  { firstName: "Maria", lastName: "Ferreira" },
  { firstName: "João", lastName: "Silva" },
  { firstName: "Antonio", lastName: "Cabral" },
];

// With FOR
// const fullNames = [];
// for(let i = 0; i < persons.length; i += 1){
//   fullNames.push(`${persons[i].firstName} ${persons[i].lastName}`);
// }

// With MAP 
const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);
//

console.log(fullNames); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]
