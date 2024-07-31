import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Data from './components/Data';
import Button from './components/Button';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const button = ReactDOM.createRoot(document.getElementById('button-wrapper'));
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
