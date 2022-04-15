import React from "react";
import "./css/Forecast.css";

export default function Forecast() {
  let weatherData = {
    city: "London",
    day: "Friday",
    temperature: "12",
  };
  return (
    <div>
      <div className="row">
        <div className="col-sm-6 current">
          <div className="card sm-6 currentBody">
            <div className="col townTitle" id="theTown">
              <h2>{weatherData.city} </h2>
            </div>

            <div className="today-area">
              <h5 id="current-time">{weatherData.day} 21:00</h5>
              <p>
                <span id="description"></span> Lovely day with light showers
                <br />
                <span>Feels like: </span>
                <span id="feels-like">30</span>
                <span>°</span>
              </p>
              <span className="current-area">
                <div className="clearfix weather-temperature">
                  <span className="temperature" id="temperature">
                    {weatherData.temperature}
                  </span>
                  <span className="units">
                    <a href="#" id=" cel" className="active">
                      °C
                    </a>{" "}
                    |
                    <a href="#" id="fah">
                      °F
                    </a>
                  </span>

                  <div className="icon">
                    <img src="https://www.wunderground.com/static/i/c/v4/30.svg" alt="raining" />
                  </div>
                </div>
                <p>
                  <span>Humidity: </span>
                  <span className="humidity">60</span>
                  <span> %</span>
                  <br />
                  <span>Wind: </span>
                  <span className="wind">6</span>
                  <span> m/s</span>
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
