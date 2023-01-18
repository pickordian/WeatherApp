import React, { useState } from 'react'
import '../style/Screen.css'
import BottomScreen from './BottomScreen'
import TopScreen from './TopScreen'
function Screen() {
    const [data, setData] = useState({});
    return (
        <div className='Screen'>
            <TopScreen/>
            <BottomScreen />
        </div>
    )
}

export default Screen