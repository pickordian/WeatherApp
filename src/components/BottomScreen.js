import React from 'react'
import MainDay from './MainDay'
import Location from './Location'
import '../style/BottomScreen.css'
import '../style/MainDay.css'
function BottomScreen(props) {
  return (
    <div className='BottomScreen'>
      {props.data !== undefined ? <MainDay data={props.data} location={props.location} timezone={props.data.timezone} setStyle={props.setStyle} style={props.style} setBackGround={props.setBackGround} /> : <div className='MainDay'></div>}
      <Location setLocation={props.setLocation} style={props.style} />
    </div>
  )
}

export default BottomScreen
