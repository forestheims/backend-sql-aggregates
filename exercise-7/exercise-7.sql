-- customer ranking by total film time watched
-- similar to exercise 6
SELECT
    email,
    RANK() OVER (ORDER BY SUM(length) DESC)
FROM
    customer
LEFT JOIN
    rental
ON
    customer.customer_id = rental.customer_id
LEFT JOIN
    inventory
ON
    rental.inventory_id = inventory.inventory_id
LEFT JOIN
    film
ON
    film.film_id = inventory.film_id
GROUP BY
    email;