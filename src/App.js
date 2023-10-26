import React, { useState, useEffect } from 'react';
import "./App.css";

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (city) {
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1d948668927d677488db4a4793e32aae`
          );
          if (response.ok) {
            const data = await response.json();
            setWeatherData(data);
            setError(null); // Clear any previous errors
          } else {
            setError('City not found. Please check the city name.');
          }
        } catch (error) {
          console.error('Error fetching weather data', error);
          setError('An error occurred while fetching weather data.');
        }
      }
    };

    fetchData();
  }, [city]);

  return (
    <div className='App'>
      <div>
        <input
          placeholder=" Enter your location"
          className="input"
          type="text"
          onChange={handleCityChange}
        />
      </div>
      {error ? (
        <p className="error-message">{error}</p>
      ) : weatherData ? (
        <div>
          <h2 className='location'>{weatherData.name}, {weatherData.sys.country}</h2>
          <p className='temp'>{weatherData.main.temp}°C</p>
          <p className='description'>Weather: {weatherData.weather[0].description}</p>
          <p className='bottom'>Humidity: {weatherData.main.humidity}%</p>
          <p className='bottom2'>Wind Speed: {weatherData.wind.speed} m/s</p>
         
        </div>

        
      ) : (
        <p className='header'>Enter a city name to get weather information.</p>
        
      )}


     
    </div>
  );
};

export default Weather;
