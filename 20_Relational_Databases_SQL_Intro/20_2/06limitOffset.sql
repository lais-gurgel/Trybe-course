# Query + LIMIT quantity_of_results
SELECT * FROM sakila.rental LIMIT 10;

# Query + LIMIT quantity_of_lines OFFSET quantity_of_lines
SELECT * FROM sakila.rental LIMIT 10 OFFSET 3;
# show the result after the line 3 (NOT INCLUDE)

SELECT * FROM sakila.actor LIMIT 10 OFFSET 5;
# show the result after the line 5 (NOT INCLUDE)