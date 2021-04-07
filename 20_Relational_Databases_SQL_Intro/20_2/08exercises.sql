#  Displays all the movies registered in the database
SELECT * FROM sakila.film;

# Displays only the name of the films, their year of release and their rating
SELECT title, release_year, rating FROM sakila.film;

# Displays only the unique surnames registered in the bank sakila
SELECT DISTINCT(last_name) FROM sakila.actor;

# Create queries to discover the following:
## How many films do we have registered?
SELECT COUNT(*) FROM sakila.film;
## How many customers do we have registered?
SELECT COUNT(*) FROM sakila.customer;
## How many unique surnames do we have in the database?
SELECT COUNT(DISTINCT(last_name)) FROM sakila.actor;
## How many categories of films does the bank sakila have?
SELECT COUNT(*) FROM sakila.category;
## How many countries are served by sakila?
SELECT COUNT(*) FROM sakila.country;

# Go to the table language of sakila and create a survey that shows the five registered languages , but do not show the language english
SELECT DISTINCT(name) FROM sakila.language
LIMIT 5 OFFSET 1;

# Go to the table film and select all the data in the table
SELECT * FROM sakila.film;

# Create a query to find the first 20 films , including the title , year of release , duration , rating and replacement cost . Sort the results by the films with the longest duration and then at the lowest replacement cost.
SELECT title, release_year, length, rating, replacement_cost FROM sakila.film
ORDER BY length DESC, replacement_cost ASC
LIMIT 20;


