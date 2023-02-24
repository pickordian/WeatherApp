import '../style/Screen.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BottomScreen from './BottomScreen'
import TopScreen from './TopScreen'
function Screen() {
    const [location, setLocation] = useState({ latitude: "33.21", longitude: "-97.13", name: "Denton" });
    const [Unit,setUnit] = useState({ temp_unit: "celsius", windspeed_unit: "ms" })
    const [data, setData] = useState([]);
    const [style, setStyle] = useState({ prim: "blue", secon: "white", tert: "white"})
    const [background, setBackGround] = useState(require('../asset/images/ClearDay.jpg'))
    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetch_data = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,weathercode,visibility,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&temperature_unit=${Unit.temp_unit}&windspeed_unit=${Unit.windspeed_unit}&timezone=auto`);
                let temp_object = [];
                const month_name = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                for (let i = 0; i <= 6; i++) {
                    const full_date = fetch_data.data.hourly.time[i * 24];
                    const date = month_name[Number(full_date.slice(5, 7)) - 1] + " " + full_date.slice(8, 10);
                    temp_object = [
                        ...temp_object,
                        {
                            temperature: fetch_data.data.hourly.temperature_2m.slice(i * 24, i * 24 + 24),
                            temperature_unit: fetch_data.data.hourly_units.temperature_2m,
                            humidity_unit: fetch_data.data.hourly_units.relativehumidity_2m,
                            humidity: fetch_data.data.hourly.relativehumidity_2m.slice(i * 24, i * 24 + 24),
                            weather_code: fetch_data.data.hourly.weathercode.slice(i * 24, i * 24 + 24),
                            max_temp: fetch_data.data.daily.temperature_2m_max[i],
                            min_temp: fetch_data.data.daily.temperature_2m_min[i],
                            sunrise: fetch_data.data.daily.sunrise[i].slice(11, 16),
                            sunset: fetch_data.data.daily.sunset[i].slice(11, 16),
                            date: date,
                            timezone: fetch_data.data.timezone,
                            visibility: fetch_data.data.hourly.visibility.slice(i * 24, i * 24 + 24),
                            windspeed: fetch_data.data.hourly.windspeed_10m.slice(i * 24, i * 24 + 24),
                            windspeed_unit: fetch_data.data.hourly_units.windspeed_10m,
                        }
                    ]
                }
                setData(temp_object)
            }
            catch (err) {
                console.log("ERROR", err)
            }
        }
        fetchData();
    }, [Unit, location])
    return (
        <div className='Screen' style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${background})`,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            backgroundBlendMode: 'multiply'
        }}>
            <TopScreen data={data} setUnit={setUnit} style={style} />
            <BottomScreen data={data[0]} setLocation={setLocation} location={location.name} setStyle={setStyle} setBackGround={setBackGround} style={style} />
        </div>
    )
}

export default Screen