import React, { useState } from "react";
import "../Button.css";

function Button() {
  const [rain, setRain] = useState(null);
  const [temp, setTemp] = useState(null);
  const [uv, setUV] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [initialized, setInitialized] = useState(false);

  function extractWeatherData(data) {
    // const data = JSON.parse(json);

    // Extract raining data
    const rainingData = data.rainfall.data[5];

    // Extract outside temperature
    const temperatureData = data.temperature.data[8];

    const uvData = { value: 6, desc: "Medium" };

    const humidityData = data.humidity.data[0];

    return {
      rainingData: rainingData,
      temperatureData: temperatureData,
      uvData: uvData,
      humidityData: humidityData,
    };
  }

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en"
      );
      const jsonData = await response.json();

      var extract = extractWeatherData(jsonData);
      console.log(extract.rainingData);
      setRain(extract.rainingData);
      setTemp(extract.temperatureData);
      setUV(extract.uvData);
      setHumidity(extract.humidityData);
      setInitialized(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  function getWeatherWidget() {
    // Select the element by its ID
    const widget = document.getElementById("widgets");

    // Change the display style property to 'block'
    if (widget) {
      widget.style.display = "block";
    }
  }


  const getContent = () => {
    if (initialized === false) {
      return;
    } else {
      return (
        <React.Fragment>
          <div className="button-wrapper" style={{background: "#fffee0", padding: "10px"}}>
            <h1 style={{ color: "red" }}>
              Local Weather Information from the Hong Kong Observatory
            </h1>
            <h2>Last Update : {new Date().toLocaleTimeString()}</h2>
            <h2>Your Location : {temp.place}</h2>
            <h2>Current Temperature : {temp.value} °C</h2>
            <h2>
              Current Rainfall (max) : {rain.max} {rain.unit}
            </h2>
            <h2>
              Current Rainfall (min) : {rain.min} {rain.unit}
            </h2>
            <h2>
              Current UV Index : {uv.value} ({uv.desc})
            </h2>
            <h2>Current Humidity : {humidity.value} %</h2>
          </div>
          {getWeatherWidget()}
        </React.Fragment>
      );
    }
  };

  return (
    <React.Fragment>
      <div className ="row justify-content-center">
      <button className="glow-on-hover" onClick={fetchData} style={{margin: "20px",}}>
        Get Weather data from HKO API
      </button>
      </div>
      {getContent()}
    </React.Fragment>
  );
}

export default Button;
