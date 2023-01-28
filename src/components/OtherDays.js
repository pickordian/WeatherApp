import React, { useEffect, useState } from 'react'
import '../style/OtherDays.css'
function OtherDays(props) {
  const handleClick = () => {
    console.log("click");
    let temp_display = [];
    for (let i = 0; i <= 6; i++){
      if (i === props.index) {
        temp_display = [
          ...temp_display,
          {
            backgroundColor: "red",
            width: "calc(100%/6)"
          }]
      }
      else {
        temp_display = [
          ...temp_display,
          { backgroundColor: "gray" }
        ]
      }
      
    }
    props.setDisplay(temp_display)
    props.setMainday(props.data)
    }

 
  return (props.data !== undefined ?
    (<div onClick={handleClick} className='OtherDays' style={props.display}
    >
      <div>Max temp: {props.data.max_temp}</div>
      <div>Min temp: {props.data.min_temp}</div>
    </div>)
    :
    (<div>Loading</div>)
  )
}

export default OtherDays