import React from "react";

export default function showWeatherTemperature(props) {
  console.log(props.celsius);
  return (
    <div>
      <h3>
        {" "}
        näkyykö mitään!!!
        {Math.round(props.celsius)}
        <span>°C</span>
        <span>F</span>
      </h3>
    </div>
  );
}
