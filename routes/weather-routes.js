import express from "express";

import {
  getWeatherByCityName,
  getForecastByCityId,
} from '../controllers/weather-controller.js'

export const router = express.Router()

router.get('/', getWeatherByCityName);
router.get('/:cityId/forecast', getForecastByCityId);



