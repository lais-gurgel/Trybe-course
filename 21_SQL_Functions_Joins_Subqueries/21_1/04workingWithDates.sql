# Working with dates
-- Current Date
SELECT CURRENT_DATE(); -- YYYY-MM-DD
-- Current date and hour
SELECT NOW(); -- YYYY-MM-DD HH:MM:SS
-- We can find the difference in days between two dates using DATEDIFF and the time difference between two times using TIMEDIFF . In both cases, the second value is subtracted from the first to calculate the result.
-- 30, ou seja, a primeira data é 30 dias depois da segunda
SELECT DATEDIFF('2020-01-31', '2020-01-01'); -- 30, because the first date is 30 days after second date
-- -30, ou seja, a primeira data é 30 dias antes da segunda
SELECT DATEDIFF('2020-01-01', '2020-01-31'); -- 30, because the first date is 30 days before second date
SELECT TIMEDIFF('08:30:10', '09:30:10'); -- 01:00:00, because have an interval of 1 hour between the schedules
-- we can extract any part of a date from a column
SELECT DATE(event_date); -- YYYY-MM-DD
SELECT YEAR(event_date); -- Year
SELECT MONTH(event_date); -- Month
SELECT DAY(event_date); -- Day
SELECT HOUR(event_date); -- Hour
SELECT MINUTE(event_date); -- Minute
SELECT SECOND(event_date); -- Second
-- We can also use CURRENT_DATE() and NOW() in conjunction with the above commands to find dynamic results as follows
SELECT YEAR(CURRENT_DATE()); -- return the current year
SELECT HOUR(NOW()); -- return the current hour

# Exercises
-- Set up a query that displays the difference in days between '2030-01-20' and today
SELECT DATEDIFF('2030-01-20', CURRENT_DATE());
SELECT DATEDIFF('2030-01-20', NOW());
-- Assemble a query display the time difference between '10:25:45' and '11:00:00'
SELECT TIMEDIFF('10:25:45', '11:00:00');
