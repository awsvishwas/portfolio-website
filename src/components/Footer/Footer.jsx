import React from 'react'
import './Footer.css'
import instaImg from '../../assets/instagram.png'
import twitterImg from '../../assets/twitter.png'
import linkedIn from '../../assets/linkedin.png'
import youtubeImg from '../../assets/youtube.png'
const Footer = () => {
  return (
    <div className='footer container-margin'>
        <div className='displayBlock'>
        <ul>
            <li> &copy; 2024. All Rights Reserved.</li>
            <li>Made by Vishwajeet Kumar.</li>
        </ul>

        <div className='social-icons'>
            <p>Follow me on my social media accounts.</p>
            <img src={instaImg} alt=""/>
            <img src={twitterImg} alt="" />
            <img src={linkedIn} alt="" />
            <img src={youtubeImg} alt="" />
        </div>

        </div>
      <ul>
        <li>Terms of Service</li>
        <li>Get in Touch</li>
      </ul>
    </div>
  )
}

export default Footer
