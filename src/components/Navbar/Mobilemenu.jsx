import React from "react";
import "./Mobilemenu.css";
import project from "../../img/project-management.png";
import Skill from "../../img/Skills.png";
import works from "../../img/works.png";
import contact from "../../img/Contact.png";
import close from "../../img/close.png";
const Mobilemenu = ({ isOpen, setisOpen }) => {
  return (
    <div className="Mobilemenu">
      <div className="close-icon" onClick={() => setisOpen(!isOpen)}>
        <img className="close-img" src={close} alt="close"></img>
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#Skills">
            <img className="mobile-option-img" src={Skill} alt="project"></img>
            <p className='web-option-title'>Skills</p>
          </a>
        </div>
        <div className="mobile-option">
          <a href="#Projects">
            <img
              className="mobile-option-img"
              src={project}
              alt="project"
            ></img>
            <p className='web-option-title'>Project</p>
          </a>
        </div>
        <div className="mobile-option">
          <a href="#Wroks">
            <img className="mobile-option-img" src={works} alt="project"></img>
            <p className='web-option-title'>Works</p>
          </a>
        </div>
        <div className="mobile-option">
          <a href="#Contact">
            <img
              className="mobile-option-img"
              src={contact}
              alt="project"
            ></img>
           <p className='web-option-title'>Contact</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Mobilemenu;
