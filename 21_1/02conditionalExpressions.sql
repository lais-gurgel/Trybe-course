# Conditional expressions
# Sintaxe IF
-- SELECT IF(condition, value_if_true, value_if_false);

SELECT first_name, IF(active, 'Cliente Ativo', 'Cliente Inativo') AS status
FROM sakila.customer;

# Sintaxe CASE
-- 	SELECT CASE
-- 	  WHEN condicao THEN valor
-- 	  ELSE valor padrao
-- 	END;

SELECT
    first_name,
    email,
    CASE
        WHEN email = 'MARY.SMITH@sakilacustomer.org' THEN 'Cliente de baixo valor'
        WHEN email = 'PATRICIA.JOHNSON@sakilacustomer.org' THEN 'Cliente de médio valor'
        WHEN email = 'LINDA.WILLIAMS@sakilacustomer.org' THEN 'Cliente de alto valor'
        ELSE 'Não classificado'
    END AS valor
FROM sakila.customer
LIMIT 10;

# Exercises
# Using the IF in the table sakila.film , display the movie id , title and an extra column called 'Do I know the movie?' , in which it must be evaluated whether the name of the film is ' ACE GOLDFINGER '. If so, display "I've already watched this movie". Otherwise, display "I don't know the movie". Don't forget to use an alias to rename the conditional column.
SELECT 
	film_id,
    title,
    IF(title = 'ACE GOLDFINGER', "I've already watched this movie", "I don't know the movie")
    AS 'Do I know the movie?'
FROM sakila.film;
# BONUS with CASE
SELECT 
	film_id,
	title,
	CASE 
		WHEN title = 'ACE GOLDFINGER' THEN "I've already watched this movie"
        ELSE "I don't know the movie"
	END AS 'Do I know the movie?'
FROM sakila.film;

# Using the CASE in the table sakila.film , display the title , the indicative classification ( rating ) and an extra column that we will call 'target audience' , in which we will classify the film according to the following acronyms:
-- G: "Free for all";
-- PG: "Not recommended for children under 10";
-- PG-13: "Not recommended for children under 13";
-- A: "Not recommended for children under 17";
-- If you don't fall into any of the previous classifications: "Prohibited for minors".
SELECT 
	title,
    rating,
    CASE 
		WHEN rating = 'G' THEN 'Free for all'
        WHEN rating = 'PG' THEN 'Not recommended for children under 10'
        WHEN rating = 'PG-13' THEN 'Not recommended for children under 13'
        WHEN rating = 'A' THEN 'Not recommended for children under 17'
        ELSE 'Prohibited for minors'
	END AS 'Target audience'
FROM sakila.film;
        