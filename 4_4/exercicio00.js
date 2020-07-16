// Dado o objeto abaixo, imprima na tela acessando no objeto as respostas, deve retornar:
// O nome do curso é: Curso de desenvolvimento Front-end 2019/09 - BH
// A descrição do módulo Internet é: Como a internet funciona
// A última semana do módulo *HTML* é: 3
// O tipo do módulo Shell é: teórica, prática

var curso = {
    nome: "Curso de desenvolvimento Front-end 2019/09 - BH",
    modulos: {
      internet: {
        descricao: "Como a internet funciona",
        semana: 1,
        tipo: "teórica",
        estado: "completo"
      },
      shell: {
        descricao: "Shell Script",
        semana: 1,
        tipo: ["teórica", "prática"],
        estado: "completo"
      },
      html: {
        descricao: "HTML + CSS",
        semana: [2, 3],
        tipo: "prática",
        estado: "em andamento"
      }
    },
    quantidade_alunos: 10,
    arquivado: false
  };

console.log("O nome do curso é: ")
console.log("A descrição do módulo Internet é: ")
console.log("A última semana do módulo *HTML* é: ")
console.log("O tipo do módulo Shell é :")
  