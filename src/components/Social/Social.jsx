import React from "react";
import "./Social.css";

import github from "../../img/github.png";
import linkedin from "../../img/linkedin.png";
import facebook from "../../img/facebook.png";
import instagram from "../../img/instagram.png";
const Social = () => {
  return (
    <div className="Social">
      <a href="https://github.com/kuwarpj" target="_blank">
        <div className="social-icon">
          <img className="social-img" src={github}></img>
          <p>Github</p>
        </div>
      </a>
      <a href="https://www.linkedin.com/in/kuwarparasarjha/" target="_blank">
        <div className="social-icon">
          <img className="social-img" src={linkedin}></img>
          <p>LinkeDin</p>
        </div>
      </a>
      <a href="https://www.facebook.com/Kumaar2500/" target="_blank">
        <div className="social-icon">
          <img className="social-img" src={facebook}></img>
          <p>Facebook</p>
        </div>
      </a>
      <a href="https://www.instagram.com/kuwar_2500/" target="_blank">
        <div className="social-icon">
          <img className="social-img" src={instagram}></img>
          <p>Instagram</p>
        </div>
      </a>
    </div>
  );
};

export default Social;
