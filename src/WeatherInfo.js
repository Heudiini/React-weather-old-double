////////////////////////
import React from "react";
import FormattedDate from "./FormattedDate";
import Icon from "./Icon";
import "./css/Weather.css";

import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="TheCity col-6">{props.data.city}</div>

        <div className=" col-6 text-capitalize">
          {props.data.description} <FormattedDate date={props.data.date} />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="clearfix">
            <div className="">
              <Icon code={props.data.icon} size={60} />
            </div>
          </div>
        </div>
        <div className=" col ">
          <WeatherTemperature celsius={props.data.temperature} />
        </div>

        <div className="col details">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
