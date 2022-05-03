import React, { useState } from "react";
import TodayInfo from "./TodayInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./css/Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchData();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function searchData() {
    const apiKey = "cf35cd803ef0202f5f034abcff722764";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className=" row sm-6 Weather">
        {" "}
        <form onSubmit={handleSubmit}>
          <div>
            <div className="">
              <input
                type="seach"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div>
              <input type="submit" value="Search" className="btn btn-primary w-80" />
            </div>
          </div>
        </form>
        <div className="col sm-6">
          <TodayInfo data={weatherData} />
        </div>
        <div className="col sm-6">
          {" "}
          <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
      </div>
    );
  } else {
    searchData();
    return "Loading...";
  }
}
