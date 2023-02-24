import React from 'react'
import '../style/MainDay.css'
import {
  WiHumidity,
  WiDaySunny,
  WiDayCloudy,
  WiDayFog,
  WiDaySnow,
  WiNightClear,
  WiNightCloudy,
  WiNightFog,
  WiDaySleet,
  WiNightSleet,
  WiDayRain,
  WiNightRain,
  WiNightSnow,
  WiDayThunderstorm,
  WiNightThunderstorm,
  WiDayShowers,
  WiNightShowers,
  WiDaySnowThunderstorm,
} from 'react-icons/wi'
import {
  BsFillGeoAltFill,
  BsWind,
  BsEyeFill,
  BsSunriseFill,
  BsSunsetFill,
} from 'react-icons/bs'
import { Tooltip } from '@mui/material'
import { useEffect } from 'react'
import { useState } from 'react'
function MainDay(props) {
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hourCycle: "h23", timeZone: "America/Chicago" }));
  const [hour, setHour] = useState(Number(time.slice(0, 2)))
  const [weather_title, setTitle] = useState("");
  useEffect(() => {
        const interval = setInterval(() => {
          setTime(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit",  hourCycle: "h23", timeZone: props.data.timezone }))
      }, [60 * 1000])
      return () => clearInterval(interval);
  }, [props.data.timezone])
  useEffect(() => {
    setTime(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hourCycle: "h23", timeZone: props.data.timezone }))
  }, [props.data.timezone])
  useEffect(() => {
    setHour(Number(time.slice(0, 2)))
  },[time])
  const returnStyle = (p_color, p_fontSize) => ({ color: p_color, fontSize: p_fontSize })
  const [mainIcon, setMainIcon] = useState(<div></div>)
  const icons = [
    {
      code: [0],
      day: {
        comp: <WiDaySunny style={{ color: "rgba(225, 205, 17, 1)", fontSize: "15rem" }} />, style: { prim: "rgba(15, 191, 226, 0.35)", seco: "rgba(255, 255, 255, 1) ", tert: "rgba(25, 34, 107, 1)" },
        background: require("../asset/images/ClearDay.jpg"), title:"Clear Day"
      },
      night: {
        comp: <WiNightClear style={{ color: "rgba(225, 205, 17, 1)", fontSize: "15rem" }} />, style: { prim: "rgba(114, 104, 180, 0.35)", seco: "rgba(225, 205, 17, 1)", tert: "rgba(17, 47, 175, 1)" },
        background: require("../asset/images/ClearNight.jpg"), title: "Clear Night"
      }, 
    },
    {
      code: [1, 2, 3],
      day: {
        comp: <WiDayCloudy style={{ color: "rgba(167, 197, 207, 1)", fontSize: "15rem" }} />, style: { prim: "rgba(111, 147, 159, 0.7) ", seco: "rgba(202, 207, 209, 1)", tert: "rgba(133, 106, 4, 1)" },
        background: require("../asset/images/CloudDay.jpg"), title: "Cloudy Day"
      },
      night: {
        comp: <WiNightCloudy style={{ color: "rgba(167, 197, 207, 1)", fontSize: "15rem" }} />, style: { prim: "rgba(4, 80, 106, 0.7)", seco: "rgba(182, 145, 4, 1)", tert: "#D3D3D3" },
        background: require("../asset/images/CloudNight.jpg"), title: "Cloudy Night"
      } 
    },
    {
      code: [45, 48],
      day: {
        comp: <WiDayFog style={{ color: "rgba(201, 225, 187, 1)", fontSize: "15rem" }} />, style: { prim: "rgba(186, 186, 186, 0.6)", seco: "rgba(54, 89, 19, 1)", tert: "rgba(159, 135, 90, 1)" },
        background: require("../asset/images/FogDay.jpg"), title: "Daytime Fog"
      },
      night: {
        comp: <WiNightFog style={{ color: "rgba(201, 225, 187, 1)", fontSize: "15rem" }} />, style: { prim: "rgba(186, 186, 186, 0.4)", seco: "rgba(23, 55, 4, 1)", tert: "rgba(255, 255, 255, 1) " },
        background: require("../asset/images/FogNight.jpg"), title: "Nighttime Fog"
      } 
    },
    {
      code: [51, 53, 55, 56, 57],
      day: {
        comp: <WiDaySleet style={{ color: "rgba(255, 255, 255, 1)", fontSize: "15rem" }} />, style: { prim: "rgba(221, 199, 157, 0.7)", seco: "rgba(255, 255, 255, 1)", tert: "rgba(102, 66, 1, 1)" },
        background: require("../asset/images/SleetDay.jpg"), title: "Daytime Sleet"
      },
      night: {
        comp: <WiNightSleet style={{ color: "rgba(255, 255, 255, 1)", fontSize: "15rem" }} />, style: { prim: "rgba(111, 147, 159, 0.5)", seco: "rgba(255, 255, 255, 1)", tert: "rgba(102, 66, 1, 1)" },
        background: require("../asset/images/SleetNight.jpg"), title: "Nighttime Sleet"
      } 
    },
    {
      code: [61, 63, 65, 66, 67],
      day: {
        comp: <WiDayRain style={{ color: "rgba(2, 9, 158, 1)", fontSize: "15rem" }} />, style: { prim: "rgba(222, 235, 237, 0.3)", seco: "rgba(255, 255, 255, 1)", tert: "rgba(2, 9, 158, 1)" },
        background: require("../asset/images/RainDay.jpg"), title: "Daytime Rain"
      },
      night: {
        comp: <WiNightRain style={{ color: "rgba(2, 9, 158, 1)", fontSize: "15rem" }} />, style: { prim: "rgba(222, 235, 237, 0.3)", seco: "rgba(255, 255, 255, 1)", tert: "rgba(2, 9, 158, 1)" },
        background: require("../asset/images/RainNight.jpg"), title: "Nighttime Rain"
      }
    },
    {
      code: [71, 73, 75, 77, 85, 86],
      day: {
        comp: <WiDaySnow style={{ color: "rgba(255, 255, 255, 1)", fontSize: "15rem" }} />, style: { prim: "rgba(69, 69, 69, 0.3)", seco: "rgba(255, 255, 255, 1)", tert: "" },
        background: require("../asset/images/SnowDay.jpg"), title: "Daytime Snow"
      },
      night: {
        comp: <WiNightSnow style={{ color: "rgba(255, 255, 255, 1)", fontSize: "15rem" }} />, style: { prim: "rgba(255, 255, 255, 0.3)", seco: "rgba(255, 255, 255, 1)", tert: "rgba(0, 0, 0, 1)" },
        background: require("../asset/images/SnowNight.jpg"), title: "Nighttime Snow"
      }
    },
    {
      code: [80, 81, 82],
      day: {
        comp: <WiDayShowers style={{ color: "rgba(19, 106, 168, 1)", fontSize: "15rem" }} />, style: { prim: "rgba(222, 235, 237, 0.4)", seco: "rgb(173, 216, 230,1)", tert: "rgba(32, 45, 54, 1)" },
        background: require("../asset/images/ShowersDay.jpg"), title: "Daytime Showers"
      },
      night: {
        comp: <WiNightShowers style={{ color: "rgba(19, 106, 168, 1)", fontSize: "15rem" }} />, style: { prim: "rgba(222, 235, 237, 0.4)", seco: "#ADD8E6", tert: "rgba(32, 45, 54, 1)" },
        background: require("../asset/images/ShowersNight.jpg"), title: "Nighttime Showers"
      }
    },
    {
      code: [95, 96, 99],
      day: {
        comp: <WiDayThunderstorm style={{ color: "rgba(225, 205, 17, 1)", fontSize: "15rem" }} />, style: { prim: "rgba(137, 104, 166, 0.5)", seco: "rgba(225, 205, 17, 1)", tert: "rgba(64, 4, 117, 1)" },
        background: require("../asset/images/ThunderDay.jpg"), title: "Daytime Thuderstorm"
      },
      night: {
        comp: <WiNightThunderstorm style={{ color: "rgba(225, 205, 17, 1)", fontSize: "15rem" }} />, style: { prim: "rgba(137, 104, 166, 0.5)", seco: "rgba(225, 205, 17, 1)", tert: "rgba(64, 4, 117, 1)" },
        background: require("../asset/images/ThunderNight.jpg"), title: "Nighttime Thunderstorm"
      }
    }
  ]
  useEffect(() => {
      check_weathercode:
      for (let icon of icons) {
        for (let code of icon.code) {
          if (code === props.data.weather_code[hour]) {
            let rise = Number(props.data.sunrise.substring(0, 2));
            let set = Number(props.data.sunset.substring(0, 2));
            // const i = 7;
            if (hour >= rise && hour <= set) {
              setMainIcon(icon.day.comp);
              setTitle(icon.day.title)
              props.setBackGround(icon.day.background)
              props.setStyle(icon.day.style)
              // setMainIcon(icons[i].day.comp);
              // setTitle(icons[i].day.title)
              // props.setBackGround(icons[i].day.background)
              // props.setStyle(icons[i].day.style)
              break check_weathercode;            }
            else {
              setMainIcon(icon.night.comp)
              setTitle(icon.night.title)
              props.setBackGround(icon.night.background)
              props.setStyle(icon.night.style)
              // setMainIcon(icons[i].night.comp)
              // setTitle(icons[i].night.title)
              // props.setBackGround(icons[i].night.background)
              // props.setStyle(icons[i].night.style)
              break check_weathercode;
            }
          }
        }
      }
  }, [hour, props.data])
  return  (
    <div className="MainDay" style={{ backgroundColor: props.style.prim, color: props.style.seco }}>
      <div className='MainData' style={{ fontSize: "5rem" }}>
        <div>{mainIcon}
          <p style={{fontSize: "2rem", marginTop: "-1rem", textAlign:"center"}}>{weather_title}</p>
        </div>
        <div>
          {Math.round(props.data.temperature[hour])}
          {props.data.temperature_unit}
        </div>
      </div>
      <div className='DataContainer'>
        <div className='data-Location'>
          <span style={{ fontSize: "8rem" }}>{time}</span>
          <br />
          {props.data.date}
          <br />
          < BsFillGeoAltFill style={ {fontSize: "2rem"}} /> 
          {props.location}
        </div>
        <div className='DetailData'>
          <Tooltip title="Current humidity">
            <div>
              <WiHumidity />
              <br />
              {props.data.humidity[hour]}
              {props.data.humidity_unit}
            </div>
          </Tooltip>
          <Tooltip title="Windspeed">
            <div>
              <BsWind/>
              <br />
              {Math.round(props.data.windspeed[hour])}
              {props.data.windspeed_unit}
            </div>
          </Tooltip>
          <Tooltip title="Sunrise time">
            <div>
              <BsSunriseFill /> <br />
              {props.data.sunrise}</div>
          </Tooltip>
          <Tooltip title="Sunset time">
            <div>
              <BsSunsetFill /><br />
              {props.data.sunset}</div>
          </Tooltip>
          <Tooltip title="Visibility">
            <div>
              <BsEyeFill /><br />
              <span>{ props.data.windspeed_unit === "m/s" ?  `${props.data.visibility[hour]}m` : `${Math.round(Number(props.data.visibility[hour])/1609)}mi` } </span>
            </div>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}

export default MainDay
