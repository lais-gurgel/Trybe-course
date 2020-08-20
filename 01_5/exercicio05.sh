#!/bin/bash

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
