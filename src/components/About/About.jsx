import React from "react";
// import Typical from 'react-typical'
import pic1 from "../../img/storyset.png"
import Social from "../Social/Social";
import resume from "./Resume.pdf"
import "./About.css";
function About() {
  return (
    <div className="about">
      

      <div className="about-top">
        <div className="about-info">
        <p className="about-para">Hey! I'm <span className="about-name">Kuwar Jha</span> </p>
         <span className="about-job">FrontEnd Engineer</span>
         <p className="about-tagline">This is Official Website of Mine</p>
         <div className="buttons">
         <div className="btn">
<a href={resume} target="_blank">
<button className="button1">Resume</button></a>
</div>
<div className="btn">
<a href = "mailto: kuwarjha2500@gmail.com">
<button className="button2">Hire Me</button></a>
</div>
</div>
        </div>
        <div className="about-img">
          <img className="about-picture" src={pic1}></img>
        </div>

      </div>

      <div className="about-bottom">

        <Social />
      </div>




     
        


    </div>
  );
}

export default About;
