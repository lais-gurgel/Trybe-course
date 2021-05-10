# ESCRITA
fruits_file = open("fruits.txt", mode="w")

fruits_file.write("Melon\n")
fruits_file.write("Watermelon\n")
fruits_file.write("Strawberry\n")

print("Lemon", file=fruits_file)

more_fruits = ["Orange\n", "Blueberry\n"]
fruits_file.writelines(more_fruits)
fruits_file.close()

# LEITURA
fruits_file = open("fruits.txt", mode="r")

for line in fruits_file:
    print(line)

print("Content")

content = fruits_file.read()
print(content)

fruits_file.close()
