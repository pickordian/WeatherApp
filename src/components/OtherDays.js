import '../style/OtherDays.css'
import React, { useEffect, useState } from 'react'
function OtherDays(props) {

  return (props.data !== undefined ?
    (<div  className='OtherDays' style={{backgroundColor: props.style.prim, color: props.style.seco}}>
      <div style={{ fontSize: "2rem"}}> {props.data.date} </div>
      <div style={{fontSize: "1.75rem"}}>{Math.round(props.data.max_temp)} {props.data.temperature_unit}</div>
      <div style={{ fontSize: "1.2rem" }}>{Math.round(props.data.min_temp)}  {props.data.temperature_unit}</div>
    </div>)
    :
    (<div className='OtherDays'>Loading</div>)
  )
}

export default OtherDays