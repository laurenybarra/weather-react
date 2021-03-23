import React, { useState } from "react";

export default function WeatherTemp(props) {
    const [unit, setUnit] = useState("celsius");
    function convertToFahr(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function convertToCel(event) {
        event.preventDefault();
        setUnit("celsius");
    }
    function fahrenheit() {
        return (props.celsius * 9) / 5 + 32
    }
    if (unit === "celsius") {
        return (
            <div className="WeatherTemp">
                <h1 id="current-degree">{Math.round(props.celsius)}°</h1>
                <h4 class="cel-fahr">
                    C° | {" "}
                    <a href="." id="fahrenheit" onClick={convertToFahr}>
                        F°
                    </a>
                </h4>
            </div>
        )
    } else {
        return (
            <div className="WeatherTemp">
                <h1 id="current-degree">{Math.round(fahrenheit())}°</h1>
                <h4 class="cel-fahr">
                    <a href="." id="celsius" onClick={convertToCel}>
                        C°
                    </a>
                    {" "}| F°
                </h4>
            </div>
        )
    }
}