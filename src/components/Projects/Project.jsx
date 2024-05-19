import React from "react";
import "./Project.css";
import githubIcon from "../../assets/github.png";
const Project = ({ projectTitle, projectDesc, imagePath, projectLink,displayClass }) => {
  const divStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imagePath})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    textShadow: "0 0.05rem 0.1rem rgba(0, 0, 0, 0.5)",
  };

  return (
    <div className={`project ${displayClass}`}>
      <div className="project-left" style={divStyle}>
      <div className="caption">
      <img src={githubIcon} alt="" />
        <a href={projectLink}>
          <p>View on Github</p>
        </a>
      </div>
      </div>
      <div className="project-right">
        <p>{projectTitle}</p>
        <p>{projectDesc}</p>
      </div>  
    </div>
  );
};

export default Project;
