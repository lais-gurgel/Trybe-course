# In the sakila.film table, assemble a query that displays the title and year of release of the films in one column and give it the name Movie Release
SELECT CONCAT(title, ' ', release_year) AS 'Movie Release' FROM sakila.film;

# In the sakila.film table, create a query that displays the film's title and its indicative rating (PG, G, NC-17) in just one column. Name it Classification. Do not forget to leave a space between words so that they are legible.
SELECT CONCAT(title, ' ', rating) AS 'Classification' from sakila.film;

# In the sakila.address table, assemble a query that displays the street and district of each record in one column only, and name that column Address.
SELECT CONCAT(address, ' ', district) AS 'Address' from sakila.address;