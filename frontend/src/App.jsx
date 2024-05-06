import React, { useState } from 'react';
import axios from 'axios';
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloudRain, faSnowflake, faCloud, faWind } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = 'e75f6ac6e13e8742e096dbdb8698357c'; // Replace with your OpenWeatherMap API key

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
      setError(null);
    } catch (error) {
      setError('Location not found');
      setWeather(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  const getWeatherIcon = (weatherCondition) => {
    switch (weatherCondition) {
      case 'Clear':
        return <FontAwesomeIcon icon={faSun} />;
      case 'Rain':
        return <FontAwesomeIcon icon={faCloudRain} />;
      case 'Snow':
        return <FontAwesomeIcon icon={faSnowflake} />;
      case 'Clouds':
        return <FontAwesomeIcon icon={faCloud} />;
      case 'Wind':
        return <FontAwesomeIcon icon={faWind} />;
      default:
        return <FontAwesomeIcon icon={faSun} />;
    }
  };

  return (

    <div className="App">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={handleInputChange}
        />
        <button type="submit">Get Weather</button>
      </form>
      {error && <p>{error}</p>}
      {weather && (
        <div>
          <h2>{weather.name}, {weather.sys.country}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].main}</p>
          <div className="weather-icon">{getWeatherIcon(weather.weather[0].main)}</div>
        </div>
      )}
    </div>

    
  );
}

export default App;
