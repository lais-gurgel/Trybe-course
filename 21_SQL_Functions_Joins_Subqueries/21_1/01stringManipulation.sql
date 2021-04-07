# STRING MANIPULATION
SELECT UCASE(title) FROM sakila.film LIMIT 10;
SELECT LCASE(title) FROM sakila.film LIMIT 10;
SELECT REPLACE(title, 'ACADEMY', 'FOO') FROM sakila.film WHERE film_id = 1;
SELECT LEFT(title, 7) FROM sakila.film WHERE film_id = 1;
SELECT RIGHT(title, 8) FROM sakila.film WHERE film_id = 1;
SELECT LENGTH(title) FROM sakila.film WHERE film_id = 1;
SELECT SUBSTRING(title, 5, 2) FROM sakila.film WHERE film_id = 1;
SELECT SUBSTRING(title, 5) FROM sakila.film WHERE film_id = 1;

# Make a query that displays the word 'trybe' in UPPER CASE.
SELECT UCASE('trybe');

# Make a query that turns the sentence 'Você já ouviu falar do DuckDuckGo?' into 'Você já ouviu falar do Google?' .
SELECT REPLACE('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo', 'Google'); 

# Using a query , find how many characters we have in 'Uma frase qualquer' .
SELECT LENGTH('Uma frase qualquer');

# Extract and return the word "JavaScript" from the sentence 'A linguagem JavaScript está entre as mais usadas' .
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10);
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', -36, 10);

# Finally, standardize the string 'RUA NORTE 1500, SÃO PAULO, BRASIL' so that your information is all in lower case.
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRAZIL');