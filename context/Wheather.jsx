
import React, { createContext, useContext, useState } from "react";
import { getWheatherDataForCity } from "../api";
const WeatherContext = createContext(null);
export const useweather = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = (props) => {
  const [data, setdata] = useState(null);
  const [searchCity, setSearchCity] = useState("");
  const fetchData = async () => {
    if (!searchCity) return;
    const response = await getWheatherDataForCity(searchCity);
    setdata(response);
  };

  return (
    <WeatherContext.Provider
      value={{ searchCity, setSearchCity, data, setdata, fetchData }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
