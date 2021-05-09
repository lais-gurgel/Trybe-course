# Tipos de dados embutidos

# Inteiros (int), fracionários (float), complexos (complex), booleanos(bool) e strings (str)
a = 1
b = 0.5
c = 4j
d = True
e = False
f = "Hello"

# Exercício 5: Imprima os tipos das variaveis abaixo
print(type(a), type(b), type(c), type(d), type(e), type(f))

# Listas (list)
trybe_course = ["Introdução", "Front-end", "Back-end"]
# Exercício 6: Adicione à lista "Ciência da Computação" e a imprima para verificar a adição.
trybe_course.append("Ciência da Computação")
print(trybe_course)
# Exercício 7: Acesse e altere o primeiro elemento da lista para "Fundamentos".
trybe_course[0] = "Fundamentos"
print(trybe_course)

# Conjuntos (set)
# Exercício 8: Um conjunto ou set pode ser inicializado utilizando-se também o método set() . Inicialize uma variável com essa função var = set() e adicione seu nome ao conjunto utilizando um dos métodos vistos acima. Depois, imprima a variável e confira se o retorno é: {'seu_nome'}.
var = set()
var.add("Lais Gurgel")
print(var)

# Dicionários (dict)
info = {
  "personagem": "Margarida",
  "origem": "Pato Donald",
  "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}
# Exercício 9: O que acontecerá se você tentar acessar o valor da chave "personagem" como fazíamos em JavaScript, utilizando object.key ?
# Essa forma de acesso ao objeto em Python não é permitida, resultando em erro de sintaxe.
# Exercício 10: Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim". Em seguida, imprima o objeto no console.
info["recorrente"] = "Sim"
print(info)
# Exercício 11: Remova a propriedade cuja chave é "origem" e imprima o objeto no console.
del info["origem"]
print(info)

# Range (range)
# Exercício 12: Após uma consulta do banco de dados, temos linhas que contém nome, sobrenome e idade como: "Thiago", "Nobre", 29 . Que estrutura vista anteriormente seria recomendada dado que após esta consulta somente exibimos estes valores.
# A estrutura recomendada é a tuple . Caso houvesse necessidade de editar os valores ou adicionar mais valores, usaríamos uma list .
# Exercício 13: Realizar a contagem de quantas vezes cada elemento aparece em uma sequência é uma técnica muito útil na solução de alguns problemas. Qual é a estrutura mais recomendada para o armazenamento desta contagem?
# dict é a estrutura mais adequada, pois conseguimos armazenar o elemento da lista como chave e a quantidade de vezes que ele aparece como valor da chave.
my_list = [20, 20, 1, 2];
count_elements = {
    20: 2,
    1: 1,
    2: 2
}