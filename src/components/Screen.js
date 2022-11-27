import React from 'react'
import '../style/Screen.css'
import DetailCard from './detailCard'
import DaysCard from './daysCard'
import Searchbar from './searchBar'

function Screen() {
    return (
        <div className='Screen'>
            <div className='Screen top'>
            <DaysCard></DaysCard>
            <DaysCard></DaysCard>
            <DaysCard></DaysCard>
            <DaysCard></DaysCard>
            <DaysCard></DaysCard>
            <DaysCard></DaysCard>
            <DaysCard></DaysCard>
            </div>
            <div className='middle'>
                <DetailCard> </DetailCard>
                <Searchbar></Searchbar>
            </div>
        </div>
    )
}

export default Screen