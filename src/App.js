import './App.css';
import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function App(props) {
  const [info, setInfo] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setInfo({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  function search() {
    const apiKey = "50ea266795ff34ae2a3920026adbb08c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function enterCity(event) {
    event.preventDefault();
    search();
  }

  function cityChange(event) {
    setCity(event.target.value);
  }

  if (info.ready) {
    return (
    <div className="App">
      <div class="container">
        <div class="heading">
          <form id="search-city" onSubmit={enterCity}>
            <input type="text" placeholder="Enter city" onChange={cityChange} />
            <button id="search-button">Search</button>
          </form>
          <WeatherInfo data={info} />
        </div>
      </div>
      <p id="github">
        <a href="https://github.com/laurenybarra/weather-react">
          Open-source code 
        </a> 
          {""} by Lauren Ybarra
      </p>
    </div>
  );
  } else {
      search();
      return "Loading...";
  }
  
}

