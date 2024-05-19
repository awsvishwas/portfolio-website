import React, { useState,useEffect } from 'react'
import './Projects.css'
import Project from './Project'
import { projectDetails } from '../../variables'
import backIcon from '../../assets/back-icon.png'
import nextIcon from '../../assets/next-icon.png'
const Projects = () => {
  const [direction, setDirection] = useState('')  
  const [slide, setSlide] = useState(0)
  const nextSlide = () => {
    setDirection('right')
    setSlide(slide === projectDetails.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setDirection('left')
    setSlide(slide === 0 ? projectDetails.length - 1 : slide - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(interval)
  }, [slide])
  
  return (
    <div className='projects-section container-margin'>          
        <div className='projects'>
          <img src={backIcon} alt="" className='arrow arrow-left' onClick={prevSlide} />
            {
                projectDetails.map((project,idx)=>(
                 <Project 
                    key={project.title}
                    projectTitle={project.title} 
                    projectDesc={project.description}
                    imagePath={project.imagePath} 
                    projectLink={project.projectLink}
                    displayClass={slide === idx ? (direction === 'right' ? 'slide-in-right' : 'slide-in-left') : "slide-hidden"} 
                    />                    
                ))
            }
          <img src={nextIcon} alt="" className='arrow arrow-right' onClick={nextSlide} />
          <span className="indicators">
        {projectDetails.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => {
                setDirection(idx > slide  ? 'right' : 'left')
                setSlide(idx)
              }}
            ></button>
          );
        })}
      </span>
        </div>
    </div>
  )
}
import './Projects.css'
export default Projects
