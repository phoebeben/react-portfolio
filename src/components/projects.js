import React, { useState } from "react";

function Projects({ description, project, image}) {
  const [toggleClass, setToggleClass] = useState(false)

  const toggleDescription = () => {
    setToggleClass(!toggleClass);
  }

  return (
    <div className="card m-3 p-3" style={{backgroundColor: "#222222"}}>
      <h3 id="project-title">{project.name}</h3>
      <img src={image} alt="Project"></img>
      <div>
        <p id="techstack-text">Tech stack:</p>
        <div className="mb-1">
          <p id="techstack-list">{project.techstack}</p>
        </div>
        <button onClick={toggleDescription} className="btn btn-secondary mt-2 mb-4" id="button-description">See Description</button>
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
