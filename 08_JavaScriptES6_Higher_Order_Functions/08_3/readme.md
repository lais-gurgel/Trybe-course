JavaScript ES6 - Higher Order Functions - reduce

1 - Função Array.reduce para manipular e construir arrays;

O reduce é diferente das outras HOFs: ele possui um parâmetro a mais para a função que recebe como parâmetro. Esse parâmetro é chamado de acumulador, comumente referido como acc. E o que ele faz? Ele serve para acumular dentro de si os resultados das funções. Pense assim: caso não exista segundo parâmetro no reduce, para um array de cinco elementos, o reduce executará a função passada como parâmetro quatro vezes. O valor inicial de acc será a primeira posição do array. Na primeira iteração ele realiza a função com o primeiro valor do array que está em acc com a segunda posição que está em seu segundo parâmetro curr, que é chamado de current. Na segunda vez, acc conterá o retorno da primeira iteração, na terceira, o retorno da primeira e da segunda, e assim por diante. 

A função reducer é alimentada por quatro parâmetros:

Valor Anterior (acc) também chamado de accumulator
Valor Atual (cur)
Index Atual (idx)
Array original (src)
O valor de retorno da sua função reducer é atribuída ao acumulador. O acumulador, com seu valor atualizado, é repassado para cada iteração subsequente pelo array, que por fim, se tornará o valor resultante, único, final.