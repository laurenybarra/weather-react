import React from "react";
import FormatDate from "./FormatDate";
import WeatherTemp from "./WeatherTemp";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
    return (
        <div class="row">
          <div class="weather-today col">
            <h1 class="city">{props.data.city}</h1>
            <h4 id="description" className="text-capitalize">{props.data.description}</h4>
            <WeatherIcon code={props.data.icon} />
            <WeatherTemp celsius={props.data.temperature} />
          </div>
          <div class="weather-conditions col">
            <h1 id="update">
              Last updated on: <FormatDate date={props.data.date} />
              <br />
              <span class="date"></span>
            </h1>
            <h2 class="wind">
              Wind: <span id="wind">{Math.round(props.data.wind)}</span> km/h
            </h2>
            <h2 class="humidity">
              Humidity: <span id="humidity">{Math.round(props.data.humidity)}</span>%
            </h2>
          </div>
        </div>
    );
}