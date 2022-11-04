import React from 'react'

const StatBox = (props) => {
  return (
    <div className='stat-box'>
        <h5>{props.title}</h5>
        <p>{props.count}</p>
    </div>
  )
}

export default StatBox