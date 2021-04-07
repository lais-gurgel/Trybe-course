SELECT district, COUNT(district) FROM sakila.address
WHERE district = 'Alberta';
# district Alberta COUNT(DISTRICT) 2

SELECT district, COUNT(*) FROM sakila.address
GROUP BY district;
# district and number of results

SELECT COUNT(*) FROM sakila.rental;
# the rental table have 16044 lines