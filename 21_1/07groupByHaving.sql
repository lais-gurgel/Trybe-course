# Filtrando Resultados do GROUP BY com HAVING
-- A query a seguir busca o nome e a quantidade de nomes cadastrados na tabela sakila.actor e os agrupa por quantidade. Por fim, filtramos os resultados agrupados usando o HAVING , para que somente os nomes que estão cadastrados duas ou mais vezes sejam exibidos.
SELECT first_name, COUNT(*)
FROM sakila.actor
GROUP BY first_name
HAVING COUNT(*) > 2;

-- Ou, melhor ainda, usando o AS para dar nomes às colunas de agregação,
-- melhorando a leitura do resultado
SELECT first_name, COUNT(*) AS nomes_cadastrados
FROM sakila.actor
GROUP BY first_name
HAVING nomes_cadastrados > 2;

-- Observação: o alias não funciona com strings para o HAVING,
-- então use o underline ("_") para separar palavras
-- Ou seja, o exemplo abaixo não vai funcionar
SELECT first_name, COUNT(*) AS 'nomes cadastrados'
FROM sakila.actor
GROUP BY first_name
HAVING 'nomes cadastrados' > 2;

# Exercises
-- Usando a query a seguir, exiba apenas as durações médias que estão entre 115.0 a 121.50. Além disso, dê um alias (apelido) à coluna gerada por AVG(length) , de forma que deixe a query mais legível. Finalize ordenando os resultados de forma decrescente.
    SELECT rating, AVG(length)
    FROM sakila.film
    GROUP BY rating;
SELECT rating, AVG(length) AS average_length
FROM sakila.film
GROUP BY rating
HAVING average_length BETWEEN 115 AND 121.50
ORDER BY average_length DESC;
-- Usando a query a seguir, exiba apenas os valores de total de substituição de custo que estão acima de $3950.50. Dê um alias que faça sentido para SUM(replacement_cost) , de forma que deixe a query mais legível. Finalize ordenando os resultados de forma crescente
	SELECT rating, SUM(replacement_cost)
    FROM sakila.film
    GROUP by rating;
SELECT rating, SUM(replacement_cost) AS total_replacement_cost
FROM sakila.film
GROUP BY rating
HAVING total_replacement_cost > 3950.50
ORDER BY total_replacement_cost;