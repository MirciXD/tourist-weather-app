import axios from 'axios';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const get7DayForecast = async (lat, lon) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&cnt=40`
    );
    
    const dailyForecasts = [];
    const processedDates = new Set();
    
    response.data.list.forEach(item => {
      const date = new Date(item.dt * 1000).toDateString();
      if (!processedDates.has(date) && dailyForecasts.length < 7) {
        dailyForecasts.push({
          date: date,
          temp: Math.round(item.main.temp),
          description: item.weather[0].description,
          icon: item.weather[0].icon,
          humidity: item.main.humidity,
          windSpeed: item.wind.speed
        });
        processedDates.add(date);
      }
    });
    
    return dailyForecasts;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw new Error('Nu s-au putut încărca datele meteo');
  }
};