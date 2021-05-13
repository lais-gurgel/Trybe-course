# Exercício 5: Utilizando o arquivo pokemons.json , vamos escrever um programa que sorteie um pokemon aleatoriamente. O programa deve perguntar à pessoa usuária "Quem é esse pokemon?", até que ela o acerte. A cada erro, apresente um número de letras do nome daquele pokemon igual ao número de erros.
# Exemplo: o pokemon sorteado pelo programa é butterfree , a pessoa usuária chuta charizard , o programa deve exibir b . Em seguida, a pessoa chuta blastoise , o programa deve exibir bu e assim por diante até a pessoa acertar.
# 🦜 Você pode utilizar o método choice do modulo random para sortear aleatoriamente um pokemon. Ex: random.choice(pokemon) -> Saída: {"name": "Pikachu", }

import json
import random

# leitura dos pokemons
with open("../manipulating_JSON_files/pokemons.json") as pokemons_list:
    pokemons = json.load(pokemons_list)["results"]


pokemon_names = [
  pokemon["name"] for pokemon in pokemons
]


def discover_pokemon():
    pokemon = random.choice(pokemon_names)
    pokemon_letters = ''
    attempt = ''
    for letter in pokemon:
        pokemon_letters += letter
        if len(pokemon_letters) == len(pokemon) or attempt == pokemon:
            return print(f"O pokemon é {pokemon}")
        attempt = input(f"{pokemon_letters}. Quem é esse pokemon? ")


discover_pokemon()
