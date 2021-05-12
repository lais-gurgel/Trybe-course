"""Retorna os tipos de pokemon existentes"""
import json


with open('pokemons.json') as database:
    pokemons = json.load(database)["results"]

types = set()
for pokemon in pokemons:
    types_of_pokemons = pokemon['type']
    for type in types_of_pokemons:
        types.add(type)

print(list(types))
