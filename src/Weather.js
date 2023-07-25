import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeather({
      ready: true,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      temperature: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      windSpeed: Math.round(response.data.wind.speed),
      humidity: response.data.temperature.humidity,
      iconElement: response.data.condition.icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "1adc8btb0637f4ff3663a3o5a9930eea";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weather.ready) {
    return (
      <div className="weather-app">
        <form onSubmit={handleSubmit} className="search-from">
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Type a city..."
                autofocus="on"
                className="form-control shadow-sm"
                onChange={handleCityChange}
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
          <WeatherInfo data={weather} />
          <div className="weather-forecast"></div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
