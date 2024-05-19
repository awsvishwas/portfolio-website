import React from 'react'
import './Hero.css'
import myImage from '../../assets/img.jpg'
import { BoxIconElement } from 'boxicons'
const Hero = () => {
  return (
    
    <div className='hero container'>
        <div className='hero-left'>
            <p className='hello'>Hello</p>
            <h1>I'm Frank.</h1>
            <h3>Full-Stack Developer</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident reprehenderit, aut unde ratione, mollitia modi amet dicta
            </p>
            <div className='icons-box'>
            <a className="icon-button"><box-icon type='logo' name='github' size="lg" color='#5AB2FF' animation='tada-hover'></box-icon></a>
            <a className="icon-button"><box-icon type='logo' name='linkedin' size="lg" color='#5AB2FF' animation='tada-hover' ></box-icon></a>
            <a className="icon-button"><box-icon type="logo" name="discord-alt" size="lg" color='#5AB2FF' animation='tada-hover'></box-icon></a>
            </div>

            <button className='btn'>Let's Connect</button>
            </div>

        <div className='hero-right'>
            <img src={myImage} alt="" />
            
            
        </div>
      
    </div>
  )
}

export default Hero
