import React from "react";
import "./Navbar.css";

import hamburg2 from "../../img/square.png";
import Webmenu from "./Webmenu";
import { useState } from "react";
import Mobilemenu from "./Mobilemenu";
function Navbar() {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="Navbar">
      <div className="title">Kuwar</div>
      <div className="menu">
        <div className="web-menu">
          <Webmenu />
        </div>

        <div className="mobile-menu">
          <div className="hamb" onClick={() => setisOpen(!isOpen)}>
            <img className="mob-menu" src={hamburg2} alt="Hamburg"></img>
          </div>

          {isOpen && <Mobilemenu isOpen={isOpen} setisOpen={setisOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
