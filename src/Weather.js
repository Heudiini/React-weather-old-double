import React, { useState } from "react";
import TodayInfo from "./TodayInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./css/Weather.css";
import clearImage from "./images/clear.gif";
import Clouds from "./images/dance.gif";
import outsideDay from "./images/outsideDay.gif";
import rainImage from "./images/rain.gif";
import snowImage from "./images/snow.webp";
import thundergif from "./images/thunderstorm.gif";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  const weatherOpinions = {
    Clear: "It's a gread day to spend time outside!",
    Clouds: "It's a gread day to spend time outside! or at least good enough don't you agree?",
    Mist: "You hav etwo options, stay inside or you could also take a little walk, just wear bit more",
    Smoke: "If you want you can have a walk? Also it's not obligation",
    Haze: "contrasts are best when It's a bit blurry? or was it...",
    Dust: "openweather data says it's dusty, do you see any dust?",
    Fog: "today you could imagine yourself in London, unless you're already there ....",
    Sand: "Opendata informs about Sand? Is it safe to go outside?",
    Ash: "Its Ashy weather acordin opendata weather... well..",
    Squal: "Its Squaly? weather acordin opendata weather... well..",
    Tornado: "Tornado, why would you ask if you like to go outside. ",
    Snow: "Imagine if you were in Lapland, unless you are, envy you.",
    Rain: "Snow would be lot better, who likes rain.. ",
    Drizzle: "This is way more serious than normal rain..",
    Thunderstorm: "Just lets agree to stay inside ok ?",
  };

  const imageMapping = {
    Clear: clearImage,
    Clouds: thundergif,
    Mist: outsideDay,
    Smoke: Clouds,
    Haze: Clouds,
    Dust: rainImage,
    Fog: rainImage,
    Sand: rainImage,
    Ash: rainImage,
    Squal: rainImage,
    Tornado: thundergif,
    Snow: snowImage,
    Rain: rainImage,
    Drizzle: rainImage,
    Thunderstorm: thundergif,
  };

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      weatherSituation: response.data.weather[0].main,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
    console.log(weatherData.weatherSituation);
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
      <div className=" row  Weather">
        {" "}
        <form onSubmit={handleSubmit} className="form-inline">
          <input
            className="form-control form-control-sm  w-50"
            type="text"
            placeholder="Your Town?"
            autoFocus="on"
            onChange={handleCityChange}
            aria-label="Search"
          />
        </form>
        <div className="col-lg-8 ">
          <TodayInfo data={weatherData} />
          <p className="opinions">{weatherOpinions[weatherData.weatherSituation]}</p>
          <div
            className="containerApp"
            style={{
              backgroundImage: `url(${imageMapping[weatherData.weatherSituation]})`,
            }}
          >
            <div className="giphyDiv">
              <iframe
                src="https://giphy.com/embed/SwNG0NVmA1AtO"
                className="giphy-embed"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="col">
          <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
      </div>
    );
  } else {
    searchData();
    return "Loading...";
  }
}
