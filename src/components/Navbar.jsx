import React from 'react'
import './Navbar.css'
import {Link} from 'react-scroll';

const Navbar = () => {
  return (

    <nav className='navbar container'>
        <h1 className='logo'>portfolio.</h1>
        <ul>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='about' smooth={true} offset={-130} duration={500}>About Me</Link></li>
            <li><Link to='services' smooth={true} offset={-110} duration={500}>Services</Link></li>
            <li><Link to='projects' smooth={true} offset={-180} duration={500}>Projects</Link></li>
            <li><Link to='contact' smooth={true} offset={-140} duration={500}>Contact</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
