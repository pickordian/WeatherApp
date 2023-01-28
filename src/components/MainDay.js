import React from 'react'
import '../style/MainDay.css'
function MainDay(props) {
  return (props.data !== undefined ? (
    <div className="MainDay">
      <div>
        Temperature: {props.data.temperature[props.hour]}
        {props.data.temperature_unit}
      </div>
      <div>
        Humidity: {props.data.humidity[props.hour]}
        {props.data.humidity_unit}
      </div>
      <div>
        Sunrise: {props.data.sunrise}
      </div>
      <div>
        Sunset: {props.data.sunset}
      </div>
      <div>
        Max temp = {props.data.max_temp}
      </div>
      <div>
        Min temp = {props.data.min_temp}
      </div>
    </div>
  ): (<div>Loading</div>)
  )
}

export default MainDay
