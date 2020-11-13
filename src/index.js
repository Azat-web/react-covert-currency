import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

const country = [
  {
    "name": "Swiss Franc",
    "abbreviation": "CHF",
    "symbol": "+",
    "flagURL": "https://www.rabstol.net/uploads/gallery/main/229/rabstol_net_flags_65.jpg"
  },

  {
    "name": "Euro",
    "abbreviation": "EUR",
    "symbol": "\u20AC",
    "flagURL": "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg"
  },

  {
    "name": "Chinese Yuan Renminbi",
    "abbreviation": "CNY",
    "symbol": "\u00A5",
    "flagURL": "https://img.geonames.org/flags/x/cn.gif"
  },

  {
    "name": "Russian Ruble",
    "abbreviation": "RUB",
    "symbol": "\u20BD",
    "flagURL": "https://img.geonames.org/flags/x/ru.gif"
  },

  {
    "name": "British Pound",
    "abbreviation": "GBP",
    "symbol": "\u00A3",
    "flagURL": "https://img.geonames.org/flags/x/gb.gif"
  }
]

ReactDOM.render(
  <React.StrictMode>
    <App country={country} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
