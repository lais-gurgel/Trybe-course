#!/bin/bash
#  Escreva um Shell Script que peça ao usuário um caminho de arquivo ou diretório e, em seguida, imprima na tela se ele é um arquivo comum, um diretório, ou outro tipo de arquivo. Depois, faça um comando de listagem no arquivo/diretório usando a opção de listagem detalhada.

echo "Escreva um caminho de arquivo ou diretório"
read CAMINHO

#arquivo comum, diretorio ou outro tipo de arquivo
if [ -f $CAMINHO ] 
then
	echo "$CAMINHO É um arquivo normal"
elif [ -d $CAMINHO ]
 then
	echo "$CAMINHO é um diretório"
else
	echo "$CAMINHO é outro tipo de arquivo"
fi

ls -l $CAMINHO
