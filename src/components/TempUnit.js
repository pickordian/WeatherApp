import React, { useState } from 'react'
import { useEffect } from 'react'
import eagle from '../asset/eagle.mp3'
import '../style/TempUnit.css'
function TempUnit(props) {
  const [AmericanDisplay, setAmericanDisplay] = useState('gray')
  const [nonAmericanDisplay, setnonAmericanDisplay] = useState('gray')
  const handleClick = (unit) => {
    let audio = new Audio(eagle)
    if (unit) {
      setnonAmericanDisplay('rgb(61, 61, 61)')
      setAmericanDisplay('gray')
      props.setAmerican({ unit: "celsius", unit_symbol: "°C" })
    }
    else {
      audio.play();
      setAmericanDisplay('rgb(61, 61, 61)')
      setnonAmericanDisplay('gray')
      props.setAmerican({ unit: "fahrenheit", unit_symbol: "°F" })
    }
  }
  return (
    <div className='TempUnit'>
      <button onClick={() => handleClick(0)} style={{ backgroundColor: AmericanDisplay }}>American Unit</button>
      <button onClick={() => handleClick(1)} style={{ backgroundColor:nonAmericanDisplay }}>Rest of the world</button>
    </div>
  )
}

export default TempUnit