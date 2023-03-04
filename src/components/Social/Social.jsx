import React from "react";
import "./Social.css";

import exp from "../asset/img/1.png";
import pro from "../asset/img/2.png"
import clien from "../asset/img/3.png"

const Social = () => {
  return (
    <div className="Social">


      <div className="stats" id="stats">



        <div className="stats-card">

          <div className="card-icon">
            <img src={exp} alt="Badge icon" />
          </div>

          <h2 className="h2 card-title">
            1+ <strong>Years of Experience</strong>
          </h2>



        </div>



        <div href="#" className="stats-card">

          <div className="card-icon">
            <img src={pro} alt="Checkmark icon" />
          </div>

          <h2 className="h2 card-title">
            15+ <strong>Completed Projects</strong>
          </h2>



        </div>



        <div href="#" className="stats-card">

          <div className="card-icon">
            <img src={clien} alt="Peoples rating icon" />
          </div>

          <h2 className="h2 card-title">
            10+ <strong>Happy Clients</strong>
          </h2>



        </div>


      </div>
    </div>

  );
};

export default Social;
