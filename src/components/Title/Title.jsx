import React from 'react'
import './Title.css'

const Title = ({title}) => {
  return (
    <div className='title'>
      <div className='title-text'>
      <h1>{title}</h1>
      </div>
    </div>
  )
}

export default Title 
