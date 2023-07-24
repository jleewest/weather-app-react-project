import React from "react";

export default function Weather() {
  return (
    <div className="Weather">
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
        <h1>Location</h1>
        <h2>Date Time</h2>
        <div className="current-weather">
          <div className="current-icon">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-night.png"
              alt="cloudy"
            />
            <span>Current Temperature</span>
            <span className="temp-unit">°F</span>
          </div>
        </div>
        <div className="row">
          <div className="col-6"></div>
          <div className="current-description col-6">Overcast</div>
          <div className="col-6"></div>
          <div className="current-description col-6">Wind</div>
          <div className="col-6"></div>
          <div className="current-description col-6">Humidity</div>
        </div>
        <div className="weather-forecast"></div>
      </div>
    </div>
  );
}
