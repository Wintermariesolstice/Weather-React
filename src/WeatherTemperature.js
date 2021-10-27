import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToF(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToC(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <strong> {Math.round(props.celsius)}</strong>
        <span className="unit">
          {" "}
          ºC |{" "}
          <a href="/" onClick={convertToF}>
            ºF
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <strong> {Math.round(fahrenheit)}</strong>
        <span className="unit">
          {"  "}
          <a href="/" onClick={convertToC}>
            ºC
          </a>{" "}
          | ºF
        </span>
      </div>
    );
  }
}
