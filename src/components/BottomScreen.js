import React from 'react'
import MainDay from './MainDay'
import Location from './Location'
import '../style/BottomScreen.css'
function BottomScreen(props) {
  return (
      <div className='BottomScreen'>
      <MainDay data={props.data} hour={props.hour} />
          <Location setLocation={props.setLocation} />
    </div>
  )
}

export default BottomScreen
