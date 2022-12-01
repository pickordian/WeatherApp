import React, {useState} from 'react'
import '../style/UnitConVer.css'

function UnitConver(props) {
  const handleClick = ( temp_unit , button_unit) => {
    if (temp_unit.unit != button_unit) {
      if (button_unit == "°C") {
        setActive({
          ...isActive,
          C: true,
          F: false
          
        });
        props.setUnit({
          ...temp_unit,
          val: (temp_unit.val - 32)/1.8,
          unit: "°C"
        });
      }
      else {
        setActive({
          ...isActive,
          C: false,
          F: true
        });
        props.setUnit({
          ...temp_unit,
          val: temp_unit.val*1.8 + 32,
          unit: "°F"
        });
      }
    }
  }
    const [isActive, setActive] = useState({ C: true, F: false });
  return (
      <div className='UnitConVer'>
        <button className='Fbutton' style={{ color: isActive.F ? 'rgb(255,255,255)' : '' }}
          onClick={() => handleClick(props.temp_unit,"°F")}> °F </button>

        <button className='Cbutton' style={{ color: isActive.C ? 'rgb(255,255,255)' : 'rgb(94, 139, 179)' }}
          onClick={() => handleClick(props.temp_unit, "°C")}> °C </button>
      </div>
    )
  }
export default UnitConver