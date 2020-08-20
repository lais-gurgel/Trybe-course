#!/bin/bash
# Pergunte o nome, idade, e veja o usuario e diretorio
# Armazena em variaveis e mostra os resultados na tela
echo "Qual seu nome?"
read NOME
echo "Qual sua idade?"
read IDADE
echo "O seu usuário é 'whoami'"
echo "Você esta no diretorio 'pwd'"
sleep 1; echo .;sleep 1; echo .; sleep 1;echo .
echo "O seu nome é " $NOME 
echo "A sua idade é " $IDADE
echo "Você está logado no usuário: 'whoami'"
echo "O seu diretorio atual é: 'pwd'"
