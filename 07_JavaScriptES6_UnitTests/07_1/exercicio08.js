// Crie uma função que receba uma frase e retorne qual a maior palavra
// longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'

const longestWord = phrase => {
  let words = phrase.split(' ');
  let result = '';

  for (let i = 0; i < words.length; i += 1) {
    if (result < words[i]) {
      result = words[i]
    }
  }

  return result
}

const longestWord = phrase => {
  let wordArray = phrase.split(' ')
  let maxLength = 0
  let result = ''

  for (const word of wordArray) {
    if (word.length > maxLength) {
      maxLength = word.length
      result = word
    }
  }

  return result
}

const longestWord = phrase => phrase.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0]