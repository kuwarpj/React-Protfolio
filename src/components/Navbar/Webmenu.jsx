import React from 'react'
import "./webmenu.css"
import project from "../../img/project-management.png"
import Skill from "../../img/Skills.png"
import works from "../../img/works.png"
import contact from "../../img/Contact.png"
const Webmenu = () => {
  return (
    <div className='Webmenu'>
      <div className='web-option'>
        <a href='#Skills'>
            <img className='web-option-img' src={Skill} alt="project"></img><p className='web-option-title'>Skills</p>
        </a>
      </div>
      <div className='web-option'>
      <a href='#Projects'>
            <img className='web-option-img' src={project} alt="project"></img><p className='web-option-title'>Project</p>
        </a>
      </div>
      <div className='web-option'>
      <a href='#Wroks'>
            <img className='web-option-img' src={works} alt="project"></img><p className='web-option-title'>Works</p>
        </a>
      </div>
      <div className='web-option'>
      <a href='#Contact'>
            <img className='web-option-img' src={contact} alt="project"></img><p className='web-option-title'>Contact</p>
        </a>
      </div>


    </div>

  )
}

export default Webmenu