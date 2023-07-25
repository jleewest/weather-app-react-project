import React from "react";

export default function WeatherInfo(props) {
  return (
    <div className="weather-info">
      <h1>{props.data.city}</h1>
      <h2>Date Time</h2>
      <div className="current-weather">
        <div className="current-icon">
          <img
            src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.data.iconElement}.png`}
            alt="weather icon"
          />
          <span>{props.data.temperature}</span>
          <span className="temp-unit">°F</span>
        </div>
      </div>
      <div className="row">
        <div className="col-6"></div>
        <div className="current-description col-6 text-capitalize">
          {props.data.description}
        </div>
        <div className="col-6"></div>
        <div className="current-description col-6">
          Wind: {props.data.windSpeed} mph
        </div>
        <div className="col-6"></div>
        <div className="current-description col-6">
          Humidity: {props.data.humidity}%
        </div>
      </div>
    </div>
  );
}
