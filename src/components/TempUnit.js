import '../style/TempUnit.css'
import React, { useState } from 'react'
import { useEffect } from 'react'
import eagle from '../asset/eagle.mp3'
import styled, { css } from 'styled-components'
const Ibutton = styled.button`
   background-color:  ${props => props.style.seco};
   color: ${props => props.style.tert};
   border: none;
   transition: 0.2s;
   background-image: linear-gradient(rgb(0 0 0/0.3 ) 0 0);
   font-family: Mynerve;
   font-weight: 600;
 ${props => {
  if (props.on === "true")
    return (
      `
     font-size: 2rem;
     height: 60%;
     width: 60%;
     border-radius: 0.2rem;
     color: ${props.style.tert};
     background-image: linear-gradient(rgb(0 0 0/0) 0 0);
  `) 
  else 
    return (
      `font-size: 1rem;
       height: 30%;
       width: 25%;
       border-radius: 0.1rem;
       `
    )
  }}
  &:hover{
    background-image: linear-gradient(rgb(0 0 0/0.2) 0 0);
    cursor: pointer;
 }
 &:active{
    background-image: linear-gradient(rgb(0 0 0/0.4) 0 0);
 }
  `
function TempUnit(props) {
  const [Imperial, setImperial] = useState(false)
  const [Metric, setMetric] = useState(true)
  const handleClick = (isMetric) => {
    if (isMetric && !Metric) {
      props.setUnit({
        temp_unit: "celsius",
        windspeed_unit: "ms"
      })
      setImperial(false)
      setMetric(true)
    }
    else if (!isMetric && !Imperial) {
      const eagle_sound = new Audio(eagle);
      eagle_sound.play();
      props.setUnit({
        temp_unit: "fahrenheit",
        windspeed_unit: "mph"
      })
      setMetric(false)
      setImperial(true)
    }
  }

  return (
    <div className='TempUnit' style={{ background: props.style.prim, color: props.style.seco }}>
      <Ibutton onClick={() => handleClick(false)} on={Imperial.toString() } style={props.style} title="Change to Imperial units" USA>Imperial</Ibutton>
      <Ibutton onClick={() => handleClick(true)} on={Metric.toString()} style={props.style} title="Change to Metric units">Metric</Ibutton>
    </div>
  )
}

export default TempUnit