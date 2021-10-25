import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="overview">
        <h2>{props.data.city}</h2>
      </div>
      <div className="row col-6">
        <div className="clearfix weather-temperature">
          <div className="float-right m-0 p-0">
            <WeatherIcon code={props.data.icon} size={52} />

            <WeatherTemperature celsius={props.data.temperature} />
            <ul>
              <li>
                <FormattedDate date={props.data.date} />
              </li>
              <li>{props.data.description}</li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
