# Exercício 2: Jogo da palavra embaralhada. Desenvolva um jogo em que a pessoa usuária tenha que adivinhar uma palavra que será mostrada com as letras embaralhadas. O programa terá uma lista de palavras e escolherá uma aleatoriamente. O jogador terá três tentativas para adivinhar a palavra. Ao final a palavra deve ser mostrada na tela, informando se a pessoa ganhou ou perdeu o jogo.
# 🦜 Para embaralhar uma palavra faça: scrambled_word = "".join(random.sample(word, len(word)))
# 🦜 O sorteio de uma palavra aleatória pode ser feito utilizando o método choice: random.choice(["word1", "word2", "word3"]) -> "word2" .
# Exercício 3: Modifique o exercício para que as palavras sejam lidas de um arquivo. Considere que o arquivo terá cada palavra em uma linha.
import random

with open("list.txt") as list_of_words:
    words = list_of_words.read().splitlines()

word = random.choice(words)
scrambled_word = "".join(random.sample(word, len(word)))

for attempt in range(3):
    print(f"Tentativa {attempt + 1}")
    hunch = input(f"Desembaralhando '{scrambled_word}' resulta em:")
    if hunch == word:
        print("Você venceu!")
        break
print(f"A resposta é {word}")
