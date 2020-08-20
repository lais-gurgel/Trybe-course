#!/bin/bash

FILE="/home/lais/exercicio3.sh"

if [ -e $FILE ]
then 
	echo "O caminho $FILE está habilitado!"
fi
if [ -w $FILE ]
then 
	echo "Você tem permissão para editar $FILE"
else
	echo "Você não tem permissão para editar $FILE"
fi
