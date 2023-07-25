import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weather, setWeather] = useState({ ready: false });

  function handleResponse(response) {
    setWeather({
      ready: true,
      city: response.data.city,
      temperature: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      windSpeed: Math.round(response.data.wind.speed),
      humidity: response.data.temperature.humidity,
      iconElement: response.data.condition.icon,
    });
  }

  if (weather.ready) {
    return (
      <div className="weather-app">
        <form className="search-from">
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Type a city..."
                autofocus="on"
                className="form-control shadow-sm"
              ></input>
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Seach"
                className="form-control btn btn-primary shadow-sm"
              ></input>
            </div>
            <div className="col-3">
              <button>Current</button>
            </div>
          </div>
        </form>
        <div className="inner-container">
          <div>
            <h1>{weather.city}</h1>
            <h2>Date Time</h2>
            <div className="current-weather">
              <div className="current-icon">
                <img
                  src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${weather.iconElement}.png`}
                  alt="weather icon"
                />
                <span>{weather.temperature}</span>
                <span className="temp-unit">°F</span>
              </div>
            </div>
            <div className="row">
              <div className="col-6"></div>
              <div className="current-description col-6 text-capitalize">
                {weather.description}
              </div>
              <div className="col-6"></div>
              <div className="current-description col-6">
                Wind: {weather.windSpeed} mph
              </div>
              <div className="col-6"></div>
              <div className="current-description col-6">
                Humidity: {weather.humidity}%
              </div>
            </div>
          </div>
          <div className="weather-forecast"></div>
        </div>
      </div>
    );
  } else {
    const apiKey = "1adc8btb0637f4ff3663a3o5a9930eea";
    let city = "San Francisco";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
