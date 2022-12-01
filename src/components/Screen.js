import React, {useState} from 'react'
import '../style/Screen.css'
import DetailCard from './detailCard'
import DaysCard from './daysCard'
import Searchbar from './searchBar'
import UnitConver from './UnitConver'
const ConverUnit = () => {

}
function Screen() {
    const date = new Date();
    const [detail_date, setDate] = useState();
    const [location, setLoc] = useState({ lat: '', long: '' });
    const [temp_unit, setUnit] = useState({ val: 5, unit: "°C" });
    return (
        <div className='Screen'>
            <div className='Screen top'>
                <DaysCard></DaysCard>
                <DaysCard ></DaysCard>
                <DaysCard ></DaysCard>
                <DaysCard ></DaysCard>
                <DaysCard ></DaysCard>
                <DaysCard ></DaysCard>
                <DaysCard></DaysCard>
                <UnitConver temp_unit = {temp_unit} setUnit={setUnit}> </UnitConver>
            </div>
            <div className='middle'>
                <DetailCard val ={temp_unit.val} unit={temp_unit.unit} > </DetailCard>
            <Searchbar></Searchbar>
            </div>
        </div>
    )
}

export default Screen