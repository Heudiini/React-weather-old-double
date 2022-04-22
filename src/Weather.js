import React, { useState } from "react";
import axios from "axios";
import "./css/Weather.css";
import Icon from "./Icon";

export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function showTemp(response) {
    console.log(response.data);
    setResult(true);

    setWeatherData({
      city: response.data.name,
      country: response.data.sys.country,
      weather: response.data,
      visibility: response.data.main.visibility,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      sunrise: response.data.sunrise,
      coord: response.data.coord,
      icon: response.data.weather[0].icon,

      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = `cf35cd803ef0202f5f034abcff722764`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showTemp);
    console.log(url);
  }

  function changeCity(event) {
    setCity(event.target.value);
    //console.log(event.target.value)
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Type a city" onChange={changeCity} className="searchBox" />
      <input type="submit" value="🔍" autoFocus="on" className="btnSubmit" />
    </form>
  );

  if (result) {
    return (
      <div className=" ">
        {form}
        <h3 className="text-capitalize">
          {" "}
          {weatherData.city}, {weatherData.country}{" "}
        </h3>
        <div className="row sm-12">
          <div className="col sm-4">
            {" "}
            <div className="TodayIcon ">
              <Icon icon={weatherData.icon} />
            </div>
          </div>

          <div className="col sm-4 data">
            <ul>
              <li>Temperature: {Math.round(weatherData.temperature)}°C</li>
              <li>Description: {weatherData.description}</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)}km/h</li>
            </ul>
          </div>
        </div>{" "}
      </div>
    );
  } else {
    return form;
  }
}
