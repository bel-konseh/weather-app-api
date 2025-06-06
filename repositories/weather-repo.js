
import { db } from "../config/db.js"

export const fetchLatestWeatherByCityName = async (cityName) => {
  const result = await db.query(
    `
    SELECT w.date, w.temperature, w.humidity, w.description,
           c.name as city, c.country, c.longitude, c.latitude
    FROM weather w
    JOIN cities c ON c.id = w.city_id
    WHERE LOWER(c.name) = LOWER($1)
    `,
    [cityName]
  );
  return result.rows[0];
};

export const fetchForecastByCityId = async (cityId) => {
  const result = await db.query(
    `
    SELECT w.date, w.temperature, w.humidity, w.description
    FROM weather w
    WHERE w.city_id = $1 AND w.date >= CURRENT_DATE
    ORDER BY w.date ASC
    `,
    [cityId]
  );
  return result.rows;
};
