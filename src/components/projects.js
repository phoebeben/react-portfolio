import React, { useState } from "react";

function Projects({ description, project, image}) {
  const [toggleClass, setToggleClass] = useState(false)

  const toggleDescription = () => {
    setToggleClass(!toggleClass);
  }

  return (
    <div className="card m-3" style={{backgroundColor: "white"}}>
      <h3>{project.name}</h3>
      <img src={image} alt="Project"></img>
      <div>
        <p id="techstack-text">Tech stack:</p>
        <div className="mb-1">
          {project.techstack}
        </div>
        <button onClick={toggleDescription} className="btn btn-primary mt-2 mb-2">See Description</button>
        {toggleClass && <p id="description-text">{description}</p>}
        <div className="mt-2 mb-3">
          <a href={project.link} id="project-link" target="_blank" rel="noreferrer">Demo</a>
          <a href={project.github} id="project-github" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </div>
  )
}

export default Projects;
