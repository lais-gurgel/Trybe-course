# Using aggregate functions AVG , MIN , MAX , SUM and COUNT
-- There are certain types of calculations that are used very often and should not be done manually every time. So we have the following functions that analyze all records in a given column and return a value after comparing and evaluating all records.
-- Using the replacement_cost column
SELECT AVG(replacement_cost) FROM sakila.film; -- 19.984000 (Average between all registers)
SELECT MIN(replacement_cost) FROM sakila.film; -- 9.99 (Min value find)
SELECT MAX(replacement_cost) FROM sakila.film; -- 29.99 (Max value find)
SELECT SUM(replacement_cost) FROM sakila.film; -- 19984.00 (Sum of all registers)
SELECT COUNT(replacement_cost) FROM sakila.film; -- 1000 registers find (Quantity)

# Exercises
-- Build a query that displays:
-- The average duration of the films and give the column name 'Average Duration'
-- The minimum duration of films as 'Minimum Duration'
-- The maximum duration of films as 'Maximum Duration'
-- The sum of all durations as 'Total Watch Time'
-- And finally, the total number of films registered in the table sakila.film as 'Registered Films'
SELECT
	AVG(length) AS 'Average Duration',
	MIN(length) AS 'Minimum Duration',
    MAX(length) AS 'Maximum Duration',
    SUM(length) AS 'Total Watch Time',
    COUNT(*) AS 'Registered Films'
FROM sakila.film;