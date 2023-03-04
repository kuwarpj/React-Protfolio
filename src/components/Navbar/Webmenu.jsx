import React from 'react'
import "./webmenu.css"

const Webmenu = () => {
  return (
    <div className='Webmenu'>
      <div className='web-option'>
        <a href='#'>
          <p className='web-option-title'>Home</p>
        </a>
      </div>
      <div className='web-option'>
        <a href='#About'>
          <p className='web-option-title'>About</p>
        </a>
      </div>
      <div className='web-option'>
        <a href='#Skills'>
          <p className='web-option-title'>Skills</p>
        </a>
      </div>
      <div className='web-option'>
        <a href='#services'>
          <p className='web-option-title'>Services</p>
        </a>
      </div>
      <div className='web-option'>
        <a href='#work'>
          <p className='web-option-title'>Project</p>
        </a>
      </div>
      <div className='web-option'>
        <a href='#Clients'>
          <p className='web-option-title'>Works</p>
        </a>
      </div>
      <div className='web-option'>
        <a href='#Testimonialss'>
          <p className='web-option-title'>Testimonials</p>
        </a>
      </div>
      <div className='web-option'>
        <a href='#contact'>
          <p className='web-option-title'>Contact</p>
        </a>
      </div>
      <a href="https://drive.google.com/file/d/1B6dKxFhlu9IA5gIbEusdF5qe4leOQDBn/view?usp=share_link" target="_blank">
        <button className="res-button">
          Resume
        </button>
      </a>

    </div>

  )
}

export default Webmenu