import React from 'react'
import './Projects.css'
import Project from './Project'
import { projectDetails } from '../../variables'
const Projects = () => {
  return (
    <div className='projects-section container-margin'>
        <p>Some of my projects below:</p>
            
        <div className='projects'>
            {
                projectDetails.map((project)=>(
                 <Project 
                    key={project.title}
                    projectTitle={project.title} 
                    projectDesc={project.description}
                    imagePath={project.imagePath} 
                    projectLink={project.projectLink}                   />                    
                ))
            }
        </div>
    </div>
  )
}
import './Projects.css'
export default Projects
