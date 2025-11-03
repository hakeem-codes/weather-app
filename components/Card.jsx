import React from 'react'
import { useweather } from '../context/Wheather'

function Card() {
  const weather = useweather();

  const temp = weather?.data?.current?.temp_c ?? '—';

  return (
    <div className='Card'>
      <img 
        src={weather?.data?.current?.condition?.icon} 
        alt="weather icon" 
        className="weather-icon"
      />

      <div className="temp">{temp}°C</div>

      <h2 className="city">
        {weather?.data?.location?.name}, {weather?.data?.location?.country}
      </h2>

      <div className="extra">
        <div className="box">Humidity: {weather?.data?.current?.humidity}%</div>
        <div className="box">Wind: {weather?.data?.current?.wind_kph} km/h</div>
      </div>
    </div>
  )
}

export default Card
