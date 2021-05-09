# Exercício 1: Dada uma lista, descubra o menor elemento. Por exemplo, [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] deve retornar 2.
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]


def find_lowest_number(numbers_list):
    lowest_number = numbers_list[0]
    for number in numbers_list:
        if number < lowest_number:
            lowest_number = number
    return lowest_number


print('Lowest number', find_lowest_number(numbers))
# Exercício 2: Faça um programa que, dado um valor n qualquer, tal que n > 1, imprima na tela um triângulo retângulo com 5 asteriscos de base. Por exemplo:
# Copiar
# n = 5
# *
# **
# ***
# ****
# *****


def draw_triangle(n):
    for row in range(1, n + 1):
        for column in range(1, row + 1):
            print("*", end="")
        print()



draw_triangle(5)

# Exercício 3: Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N. Por exemplo, para N = 5, o valor esperado será 15.


def summation(number):
    sum = 0
    number_to_add = number
    while number_to_add > 0:
        sum += number_to_add
        number_to_add -= 1
    return sum


print('Summation', summation(5))
# Exercício 4: Um posto está vendendo combustíveis com a seguinte tabela de descontos:
#   Álcool:
#     - Até 20 litros, desconto de 3% por litro;
#     - Acima de 20 litros, desconto de 5% por litro.
#   Gasolina:
#     - Até 20 litros, desconto de 4% por litro;
#     - Acima de 20 litros, desconto de 6% por litro.
# Escreva uma função que receba o número de litros vendidos, o tipo de combustível (codificado da seguinte forma: A - álcool, G - gasolina), e retorne o valor a ser pago pelo cliente, sabendo-se que o preço do litro da gasolina é R$ 2,50, e o preço do litro do álcool é R$ 1,90.


def fuel_price(type, liters):
    if type == 'A':
        price = 1.90
        discount = 0.03
        if liters >= 20:
            discount = 0.05
    elif type == 'G':
        price = 2.50
        discount = 0.04
        if liters >= 20:
            discount = 0.06
    else:
        return 'Invalid fuel type'
    total = liters * price
    total -= total * discount
    return total


print(fuel_price('T', 5))
print('Alcohol price', fuel_price('A', 1))
print('Gasoline price', fuel_price('G', 1))
