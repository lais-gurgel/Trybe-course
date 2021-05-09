import math


# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.
def biggest_number(number_one, number_two):
    if number_one > number_two:
        return number_one
    return number_two


print(biggest_number(1, 2))

# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.
numbers = [20, 30, 40]


def arithmetic_average(numbers):
    sum = 0
    for number in numbers:
        sum += number
    return sum / len(numbers)


print(arithmetic_average(numbers))

# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:
# 🦜 Dica: A função print aceita um parâmetro nomeado end que pode ser utilizado para imprimir sem a quebra de linha. Por exemplo, print(4, end="") e print(2) irá imprimir 42 e depois quebrar a linha.


def asterisk_square(number):
    i = 0
    while i < number:
        print(number * '*')
        i += 1


asterisk_square(5)


def draw_square(n):
    for row in range(1, n + 1):
        for column in range(1, n + 1):
            print("*", end="")
        print()


# Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome com a maior quantidade de caracteres. Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"] , o retorno deve ser "Fernanda" .
# 🦜 Uma dica: Utilize a função len() para verificar o tamanho do nome.
names = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def find_biggest_name(names_list):
    biggest_name = names_list[0]
    for name in names_list:
        if len(name) > len(biggest_name):
            biggest_name = name
    return biggest_name


print(find_biggest_name(names))
# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Crie uma função que retorne dois valores em uma tupla contendo a quantidade de latas de tinta a serem compradas e o preço total a partir do tamanho de uma parede(em m²).


def paint_cost(area):
    can_price = 80
    square_meters_per_paint_liter = 3
    liters_per_paint_can = 18
    square_meters_per_paint_can = square_meters_per_paint_liter * liters_per_paint_can
    quantity_of_cans_paint = math.ceil(area / square_meters_per_paint_can)
    total_price = can_price * quantity_of_cans_paint
    return quantity_of_cans_paint, total_price


print(paint_cost(54))
print(paint_cost(55))
# Exercício 6: Crie uma função que receba os três lado de um triângulo e informe qual o tipo de triângulo formado ou "não é triangulo" , caso não seja possível formar um triângulo.
# 🦜 Dica:
# Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro;
# Triângulo Equilátero: três lados iguais;
# Triângulo Isósceles: quaisquer dois lados iguais;
# Triângulo Escaleno: três lados diferentes.