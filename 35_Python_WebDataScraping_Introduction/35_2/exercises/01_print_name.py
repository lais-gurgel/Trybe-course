# Exercício 1: Faça um programa que receba um nome e imprima o mesmo na vertical em escada invertida.
user_name = input("Digite seu nome: ")

for i in range(len(user_name)):
    quantity_of_letters = len(user_name) - i
    print(user_name[:quantity_of_letters])
