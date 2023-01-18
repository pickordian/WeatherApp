import React from 'react'
import OtherDays from './OtherDays'
import TempUnit from './TempUnit'
import '../style/TopScreen.css'
 function TopScreen() {
  return (
    <div className='TopScreen'>
      <OtherDays />
      <OtherDays />
      <OtherDays />
      <OtherDays />
      <OtherDays />
      <OtherDays />
      <OtherDays />
      <TempUnit/>
    </div>
  )
}
export default TopScreen