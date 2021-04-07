# Create the database:
-- CREATE DATABASE `School`;
-- CREATE TABLE IF NOT EXISTS School.Students (
--     `Nome` VARCHAR(7) CHARACTER SET utf8,
--     `Idade` INT
-- );
-- INSERT INTO School.Students VALUES
--     ('Rafael', 25),
--     ('Amanda', 30),
--     ('Roberto', 45),
--     ('Carol', 19),
--     ('Amanda', 25);

# Build a query to find unique pairs of names and ages
SELECT DISTINCT nome, idade from School.Students;
# return all results

# Set up a query to find only the unique names.
SELECT DISTINCT nome from School.Students;
# Rafael, Amanda, Roberto, Carol

# Set up a query to find only the unique ages.
SELECT DISTINCT idade from School.Students;
# 25, 30, 45, 19