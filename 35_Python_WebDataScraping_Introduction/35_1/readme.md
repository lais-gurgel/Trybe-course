## 35_1 Introdução ao Python

### Aprendizados
- Utilizar o terminal interativo do Python ;
- Entender e utilizar estruturas condicionais (se, senão se, senão) e de repetição (enquanto, para);
- Criar funções para reutilização de código;
- Escrever seus próprios módulos e como importá-los em outros códigos.

### Resumo
O Python é uma linguagem de programação de alto nível e muito versátil. Ela suporta tanto a programação orientada a objetos quanto a programação estruturada. Com Python, você pode acessar bibliotecas nativas que oferecem funcionalidades para desenvolvimento de projetos e implementação de aplicações complexas.

>The Zen of Python, by Tim Peters
>
>Beautiful is better than ugly.
>Explicit is better than implicit.
>Simple is better than complex.
>Complex is better than complicated.
>Flat is better than nested.
>Sparse is better than dense.
>Readability counts.
>Special cases aren't special enough to break the rules.
>Although practicality beats purity.
>Errors should never pass silently.
>Unless explicitly silenced.
>In the face of ambiguity, refuse the temptation to guess.
>There should be one-- and preferably only one --obvious way to do it.
>Although that way may not be obvious at first unless you're Dutch.
>Now is better than never.
>Although never is often better than *right* now.
>If the implementation is hard to explain, it's a bad idea.
>If the implementation is easy to explain, it may be a good idea.
>Namespaces are one honking great idea -- let's do more of those!

[Python - site oficial](https://www.python.org/)

#### Tipos de dados

- Números inteiros (int): número sem parte fracionária (5).
- Números fracionários (float): número decimal ou fracionário (5.0).
- Números complexos (complex): número real com parte imaginária (10j).
~~~
(3 + 4j) + 4  # saída: (7+4j)
~~~
- Strings (str): sequência de texto representada por cadeia de caracteres, envolvida por aspas simples ou duplas.
- Booleanos (bool): Os valores booleanos True e False pertencem ao tipo embutido bool e devem ser utilizados com letra maiúscula.
- Listas (list): sequência mutável e ordenada, armazena elementos diferentes, tem tamanho variado e cresce conforme itens são adicionados.
~~~
fruits = ["orange", "apple", "grape", "pineapple"]
~~~
- Tuplas (tuple): elementos separados por virgulas, envoltos por parenteses, não podem ser modificados durante execução.
~~~
user = ("Cássio", "Botaro", 42)  # elementos são definidos separados por vírgula, envolvidos por parenteses
~~~
- Conjuntos (set): conjunto de elementos únicos e não ordenados. Como conjuntos, implementam operações de união, intersecção e outras.
~~~
permissions = {"member", "group"}  # elementos separados por vírgula, envolvidos por chaves
~~~
- Conjuntos imutáveis (frozenset): variação do set, porém imutável, ou seja, seus elementos não podem ser modificados durante a execução do programa.
~~~
permissions = frozenset(["member", "group"])  # assim como o set, qualquer estrutura iterável pode ser utilizada para criar um frozenset

permissions.union({"user"})  # novos conjuntos imutáveis podem ser criados à partir do original, mas o mesmo não pode ser modificado

permissions.intersection({"user", "member"})  # retorna um conjunto resultante da intersecção dos conjuntos

permissions.difference({"user"})  # retorna a diferença entre os dois conjuntos
~~~
- Dicionários (dict): estrutura que associa uma chave a um determinado valor. É a representação do tão famoso objeto que utilizamos em JavaScript.
~~~
people_by_id = {1: "Cássio", 2: "João", 3: "Felipe"}
~~~
- Range (range): Estrutura capaz de gerar uma sequência numérica de um valor inicial até um valor final, modificando seu valor de acordo com o passo ( step ) definido. Pode ser declarado como range( [start], stop[, step] ) , em que start e step podem ser omitidos, possuindo valores iniciais iguais a 0 e 1 respectivamente. Um ponto de atenção é que o stop não é incluído na sequência, portanto caso queira uma sequência de 1 até 10 a chamada deverá ser range(1, 11). Seus valores são criados a medida que esta sequência é percorrida.
~~~
# definimos somente o valor de parada
list(range(5))  # saída: [0, 1, 2, 3, 4]

# definimos o valor inicial e o de parada
list(range(1, 6))  # saída: [1, 2, 3, 4, 5]

# definimos valor inicial, de parada e modificamos o passo para 2
list(range(1, 11, 2))  # saída: [1, 3, ,5 ,7 , 9]

# podemos utilizar valores negativos para as entradas também
list(range(10, 0, -1))  # saída: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
~~~

#### Estruturas condicionais
O if é uma estrutura de condição que permite avaliar uma expressão e, de acordo com seu resultado, executar uma determinada ação.
~~~
idade = 18
if idade < 12:
    print('crianca')
elif idade < 18:
    print('adolescente')
elif idade < 60:
    print('adulto')
else:
    print('idoso')
~~~

#### Estruturas de repetição
- for: usado quando se quer iterar sobre um bloco de código um número determinado de vezes.
~~~
for n in range(0, 3):
    print(n)
~~~
- while: usado quando queremos que o bloco de código seja repetido até que uma condição seja satisfeita. Ou seja, é necessário que uma expressão booliana dada seja verdadeira. Assim que ela se tornar falsa, o while para.
~~~
n = 0
while n < 3:
    print(n)
    n += 1
~~~

#### Your feedback is always welcomed and appreciated