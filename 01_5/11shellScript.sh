#!/bin/bash
#Criar um arquivo, escrever algo dentro, criar um diretorio, copiar para dentro do diretorio
echo "Criando o arquivo: arquivo.txt"; sleep 1; echo .; sleep 1; echo .
touch arquivo.txt
echo "Escrevendo mensagem: Escrever algo dentro"; sleep 1; echo .; sleep 1; echo .
echo "Escrever algo dentro" > arquivo.txt
echo "Criando o diretorio: Diretorio"; sleep 1; echo .; sleep 1; echo .
mkdir Diretorio
echo "Movendo o arquivo para o diretório"; sleep 1; echo .; sleep 1; echo .
mv arquivo.txt Diretorio
sleep 1; echo .; sleep 1; echo .
echo "Fim da operação"
