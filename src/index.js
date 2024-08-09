import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Data from './components/Data';
import Button from './components/Button';
import Model from './components/Model';
import Leaderboard from './components/Leaderboard';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const button = ReactDOM.createRoot(document.getElementById('button-wrapper'));
const model = ReactDOM.createRoot(document.getElementById('model-wrapper'));
const leaderboard = ReactDOM.createRoot(document.getElementById('leaderboard-wrapper'));

root.render(
  <React.StrictMode>
    <Data />
  </React.StrictMode>
);

button.render(
  <React.StrictMode>
    <Button />
  </React.StrictMode>
);

model.render(
  <React.StrictMode>
    <Model />
  </React.StrictMode>
);


leaderboard.render(
  <React.StrictMode>
    <Leaderboard />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
