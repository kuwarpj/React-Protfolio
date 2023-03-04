import React from 'react'
import { useState } from 'react'
import './Skills.css'

import { FcApproval } from 'react-icons/fc'
import { SiHtml5 } from 'react-icons/si'
import html from '../asset/img/html.png'
import javascript from '../asset/img/javascript.png'
import react from '../asset/img/react.png'
import node from '../asset/img/nodejs.png'
import mongo from '../asset/img/mongodb.png'
import c from '../asset/img/c.png'
import java from '../asset/img/java.png'
import python from '../asset/img/python.png'
import respponsive from '../asset/img/responsive-devices.png'

import angular from '../asset/img/angular.png'
import flutter from '../asset/img/flutter.png'

import css from '../asset/img/css3.png'
import { SkillsData } from '../../data/SkillsData'

const Skills = () => {
    const data = SkillsData

    return (

        <div className="skills" id="Skills">
            <div className="skills-content">
                <h1 className="h1">Skill</h1>
                <h2 className="h2 ">What My Programming Skills Included?</h2>
                <p className="section-text">
                    I have expertise in programming using the MERN stack, which includes MongoDB, ExpressJS, ReactJS, and NodeJS. With this skill set, I am capable of developing efficient and high-performance web applications. <br></br><br></br>Additionally, I possess strong skills in WordPress development, allowing me to create custom WordPress websites and themes, as well as develop and integrate plugins. My knowledge of these technologies enables me to deliver quality solutions that meet my clients' needs while adhering to industry standards.
                </p>
            </div>

            <div className="skills-box" data-skills-box>
                <div className="skills-list">
                    <div className="skill-card">
                        <div className="tooltip"></div>

                        <div className="card-icon">
                            <img src={html} alt="HTML5 logo" />
                        </div>
                    </div>

                    <div className="skill-card">
                        <div className="tooltip"></div>

                        <div className="card-icon">
                            <img src={css} alt="HTML5 logo" />
                        </div>
                    </div>

                    <div className="skill-card">
                        <div className="tooltip"></div>

                        <div className="card-icon">
                            <img src={react} alt="HTML5 logo" />
                        </div>
                    </div>

                    <div className="skill-card">
                        <div className="tooltip"></div>

                        <div className="card-icon">
                            <img src={javascript} alt="HTML5 logo" />
                        </div>
                    </div>

                    <div className="skill-card">
                        <div className="tooltip"></div>

                        <div className="card-icon">
                            <img src={node} alt="HTML5 logo" />
                        </div>
                    </div>

                    <div className="skill-card">
                        <div className="tooltip"></div>

                        <div className="card-icon">
                            <img src={mongo} alt="HTML5 logo" />
                        </div>
                    </div>

                    <div className="skill-card">
                        <div className="tooltip"></div>

                        <div className="card-icon">
                            <img src={python} alt="HTML5 logo" />
                        </div>
                    </div>

                    <div className="skill-card">
                        <div className="tooltip"></div>

                        <div className="card-icon">
                            <img src={c} alt="HTML5 logo" />
                        </div>
                    </div>
                    <div className="skill-card">
                        <div className="tooltip"></div>

                        <div className="card-icon">
                            <img src={java} alt="HTML5 logo" />
                        </div>
                    </div>
                    <div className="skill-card">
                        <div className="tooltip"></div>

                        <div className="card-icon">
                            <img src={respponsive} alt="HTML5 logo" />
                        </div>
                    </div>
                    <div className="skill-card">
                        <div className="tooltip"></div>

                        <div className="card-icon">
                            <img src={angular} alt="HTML5 logo" />
                        </div>
                    </div>
                    <div className="skill-card">
                        <div className="tooltip"></div>

                        <div className="card-icon">
                            <img src={flutter} alt="HTML5 logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Skills
