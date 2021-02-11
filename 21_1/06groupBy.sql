# GROUP BY
-- The results of a query can be grouped by one or more columns using o GROUP BY , which means that all records that have the same value for those columns are displayed together. Can GROUP BY also be used in conjunction with the aggregation functions we saw earlier.
-- SELECT column(s) FROM table
-- GROUP BY column(s);

-- One of the ways we can use GROUP BY is to group the records by the value of a column, displaying only one record of each value, as is done with first_name the following column
SELECT first_name FROM sakila.actor
GROUP BY first_name;
-- If you run the previous query in your database sakila , you will see that 108 results are returned. However, if you remove the GROUP BY , as in the query below, you will notice that there are 200 records in the table actor 
SELECT first_name FROM sakila.actor;

-- Average length of films grouped by indicative rating
SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;
-- Minimum replacement value for films grouped by indicative rating
SELECT rating, MIN(replacement_cost)
FROM sakila.film
GROUP BY rating;
-- Maximum replacement value for films grouped by indicative rating
SELECT rating, MAX(replacement_cost)
FROM sakila.film
GROUP BY rating;
-- Total cost of replacing films grouped by indicative rating
SELECT rating, SUM(replacement_cost)
FROM sakila.film
GROUP by rating;
