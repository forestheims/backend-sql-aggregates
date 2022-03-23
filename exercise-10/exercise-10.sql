-- CUBE of amount made per year, month, day, and film rating
-- similar to exercise 9 but include the rating with joins
-- replace ROLLUP with CUBE
SELECT
   EXTRACT(YEAR FROM payment_date) AS y,
   EXTRACT(MONTH FROM payment_date) AS m,
   EXTRACT(DAY FROM payment_date) AS d,
   rating,
   SUM(amount)
FROM
    payment
LEFT JOIN
    rental
ON
    payment.rental_id = rental.rental_id
LEFT JOIN
    inventory
ON
    rental.inventory_id = inventory.inventory_id
LEFT JOIN
    film
ON
    film.film_id = inventory.film_id
GROUP BY
    CUBE(y, m, d, rating)
ORDER BY
    rating, y, m, d;