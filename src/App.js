import './App.css';

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="heading">
          <form id="search-city">
            <input type="text" placeholder="Enter city" />
            <button id="search-button">Search</button>
          </form>
        </div>
        <div class="row">
          <div class="weather-today col">
            <h1 class="city">Los Angeles</h1>
            <h4 id="description">Sunny</h4>
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
              alt="Clear"
              id="icon"
            />
            <h1 id="current-degree">70°</h1>
            <h4 class="cel-fahr">
              <a href="." id="celsius" class="on">
                C°
              </a>
              |
              <a href="." id="fahrenheit">
                F°
              </a>
            </h4>
          </div>
          <div class="weather-conditions col">
            <h1 id="update">
              Last updated on: Monday 16:25
              <br />
              <span class="date"></span>
            </h1>
            <h2 class="wind">
              Wind: <span id="wind">1</span>km/h
            </h2>
            <h2 class="humidity">
              Humidity: <span id="humidity">50</span>%
            </h2>
          </div>
        </div>
      </div>
      <p id="github">
        <a href="https://github.com/laurenybarra/weatherApp.git">
          Open-source code 
        </a> 
          by Lauren Ybarra
      </p>
    </div>
  );
}

