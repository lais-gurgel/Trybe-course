// Ajuste a arrow function nationality para que a chamada de nationality(person) retorne João is Brazilian.
// const nationality = ({ firstName, nationality }) => (nationality === undefined ? `${firstName} is Brazilian` : `${firstName} is ${nationality}`)
const nationality = ({ firstName, nationality = 'Brazilian'}) => `${firstName} is ${nationality}`

const person = {
    firstName: "João",
    lastName: "Jr II"
}

const otherPerson = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
}

console.log(nationality(otherPerson)) // Ivan is Russian
console.log(nationality(person))