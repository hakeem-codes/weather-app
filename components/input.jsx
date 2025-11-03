import React from "react";
import {useweather} from '../context/Wheather';

function Input(props) {
  const weather = useweather();
  return (
    <input
      className="input"
      placeholder="Enter City Name"
      value={weather.searchCity}
      onChange={(e) => weather.setSearchCity(e.target.value)}
    />
  );
}

export default Input;
