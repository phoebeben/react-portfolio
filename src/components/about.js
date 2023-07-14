import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import {TypeAnimation} from 'react-type-animation';

const About = () => {
  return (
    <div className="about-container">
      <div className="header-div">
       <TypeAnimation sequence={ ['PHOEBE BENBOW', 1000] }
       wrapper="span"
       speed={10}
       style={{ marginTop: '80px', color: 'white', fontWeight: 'bold', letterSpacing: '.5rem', fontSize: '70px', textAlign: 'right'}}
       repeat={Infinity}/>
      </div>
      <div className="title-div">
        <p className="title">Full-stack Developer</p>
      </div>
      <div className="location-div d-flex justify-content-end">
        <FontAwesomeIcon icon={faLocationDot} className="location-icon"/>
        <p id="location-text">London, UK</p>
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
