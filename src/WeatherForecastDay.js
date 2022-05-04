import React from "react";
import Icon from "./Icon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return days[day];
  }

  return (
    <div>
      <div className="row  WeatherForecast-day">{day()}</div>
      <Icon code={props.data.weather[0].icon} size={30} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">{maxTemperature()}</span>
        <span className="WeatherForecast-temperature-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
