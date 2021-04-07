# Math Functions
# Addition, Subtraction, Multiplication, Division
SELECT 5 + 5;
SELECT 5 - 5;
SELECT 5 * 5;
SELECT 5 / 5;
-- Using columns
SELECT rental_duration + rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration - rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration / rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration * rental_rate FROM sakila.film LIMIT 10;

# Division of integers with DIV and how to find your remains with MOD
-- The DIV returns the integer result of a division by ignoring the decimals of a number.
SELECT 10 DIV 3; -- 3
SELECT 10 DIV 2; -- 5
SELECT 14 DIV 3; -- 4
SELECT 13 DIV 2; -- 6
-- The operator MOD returns the remainder of a division as a result.
SELECT 10 MOD 3; -- 1
SELECT 10 MOD 2; -- 0
SELECT 14 MOD 3; -- 2
SELECT 13 MOD 2; -- 1
SELECT 10.5 MOD 2; -- 0.5, because 2 + 2 + 2 + 2 + 2 = 10, rest 0.5

# Challenges with DIV and MOD
-- Tip: Even numbers are those that can be divided into two equal parts. That is, they are those whose division by 2 returns remainder 0.
-- Set up a query using the MOD together with the IF to find out if the value 15 is even or odd. Call this column 'Even or Odd' , where it can say 'Even' or 'Odd'.
SELECT IF(15 MOD 2 = 0, 'Even', 'Odd') AS 'Even or Odd';
-- We have a cinema room that holds 220 people. How many complete groups of 12 people can we take to the cinema without anyone being left out?
SELECT 220 DIV 12; -- 18
-- Using the previous result, answer the following question: do we have places left? If so, how many?
SELECT 220 MOD 12; -- 4

# Rounding Values
-- O ROUND rounds numbers up to their decimal part. If it is greater than or equal to 0.5, the result is rounding up. Otherwise, rounding down occurs
SELECT ROUND(10.4925); -- 10
SELECT ROUND(10.5136); -- 11
SELECT ROUND(-10.5136); -- -11
SELECT ROUND(10.4925, 2); -- 10.49
SELECT ROUND(10.4925, 3); -- 10.493
-- Rounding up always can be done with CEIL :
SELECT CEIL(10.51); -- 11
SELECT CEIL(10.49); -- 11
SELECT CEIL(10.2); -- 11
-- Rounding down always can be done with FLOOR :
SELECT FLOOR(10.51); -- 10
SELECT FLOOR(10.49); -- 10
SELECT FLOOR(10.2); -- 10

# Exponentiation and Square Root
-- Raising a number X to the power Y using the function POW :
SELECT POW(2, 2); -- 4
SELECT POW(2, 4); -- 16
-- Finding the square root of a value using SQRT :
SELECT SQRT(9); -- 3
SELECT SQRT(16); -- 4

# Generating random values
-- Random number between 0 and 1
SELECT RAND();
-- Random number between 7 and 13
SELECT FLOOR(7 + (RAND() * 6));
-- Calculate (7 + (0.0 a 1.0 * 6))

# Exercises
-- Set up a query that generates a value between 15 and 20
SELECT FLOOR(15 + (RAND() * 5));
-- Set up a query that displays the rounded value of 15.75 with an accuracy of 5 decimal places.
SELECT ROUND(15.75, 5);
-- We have an average of 39,494 shirt sales per month. What is the approximate value below that average?
SELECT FLOOR(39.494);
-- We have an enrollment fee of 85.234% in the photography course for beginners. What is the approximate value above this average?
SELECT CEIL(85.234);