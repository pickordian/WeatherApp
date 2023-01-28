import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../style/Screen.css'
import BottomScreen from './BottomScreen'
import TopScreen from './TopScreen'
function Screen() {
    const [location, setLocation] = useState({ latitude: "33.21", longitude: "-97.13", name: "Denton" });
    const [isAmerican, setAmerican] = useState({ unit: "celsius", unit_symbol: "°C" })
    const [data, setData] = useState([]);
    const [main_day, setMainday] = useState();
    const [hour, setHour] = useState(new Date().getHours());
    useEffect(() => {

        const fetchData = async () => {
            try {
                const fetch_data = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&hourly=temperature_2m,relativehumidity_2m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true&temperature_unit=${isAmerican.unit}&timezone=auto`);
                let temp_object = [];
                for (let i = 0; i <= 6; i++) {
                    temp_object = [
                        ...temp_object,
                        {
                            temperature: fetch_data.data.hourly.temperature_2m.slice(i * 24, i * 24 + 24),
                            temperature_unit: fetch_data.data.hourly_units.temperature_2m,
                            humidity_unit: fetch_data.data.hourly_units.relativehumidity_2m,
                            humidity: fetch_data.data.hourly.relativehumidity_2m.slice(i * 24, i * 24 + 24),
                            max_temp: fetch_data.data.daily.temperature_2m_max[i],
                            min_temp: fetch_data.data.daily.temperature_2m_min[i],
                            sunrise: fetch_data.data.daily.sunrise[i].slice(11, 16),
                            sunset: fetch_data.data.daily.sunset[i].slice(11, 16)
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
        const intervalId = setInterval(() => {
            const currentHour = new Date().getHours();
            if (currentHour !== hour) {
                setHour(currentHour);
            }
        }, 60 * 1000);

        return () => clearInterval(intervalId);

    }, [hour, isAmerican.unit])
    useEffect(() => {
        setMainday(data[0])
    }, [data[0]]
    )
    return (
        <div className='Screen'>
            <TopScreen data={data} setMainday={setMainday} setAmerican={setAmerican} />
            <BottomScreen data={main_day} hour={hour} />
        </div>
    )
}

export default Screen