import React from "react";
// import Typical from 'react-typical'

import heroset from "../asset/img/hero-banner-sm.png";
import header1 from "../asset/img/header4.png"
import Social from "../Social/Social";
import resume from "./Resume.pdf";
import liv from "../asset/img/web4.png"
import "./About.css";
function About() {
  return (
    <div className="about" >
      <div className="hero" id="home">
        <div className="hero-banner">
          <div className="imgDiv">
            <img
              src={heroset}
              alt="A man in a blue shirt with a happy expression"
              class="w-100"
            />
          </div>
        </div>

        <div class="hero-content">
          <h2 class="h2 hero-title">Transforming ideas into reality through product design and development.</h2>

          <a href="#Contact" class="btn btn-primary">
            Get in touch
          </a>
        </div>

      </div>

      <div className="about-bottom">
        <Social />
      </div>
    </div>
  );
}

export default About;
