import React from 'react'
import './Skills.css'
import awsIcon from '../../assets/aws.png'
import nodeIcon from '../../assets/node.png'
import reactIcon from '../../assets/react.png'
import expressIcon from '../../assets/express.png'
import nextIcon from '../../assets/next.png'
import tfIcon from '../../assets/terraform.png'
import linuxIcon from '../../assets/linux.png'
import kubeIcon from '../../assets/kube.png'
import vscodeIcon from '../../assets/vscode.png'
import pythonIcon from '../../assets/python.png'


const Skills = () => {
  return (
    <div className='skills'>
        <div className="skills-container">
        <p>Technologies I have been working recently.</p>
        <div className='tech-icons'>
        
            <img src={pythonIcon} alt="" />
            <img src={nodeIcon} alt="" />
            <img src={reactIcon} alt="" />
            <img src={expressIcon} alt="" />
            <img src={nextIcon} alt="" />
            <img src={tfIcon} alt="" />
            <img src={kubeIcon} alt="" />
            <img src={vscodeIcon} alt="" />
            <img src={linuxIcon} alt="" />
            <img src={awsIcon} alt="" />
        </div>
        </div>
      
    </div>
  )
}

export default Skills
