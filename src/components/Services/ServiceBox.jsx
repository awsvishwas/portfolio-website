import React from 'react'
import './ServiceBox.css'

const ServiceBox = ({boxColor, boxIcon, boxTitle, boxDesc}) => {
  return (
    <div className='service-box' style={{background: boxColor}}>
        <img src={boxIcon} alt="" className='box-icon' />
        <h3>{boxTitle}</h3>
        <p>{boxDesc}</p>
        

    </div>
  )
}

export default ServiceBox