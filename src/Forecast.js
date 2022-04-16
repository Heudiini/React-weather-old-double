import React, { useState } from "react";
import axios from "axios";
import "./css/Forecast.css";

export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState(false);
  const [weather, setWeather] = useState({});

  function showTemp(response) {
    setResult(true);
    console.log(response.data.coord);
    setWeather({
      city: response.data.name,
      country: response.data.sys.country,
      weather: response.data,
      visibility: response.data.main.visibility,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      sunrise: response.data.sunrise,
      coord: response.data.coord,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,

      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `cf35cd803ef0202f5f034abcff722764`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showTemp);
    console.log(url);
  }

  function changeCity(event) {
    setCity(event.target.value);
    //console.log(event.target.value)
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Type a city" onChange={changeCity} />
      <input type="submit" value="Search" />
    </form>
  );

  if (result) {
    return (
      <div className="container">
        {form}

        <h3>
          {weather.city}, {weather.country}{" "}
        </h3>
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>

          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>

          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
