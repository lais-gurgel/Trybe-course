# Exercício 1: Escreva um programa que retorne uma lista com os valores numéricos de 1 a N, mas com as seguintes exceções :
# Números divisíveis por 3 deve aparecer como 'Fizz' ao invés do número;
# Números divisíveis por 5 devem aparecer como 'Buzz' ao invés do número;
# Números divisíveis por 3 e 5 devem aparecer como 'FizzBuzz' ao invés do número';
# Ex: 3 -> [1, 2, "Fizz"]

from fizzbuzz import fizzbuzz


def test_fizzbuzz_with_numbers_divisible_by_3():
    'Para números divisíveis por 3 deve aparecer como "Fizz" ao invés do número'
    assert fizzbuzz(3)[-1] is "Fizz"


def test_fizzbuzz_with_numbers_divisible_by_5():
    'Para números divisíveis por 5 devem aparecer como "Buzz" ao invés do número'
    assert fizzbuzz(5)[-1] is "Buzz"


def test_fizzbuzz_with_numbers_divisible_by_15():
    'Para números divisíveis por 3 e 5 devem aparecer como "FizzBuzz" ao invés do número'
    assert fizzbuzz(15)[-1] is "FizzBuzz"


def test_fizzbuzz_should_return_list_of_numbers():
    "Para números outros números, retornar os números"
    assert fizzbuzz(2) == [1, 2]
