import React from "react";
import "./Mobilemenu.css";

import close from "../asset/img/close.png";
const Mobilemenu = ({ isOpen, setisOpen }) => {
  return (
    <div className="Mobilemenu">
      <div className="close-icon" onClick={() => setisOpen(!isOpen)}>
        <img className="close-img" src={close} alt="close"></img>
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href='#'>
            <p className='web-option-title'>Home</p>
          </a>
        </div>
        <div className="mobile-option">
          <a href='#About'>
            <p className='web-option-title'>About</p>
          </a>
        </div>
        <div className="mobile-option">
          <a href='#Skills'>
            <p className='web-option-title'>Skills</p>
          </a>
        </div>
        <div className="mobile-option">
          <a href='#services'>
            <p className='web-option-title'>Services</p>
          </a>
        </div>
        <div className="mobile-option">
          <a href='#work'>
            <p className='web-option-title'>Project</p>
          </a>
        </div>
        <div className="mobile-option">
          <a href='#Clients'>
            <p className='web-option-title'>Works</p>
          </a>
        </div>
        <div className="mobile-option">
          <a href='#Testimonialss'>
            <p className='web-option-title'>Testimonials</p>
          </a>
        </div>
        <div className='mobile-option'>
          <a href='#contact'>
            <p className='web-option-title'>Contact</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Mobilemenu;
