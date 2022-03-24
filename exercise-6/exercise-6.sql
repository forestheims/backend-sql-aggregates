-- customer ranking by total amount spent on *rentals*
-- include email and rank
-- use RANK ORDER BY the SUM of the amount in descending order
SELECT
    email,
    RANK() OVER (ORDER BY SUM(amount) DESC)
FROM
    customer
LEFT JOIN
    rental
ON
    customer.customer_id = rental.customer_id
LEFT JOIN
    payment
ON
    payment.rental_id = rental.rental_id
GROUP BY
    email;