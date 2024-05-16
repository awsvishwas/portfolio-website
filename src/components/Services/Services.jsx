import React from 'react'
import './Services.css'
import ServiceBox from './ServiceBox'
import providerImg from '../../assets/provider.png'
import devImg from '../../assets/coding.png'
import devopsImg from '../../assets/devops.png'
import troubleShootingImg from '../../assets/troubleshooting.png'


const Services = () => {
    const description = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat dolorem possimus necessitatibus cum modi'
  return (
    <div className='services container-margin'>
        <ServiceBox boxTitle={'Web Development'} 
        boxColor={'#5AB2FF'}
        boxIcon={devImg}
        boxDesc={`${description}`}/>
        <ServiceBox boxTitle={'AWS Cloud Solutions'} 
        boxIcon={providerImg}
        boxColor={'#F5B041'}
        boxDesc={`${description}`}/>
        <ServiceBox boxTitle={'Devops CI/CD'} 
        boxIcon={devopsImg}
        boxColor={'#A569BD'}
        boxDesc={`${description}`}/>
        <ServiceBox 
        boxTitle={'Troubleshooting Infrastructre Issues'}
        boxIcon={troubleShootingImg}
        boxColor={'#58D68D'}
        boxDesc={`${description}`}/>
    </div>
  )
}

export default Services
