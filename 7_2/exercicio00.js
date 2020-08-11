// crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.
const newObject = {};

const addKey = (nameObject, nameKey, valueKey) => {
  nameObject[nameKey] = valueKey;
  console.log(nameObject)
}

addKey(newObject, 'Key', 'Value of key');