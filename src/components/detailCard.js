import React from 'react'
import '../style/detailCard.css'
function detailCard(props) {
  return (
    <div className='detailCard'>{props.val} { props.unit}</div>
  )
}

export default detailCard
