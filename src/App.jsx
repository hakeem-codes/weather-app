import { useState } from 'react'

import './App.css'
import Card from '../components/Card'
import Input from '../components/input'
import Button from '../components/Button' 
import {useweather} from '../context/Wheather';

function App() {
 const weather = useweather();

  return (
    <>
     <h1>Weather ForCaste</h1>
     <Input />
      <Button onClick={weather.fetchData} value='search'/>
     <Card/>
     <Button value='Refresh'/>
    
    </>
  )
}

export default App
