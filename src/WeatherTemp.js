import React, { useState } from "react";

export default function WeatherInfo(props) {
    const [unit, setUnit] = useState("celsius");
    function convertToFahr(event) {
        event.preventDefault();
        setUnit("fahrenheit")
    }
    function convertToCel(event) {
        event.preventDefault();
        setUnit("celsius");
    }
    if (unit === "celsius") {
        return (
            <div className="WeatherTemp">
                <h1 id="current-degree">{Math.round(props.celsius)}</h1>
                <h4 class="cel-fahr">
                <a href="." id="celsius" class="on">
                    C°
                </a>
                |
                <a href="." id="fahrenheit" onClick={convertToFahr}>
                    F°
                </a>
                </h4>
            </div>
        )
    } else {
        let fahrenheit = (props.celsius * 9) / 5 + 32
        return (
            <div className="WeatherTemp">
                <h1 id="current-degree">{Math.round(fahrenheit)}</h1>
                <h4 class="cel-fahr">
                <a href="." id="celsius" onClick={convertToCel}>
                    C°
                </a>
                |
                <a href="." id="fahrenheit">
                    F°
                </a>
                </h4>
            </div>
        )
    }
}