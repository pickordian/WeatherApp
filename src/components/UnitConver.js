import React, {useState} from 'react'
import '../style/UnitConVer.css'

function UnitConver(props) {
  const handleClick = ( temp_unit , button_unit) => {
    if (temp_unit != button_unit) {
      if (button_unit == "Celsius") {
        console.log("Celsius");
        setActive({
          ...isActive,
          C: true,
          F: false
        });
        props.setUnit("Celsius");
      }
      else {
        setActive({
          ...isActive,
          C: false,
          F: true
        });
        props.setUnit("Fahrenheit");
      }
    }
  }
    const [isActive, setActive] = useState({ C: true, F: false });
  return (
      <div className='UnitConVer'>
        <button className='Fbutton' style={{ color: isActive.F ? 'rgb(255,255,255)' : '' }}
          onClick={() => handleClick(props.temp_unit,"Fahrenheit")}> °F </button>

        <button className='Cbutton' style={{ color: isActive.C ? 'rgb(255,255,255)' : 'rgb(94, 139, 179)' }}
          onClick={() => handleClick(props.temp_unit, "Celsius")}> °C </button>
      </div>
    )
  }
export default UnitConver