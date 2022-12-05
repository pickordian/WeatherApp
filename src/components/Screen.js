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
    const [location, setLoc] = useState("Denton"); 
    const [temp_unit, setUnit] = useState("Celsius");

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
                <DetailCard temp_unit={temp_unit} > </DetailCard>
            <Searchbar location={location} setLoc={setLoc} > </Searchbar>
            </div>
        </div>
    )
}

export default Screen