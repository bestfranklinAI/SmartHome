import React, { useEffect, useState } from "react";
import "../Model.css";

import * as tf from "@tensorflow/tfjs";

function Model() {
  var [initialized, setInitialized] = useState(false);
  var [prediction, setPrediction] = useState(null);
  var [model, setModel] = useState(null);

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

    const test = [38.5, 80, 1000, 9, 5, 2, 40.5, 90, 6, 1, 1];

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

  useEffect(() => {
    loadModel();
  }, []);

  const getContent = () => {
    if (initialized === false) {
      return;
    } else {
      return (
        <React.Fragment>
          <div style={{ margin: "20px" , textAlign:"center"}}>
            <h2>Optimized Temperature By Our Proprietary Algorithm</h2>
            <h1 style ={{color:"olivedrab"}}>{prediction} °C</h1>
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
        onClick={analyze}
        style={{ margin: "20px" }}
      >
        Try the AI Model Demo
      </button>
      {getContent()}
    </React.Fragment>
  );
}

export default Model;
