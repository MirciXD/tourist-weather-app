import React, { useState, useEffect } from 'react';
import { get7DayForecast } from '../services/weatherAPI';

const WeatherForecast = ({ coordinates, placeName }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError(null);
        const weatherData = await get7DayForecast(
          coordinates.lat, 
          coordinates.lon
        );
        setWeather(weatherData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [coordinates]);

  if (loading) {
    return (
      <div className="weather-section">
        <h3>Prognoza meteo pentru {placeName}</h3>
        <div className="loading">Se încarcă datele meteo...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="weather-section">
        <h3>Prognoza meteo pentru {placeName}</h3>
        <div className="error">Eroare: {error}</div>
      </div>
    );
  }

  return (
    <div className="weather-section">
      <h3>Prognoza meteo pentru {placeName} - următoarele 5 zile</h3>
      <div className="weather-grid">
        {weather.map((day, index) => (
          <div key={index} className="weather-day">
            <div className="day-name">
              {index === 0 ? 'Astăzi' : 
               index === 1 ? 'Mâine' : 
               new Date(day.date).toLocaleDateString('ro-RO', { weekday: 'short' })}
            </div>
            <img 
              src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
              alt={day.description}
              className="weather-icon"
            />
            <div className="temperature">{day.temp}°C</div>
            <div className="description">{day.description}</div>
            <div className="details">
              <small>{day.humidity}% | {day.windSpeed} m/s</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
