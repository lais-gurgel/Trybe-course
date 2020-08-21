// No javascript, quando declaramos uma função que recebe parâmetros, podemos notar que ao chamá-la sem passarmos nenhum valor vamos receber undefined como resultado.

// OLD WAY
function hello (name) {
  name = typeof name !== 'undefined' ? name : 'World';
  console.log('Hello ' + name);
}

hello('People'); // Hello People
hello(); // Hello World

// SINTAXE ES6
function hello (name = 'World') {
  console.log(`Hello ${name}`);
}

hello('People'); // Hello People
hello(); // Hello World

// PASSANDO UNDEFINED ou nada como valor
function say (message = 'Hello', name = 'World') {
  console.log(`${message} ${name}`);
}
say('Hey', 'People'); // Hey People
say(undefined, 'People'); // Hello People
say('Hi'); // Hi World
say(undefined, undefined); // Hello World

// PASSANDO NULL ou ZERO, é retornado 0 ou null 
function say (message = 'Hello', name = 'World') {
  console.log(`${message} ${name}`);
}
say('Hey', 'People'); // Hey People
say(null, 'People'); // null People
say('Hi', 0); // Hi 0
say(0, null); // 0 null