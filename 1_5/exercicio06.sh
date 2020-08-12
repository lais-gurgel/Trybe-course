#!/bin/bash

CAMINHO=$1

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
