import '../style/TopScreen.css'
import React, { useState } from 'react'
import OtherDays from './OtherDays'
import TempUnit from './TempUnit'
function TopScreen(props) {
  return (
    <div className='TopScreen'>
      <div className='Otherdays-containter'>
        <OtherDays data={props.data[0]} style={props.style} />
        <OtherDays data={props.data[1]} style={props.style} />
        <OtherDays data={props.data[2]} style={props.style} />
        <OtherDays data={props.data[3]} style={props.style} />
        <OtherDays data={props.data[4]} style={props.style} />
        <OtherDays data={props.data[5]} style={props.style} />
        <OtherDays data={props.data[6]} style={props.style} />
      </div>
      <TempUnit setUnit={props.setUnit} style={props.style} />
    </div>
  )
}
export default TopScreen