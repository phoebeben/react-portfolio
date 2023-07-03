import React from "react";
import pfp from "../pfp.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  return (
    <div className="about-container">
      <div className="header-div">
        <h1 className="about-header">Phoebe Benbow</h1>
      </div>
      <div className="image-div">
        <img className="profile-image" src={pfp} alt="pfp"></img>
      </div>
      <div className="title-div">
        <p className="title">Full-stack Developer</p>
      </div>
      <div className="location-div d-flex justify-content-center">
        <FontAwesomeIcon icon={faLocationDot} className="location-icon"/>
        <p>London, UK</p>
      </div>
      <div className="bootcamp-div">
        <p id="bootcamp-para">👩‍💻Le Wagon bootcamp graduate - June 2023</p>
      </div>
      <div className="techstack-div">
      </div>
    </div>

  )
}

export default About;
