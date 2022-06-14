import React from 'react'
import './Skills.css'
import './Skills.css'
import { FcApproval } from 'react-icons/fc'
import { SiHtml5 } from 'react-icons/si'
import html from '../../img/html.png'
import javascript from '../../img/javascript.png'
import react from '../../img/react.png'
import node from '../../img/nodejs.png'
import mongo from '../../img/mongodb.png'
import c from '../../img/c.png'
import java from '../../img/java.png'
import python from '../../img/python.png'
import respponsive from '../../img/responsive-devices.png'
import datascience from '../../img/data-science.png'
import angular from '../../img/angular.png'
import flutter from '../../img/flutter.png'
import firebase from '../../img/firebase.png'
import php from '../../img/php.png'
import css from '../../img/css3.png'
import { SkillsData } from '../../data/SkillsData'

const Skills = () => {
    const data = SkillsData
    return (
        <>
            <div className="section-title">
                <h2>Skills</h2>
                <div className="new1"></div>
                <div className="new2"></div>
            </div>
            <div className="Skills">
                <div className="skills-container">
                    <div className="skills-title-cont">
                        <h3 className="skills-title">FrontEnd</h3>
                    </div>

                    <div className="skill-section">
                        <img src={html}></img>
                        <span>HTML</span>
                    </div>

                    <div className="skill-section">
                        <img src={css}></img>
                        <span>CSS</span>
                    </div>

                    <div className="skill-section">
                        <img src={react}></img>
                        <span>React Js</span>
                    </div>

                    <div className="skill-section">
                        <img src={javascript}></img>
                        <span>JavaScript</span>
                    </div>

                    <div className="skill-section">
                        <img src={respponsive}></img>
                        <span>Responsive</span>
                    </div>
                </div>
            </div>

            <div className="Skills">
                <div className="skills-container">
                    <div className="skills-title-cont">
                        <h3 className="skills-title">Backend</h3>
                    </div>

                    <div className="skill-section">
                        <img src={node}></img>
                        <span>Node Js</span>
                    </div>
                    <div className="skill-section">
                        <img src={php}></img>
                        <span>PHP</span>
                    </div>

                    <div className="skill-section">
                        <img src={mongo}></img>
                        <span>MongoDB</span>
                    </div>

                    <div className="skill-section">
                        <img src={javascript}></img>
                        <span>JavaScript</span>
                    </div>

                  

                    
                </div>
            </div>

            <div className="Skills">
                <div className="skills-container">
                    <div className="skills-title-cont">
                        <h3 className="skills-title">Android Dev</h3>
                    </div>

                    <div className="skill-section">
                        <img src={java}></img>
                        <span>Java</span>
                    </div>

                    <div className="skill-section">
                        <img src={react}></img>
                        <span>React Native</span>
                    </div>

                    <div className="skill-section">
                        <img src={flutter}></img>
                        <span>Flutter</span>
                    </div>

                    <div className="skill-section">
                        <img src={mongo}></img>
                        <span>MongoDB</span>
                    </div>
                    <div className="skill-section">
                        <img src={firebase}></img>
                        <span>Firebase</span>
                    </div>

                    
                </div>
            </div>
        </>
    )
}

export default Skills
