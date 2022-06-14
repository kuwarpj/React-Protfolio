import React from "react";
import { ProjectData } from "../../data/ProjectData";

import "./Projects.css";
const Projects = () => {
  const data = ProjectData;
  return (
    <section className="Project-section">
      <div className="section-title">
        <h2>Projects</h2>
        <div className="new1"></div>
        <div className="new2"></div>
      </div>

      {data.map((items) => {
        return (
          <a href={items.github} target="_blank">
            <div className="proj-row">
              <div className="proj-items-inner">
                <div className="proj-img">
                  <img src={items.image} alt="Project-Images" />
                  <div className="image_overlay">
                    <div className="image_title">{items.title}</div>
                    <p className="image_desc">{items.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        );
      })}
    </section>
  );
};

export default Projects;
