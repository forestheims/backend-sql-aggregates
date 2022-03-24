-- the total run time of all inventory items if they were all played back to back
SELECT
    SUM(length)
FROM
    inventory
LEFT JOIN
    film
ON
    inventory.film_id = film.film_id;