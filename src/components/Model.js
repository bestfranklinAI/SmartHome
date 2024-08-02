import React, { useEffect, useState } from "react";
import "../Model.css";


import * as tf from "@tensorflow/tfjs";

function Model() {
  var [initialized, setInitialized] = useState(false);
  var [prediction, setPrediction] = useState(null);
  var [model, setModel] = useState(null);


  var [formData, setFormData] = useState({
    indoorTemperature: '',
    indoorHumidity: '',
    ambientLight: '',
    uvIndex: '',
    rainfall: '',
    windSpeed: '',
    forecastTemperature: '',
    forecastHumidity: '',
    forecastUvIndex: '',
    forecastRainfall: '',
    forecastWindSpeed: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // You can add further processing or API calls here
  };






  //constant
  const data_mean = [
    28.8, 79.2375, 7659.0, 6.2, 3.6, 6.525, 25.080000000000002, 75.725, 4.775,
    5.5, 7.65,
  ];
  const data_sd = [
    11.013514425468374, 14.878250695226237, 4570.090699318778, 3.6,
    6.394528911499267, 5.074384199092536, 10.768337847597465, 18.41872348997074,
    3.29004179304762, 8.19756061276768, 6.532801849130279,
  ];
  const truth_mean = [24.35, 4.575];
  const truth_sd = [6.459682654743962, 3.137574700305955];

  function normalize(data, type) {
    var mean = [];
    var sd = [];
    var reverse = false;
    var result = 0;

    if (type === "data") {
      mean = data_mean;
      sd = data_sd;
    } else {
      mean = truth_mean;
      sd = truth_sd;
      reverse = true;
    }

    if (reverse) {
      result = data.map((data, i) => {
        return data * sd[i] + mean[i];
      });
    } else {
      result = data.map((data, i) => {
        return (data - mean[i]) / sd[i];
      });
    }

    return result;
  }

  async function analyze() {
    setInitialized(true);

    // const test = [38.5, 80, 1000, 9, 5, 2, 40.5, 90, 6, 1, 1];
    const test = [formData.indoorTemperature, formData.indoorHumidity, formData.ambientLight, formData.uvIndex, formData.rainfall, formData.windSpeed, formData.forecastTemperature, formData.forecastHumidity, formData.forecastUvIndex, formData.forecastRainfall, formData.forecastWindSpeed];

  
    const input = tf.tensor2d(normalize(test, "data"), [1, 11]);

    var prediction = model.predict(input).arraySync()[0][0];

    prediction = normalize([prediction], "truth")[0];

    setPrediction(prediction.toFixed(1));
  }

  async function loadModel() {
    console.log("Loading model...");
    const model = await tf.loadLayersModel("./smartHomeJS/model.json");
    console.log("Model loaded.");
    setModel(model);
  }


  const input = () => {
    const input_form = document.querySelector(".Input");
    input_form.style.display = "block";
  }

  const autofill = () => {
    setFormData({
      indoorTemperature: 38.5,
      indoorHumidity: 80,
      ambientLight: 1000,
      uvIndex: 9,
      rainfall: 5,
      windSpeed: 2,
      forecastTemperature: 40.5,
      forecastHumidity: 90,
      forecastUvIndex: 6,
      forecastRainfall: 1,
      forecastWindSpeed: 1,
    });
  }



  useEffect(() => {
    loadModel();
  }, []);

  const getContent = () => {
    if (initialized === false) {
      return;
    } else {
      return (
        <React.Fragment>
          <div style={{ margin: "20px", textAlign: "center" }}>
            <h2>Optimized Temperature By Our Proprietary Algorithm</h2>
            <h1 style={{ color: "olivedrab" }}>{prediction} °C</h1>
          </div>
        </React.Fragment>
      );
    }
  };

  return (
    <React.Fragment>
      <a href="./database.json">
        <button className="glow-on-hover" style={{ margin: "20px" }}>
          Check out the Training dataset
        </button>
      </a>

      <a href="./train.html">
        <button
          className="glow-on-hover"
          href="./train.html"
          style={{ margin: "20px" }}
        >
          Check Out Our AI Training Procedure
        </button>
      </a>

      <button
        className="glow-on-hover"
        onClick={input}
        style={{ margin: "20px" }}
      >
        Try the AI Model Demo
      </button>






      
      <div className="Input" style={{display:"none"}}>
      <h1>Weather Data Form</h1>
      <form onSubmit={handleSubmit}>
        <h2>Current Weather Conditions</h2>
        <label>
          Indoor Temperature:
          <input
            type="number"
            name="indoorTemperature"
            value={formData.indoorTemperature}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Indoor Humidity:
          <input
            type="number"
            name="indoorHumidity"
            value={formData.indoorHumidity}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Ambient Light:
          <input
            type="number"
            name="ambientLight"
            value={formData.ambientLight}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          UV Index:
          <input
            type="number"
            name="uvIndex"
            value={formData.uvIndex}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Rainfall:
          <input
            type="number"
            name="rainfall"
            value={formData.rainfall}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Wind Speed:
          <input
            type="number"
            name="windSpeed"
            value={formData.windSpeed}
            onChange={handleChange}
          />
        </label>
        <br />

        <h2>Forecasted Weather Conditions</h2>
        <label>
          Forecast Temperature:
          <input
            type="number"
            name="forecastTemperature"
            value={formData.forecastTemperature}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Forecast Humidity:
          <input
            type="number"
            name="forecastHumidity"
            value={formData.forecastHumidity}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Forecast UV Index:
          <input
            type="number"
            name="forecastUvIndex"
            value={formData.forecastUvIndex}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Forecast Rainfall:
          <input
            type="number"
            name="forecastRainfall"
            value={formData.forecastRainfall}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Forecast Wind Speed:
          <input
            type="number"
            name="forecastWindSpeed"
            value={formData.forecastWindSpeed}
            onChange={handleChange}
          />
        </label>
        <br />

        <button type="submit" onClick = {analyze}>Submit</button>
        <button onClick = {autofill}>Autofill</button>
      </form>
    </div>

















      {getContent()}
    </React.Fragment>
  );
}

export default Model;
