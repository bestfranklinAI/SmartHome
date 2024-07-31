import React, { useState, useEffect } from "react";

const data = [
  {
    temperature: 29.5,
    humidity: 95.3,
    motion: 0,
    light: 4200,
  },
  {
    temperature: 28.1,
    humidity: 96.8,
    motion: 0,
    light: 4500,
  },
  {
    temperature: 29.8,
    humidity: 94.9,
    motion: 0,
    light: 4100,
  },
  {
    temperature: 27.4,
    humidity: 89.2,
    motion: 1,
    light: 4600,
  },
  {
    temperature: 28.9,
    humidity: 85.7,
    motion: 0,
    light: 4130,
  },
  {
    temperature: 29.2,
    humidity: 86.5,
    motion: 1,
    light: 4140,
  },
  {
    temperature: 30.7,
    humidity: 85.1,
    motion: 0,
    light: 4125,
  },
  {
    temperature: 30.3,
    humidity: 48.0,
    motion: 1,
    light: 4155,
  },
  {
    temperature: 31.6,
    humidity: 84.8,
    motion: 1,
    light: 4115,
  },
  {
    temperature: 30.0,
    humidity: 86.2,
    motion: 1,
    light: 4135,
  },
  {
    temperature: 29.4,
    humidity: 85.5,
    motion: 1,
    light: 4128,
  },
  {
    temperature: 28.5,
    humidity: 87.4,
    motion: 1,
    light: 4165,
  },
  {
    temperature: 28.3,
    humidity: 90.0,
    motion: 0,
    light: 4118,
  },
  {
    temperature: 29.6,
    humidity: 91.6,
    motion: 1,
    light: 4170,
  },
  {
    temperature: 29.2,
    humidity: 90.7,
    motion: 0,
    light: 4105,
  },
  {
    temperature: 30.7,
    humidity: 90.8,
    motion: 1,
    light: 4175,
  },
  {
    temperature: 32.1,
    humidity: 89.6,
    motion: 0,
    light: 4100,
  },
  {
    temperature: 33.8,
    humidity: 88.0,
    motion: 1,
    light: 4180,
  },
  {
    temperature: 32.0,
    humidity: 84.5,
    motion: 0,
    light: 495,
  },
  {
    temperature: 31.9,
    humidity: 85.2,
    motion: 1,
    light: 4185,
  },
  {
    temperature: 31.9,
    humidity: 84.4,
    motion: 0,
    light: 4490,
  },
  {
    temperature: 30.0,
    humidity: 88.4,
    motion: 1,
    light: 4190,
  },
  {
    temperature: 29.8,
    humidity: 84.3,
    motion: 0,
    light: 4485,
  },
  {
    temperature: 29.1,
    humidity: 88.6,
    motion: 1,
    light: 4195,
  },
  {
    temperature: 28.7,
    humidity: 84.2,
    motion: 0,
    light: 4480,
  },
  {
    temperature: 29.2,
    humidity: 88.8,
    motion: 1,
    light: 4200,
  },
  {
    temperature: 29.6,
    humidity: 87.1,
    motion: 0,
    light: 4075,
  },
  {
    temperature: 29.3,
    humidity: 89.0,
    motion: 1,
    light: 4205,
  },
  {
    temperature: 30.5,
    humidity: 87.0,
    motion: 0,
    light: 4970,
  },
  {
    temperature: 31.4,
    humidity: 89.2,
    motion: 1,
    light: 4210,
  },
  {
    temperature: 31.4,
    humidity: 86.9,
    motion: 0,
    light: 4365,
  },
  {
    temperature: 32.5,
    humidity: 87.4,
    motion: 1,
    light: 4215,
  },
  {
    temperature: 31.3,
    humidity: 87.8,
    motion: 0,
    light: 4760,
  },
  {
    temperature: 29.6,
    humidity: 89.6,
    motion: 1,
    light: 4822,
  },
  {
    temperature: 29.2,
    humidity: 89.7,
    motion: 0,
    light: 5055,
  },
  {
    temperature: 30.7,
    humidity: 89.8,
    motion: 1,
    light: 5225,
  },
  {
    temperature: 31.1,
    humidity: 86.6,
    motion: 0,
    light: 4950,
  },
  {
    temperature: 32.8,
    humidity: 85.0,
    motion: 0,
    light: 4230,
  },
  {
    temperature: 31.0,
    humidity: 87.5,
    motion: 0,
    light: 4945,
  },
  {
    temperature: 32.9,
    humidity: 89.2,
    motion: 0,
    light: 4235,
  },
  {
    temperature: 30.9,
    humidity: 89.4,
    motion: 0,
    light: 5440,
  },
  {
    temperature: 29.0,
    humidity: 90.4,
    motion: 1,
    light: 5240,
  },
  {
    temperature: 28.8,
    humidity: 87.3,
    motion: 0,
    light: 5835,
  },
  {
    temperature: 29.1,
    humidity: 85.6,
    motion: 1,
    light: 6245,
  },
  {
    temperature: 30.7,
    humidity: 83.2,
    motion: 0,
    light: 5830,
  },
  {
    temperature: 32.2,
    humidity: 82.8,
    motion: 1,
    light: 5520,
  },
  {
    temperature: 30.6,
    humidity: 79.1,
    motion: 0,
    light: 4925,
  },
  {
    temperature: 29.3,
    humidity: 78.0,
    motion: 1,
    light: 5255,
  },
  {
    temperature: 29.5,
    humidity: 79.0,
    motion: 0,
    light: 4920,
  },
];

function Data() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 1000); // Change 1000 to the interval time in milliseconds

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty array means this effect runs once after the initial render

  const currentItem = data[currentIndex];

  function apparentTemp(temp, humidity) {
    var adjustedTemp = temp * (9 / 5) + 32;
    const heatIndex =
      -42.38 +
      2.049 * adjustedTemp +
      10.14 * humidity -
      0.2248 * adjustedTemp * humidity -
      0.006838 * Math.pow(adjustedTemp, 2) -
      0.05482 * Math.pow(humidity, 2) +
      0.001228 * Math.pow(adjustedTemp, 2) * humidity +
      0.0008528 * temp * Math.pow(humidity, 2) -
      0.00000199 * Math.pow(adjustedTemp, 2) * Math.pow(humidity, 2);

    var adjustedHeatIndex = (heatIndex - 32) * (5 / 9);
    return adjustedHeatIndex.toFixed(1);
  }

  if (currentIndex === 0) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Temperature : {currentItem.temperature} °C</h1>
        <h1>Humidity {currentItem.humidity} %</h1>
        <h1 style={{ color: "blue" }}>
          Apparent Temperature :{" "}
          {apparentTemp(currentItem.temperature, currentItem.humidity / 100)} °C
        </h1>
        <h1>Motion : {currentItem.motion}</h1>
        <h1>Light : {currentItem.light} Lux</h1>
        <h1>Time : {new Date().toLocaleTimeString()}</h1>
      </div>
    );
  }
}

export default Data;
