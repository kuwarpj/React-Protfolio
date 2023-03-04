import "./Projects.css";
import React from "react";
import { ProjectData } from "../../data/ProjectData";

const Projects = () => {
  const data = ProjectData;

  return (
    <div className="mywork" id="work">
      <div class="title-wrapper">
        <div>
          <h2 class="h2 section-title">
            Latest Projects
          </h2>

          <p class="section-text">
            Check out some of my personal projects.
          </p>
        </div>
      </div>

      <div className="project-row">
        {data.map((items) => {
          return (
            <div className="project" data-aos="fade-up">
              <div className="project-img">
                <img src={items.image} alt="" className="work-img" />
              </div>

              <div className="date-posted">
                <div className="who-post">
                  <p className="admin">{items.tags}</p>
                </div>
              </div>
              <div className="work-details">
                <h2>{items.title}</h2>
                <p className="work-info">{items.description}</p>
                <div className="project-links">
                  <a
                    href={items.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h6 className="learnmore">
                      <img src={items.demo} ></img>&nbsp; Live
                      Demo
                    </h6>
                  </a>
                  <a
                    href={items.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h6 className="learnmore">
                      <img src={items.source} ></img> &nbsp;
                      Source Code
                    </h6>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
