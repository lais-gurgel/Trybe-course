SELECT * FROM sakila.address
ORDER BY address;
# Are the same:
SELECT * FROM sakila.address
ORDER BY address ASC;
# ASC is Default

SELECT * FROM sakila.address
ORDER BY address DESC, district ASC;