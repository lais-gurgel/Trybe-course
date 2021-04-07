// object destructuring
// sintaxe [{Variáveis}] = [Objeto em JSON];
const json = {a : "Matheus", 
  b : "23", 
  c : "matheushcastiglioni@gmail.com"
};
const {nome, idade, email} = aluno;
console.log(nome);
console.log(idade);
console.log(email);

// referenciando um objeto mas trocando seu nome na criação da variável:
// sintaxe [{Campo_do_objeto:Nome_para_variavel}] = [Objeto];
const {a:nome, b:idade, c:email} = json;
console.log(nome);
console.log(idade);
console.log(email);
