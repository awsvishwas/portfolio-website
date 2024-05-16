import React, {useState} from 'react'
import './Experience.css'
import {companies} from '../../variables'
const Experience = () => {
  const [selectedCompany, setSelectedCompany] = useState(companies[0]);
  
  const handleCompanyChange = (companyName) => {
    setSelectedCompany(companyName);
  };
  return (
     <div className="experience">
       <div className="work-experience">
      <nav className="company-buttons">
        {companies.map((company) => (
          <button
            key={company.name}
            className={`company-button ${selectedCompany.name===company.name? 'active':''}`} 
            onClick={() => handleCompanyChange(company)}
          >
            {company.name}
          </button>
        ))}
      </nav>
      {selectedCompany && (
      <section className="experience-details">
          <div>
            <h2>{selectedCompany.name}</h2>
            <p>{selectedCompany.experience}</p>
          </div>
        
      </section>
      )}
    </div>
     </div>
  )
}

export default Experience





{/* <div className='experience container-margin'>
    
    <p>
        
    Lorem ipsum dolor sit amet consectetur 
    adipisicing elit. Eos praesentium earum sunt 
    repellat beatae perspiciatis molestias, 
    expedita veritatis repellendus itaque? 
    Libero veritatis ullam minima 
    repellendus laudantium animi nemo quis optio.
    </p>

  <div className='exp-boxes'>
    <div className="exp-box">
        <p>May 2022 - July 2022</p>
        <h3>Data Analyst Intern</h3>
        <h4>Celebal Technologies</h4>
        <p>Lorem ipsum, dolor sit amet 
            consectetur adipisicing elit. 
            Repellat dolorem possimus necessitatibus 
            cum modi, rerum aspernatur, officia, quas 
            totam laboriosam minima tempore? 
            Necessitatibus similique placeat 
            laborum amet suscipit corporis facilis!</p>
    </div>
    <div className="exp-box">
    <p>May 2022 - July 2022</p>
        <h3>Data Analyst Intern</h3>
        <h4>Celebal Technologies</h4>
        <p>Lorem ipsum, dolor sit amet 
            consectetur adipisicing elit. 
            Repellat dolorem possimus necessitatibus 
            cum modi, rerum aspernatur, officia, quas 
            totam laboriosam minima tempore? 
            Necessitatibus similique placeat 
            laborum amet suscipit corporis facilis!</p>
   
    </div>
    <div className="exp-box">
    <p>May 2022 - July 2022</p>
        <h3>Data Analyst Intern</h3>
        <h4>Celebal Technologies</h4>
        <p>Lorem ipsum, dolor sit amet 
            consectetur adipisicing elit. 
            Repellat dolorem possimus necessitatibus 
            cum modi, rerum aspernatur, officia, quas 
            totam laboriosam minima tempore? 
            Necessitatibus similique placeat 
            laborum amet suscipit corporis facilis!</p>
   
    </div>
  </div>
</div> */}