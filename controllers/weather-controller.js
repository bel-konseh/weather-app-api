
import {
  fetchLatestWeatherByCityName,
  fetchForecastByCityId,
} from '../repositories/weather-repo.js'

export const getWeatherByCityName = async (req, res) => {
  const { city } = req.query
  if (!city) return res.status(400).json({
      error: 'City is required' 
    })

  try {
    const data = await fetchLatestWeatherByCityName(city);
    if (!data) return res.status(404).json({ 
      message: 'Weather details not found' 
    })

    res.json(data)

  } catch (err) {

    res.status(500).json({
        error: `Server error: ${err}` 
      })
  }
}

export const getForecastByCityId = async (req, res) => {

  const { cityId } = req.body

  try {
    const data = await fetchForecastByCityId(cityId);

    if (!data || data.length === 0) {

      return res.status(404).json({ 
        message: 'Forecast for specified city  not found'
      });

    }

    res.json(data)

  } catch (err) {

    res.status(500).json({
       error: 'Server error',
    })
  }
}
