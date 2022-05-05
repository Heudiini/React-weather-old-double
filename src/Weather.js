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
    Clouds: "It's a gread day to spend time outside! ..or at least good enough don't you agree?",
    Mist: "Mist, mysterious mist..",
    Smoke: "If you want you can have a walk? Also it's not obligation",
    Haze: "Contrasts are best when It's a bit blurry? or was it opposite...",
    Dust: "Openweather data says it's dusty, you see any dust?",
    Fog: " fog, you could imagine yourself in London, unless you're already there ....",
    Sand: "Opendata informs about Sand? Is it even safe to go outside?",
    Ash: "It's Ashy weather according opendata weather... well..",
    Squal: "It's Squaly weather? What does that even mean? ",
    Tornado: "Tornado, why would you even ask if you should go outside. ",
    Snow: "Imagine if you were in Lapland, unless you are, envy you.",
    Rain: " Even snowing would be better, who likes rain.. ",
    Drizzle: "This is way more serious than normal rain..",
    Thunderstorm: "Just lets agree to stay inside ok ?",
  };

  const imageMapping = {
    Clear: clearImage,
    Clouds: Clouds,
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
          <div className="row">
            <div>
              <TodayInfo data={weatherData} />
              <div
                className=" containerApp"
                style={{
                  backgroundImage: `url(${imageMapping[weatherData.weatherSituation]})`,
                }}
              >
                <div className="  giphyDiv">
                  <iframe className="giphy"></iframe>
                </div>
              </div>{" "}
              <p className="opinions">{weatherOpinions[weatherData.weatherSituation]}</p>
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
