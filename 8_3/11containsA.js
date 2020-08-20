    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

function containsA() {
  // escreva seu código aqui
  return names.reduce((result, word) => (
    result + word.toUpperCase().split('A').length -1
  ), 0)
}

assert.deepEqual(containsA(), 20);