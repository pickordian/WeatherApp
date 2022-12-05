import React from 'react'
import '../style/detailCard.css'
function detailCard(props) {
  return (
    <div className='detailCard'>{props.temp_unit}</div>
  )
}

export default detailCard
