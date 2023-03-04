import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (

    <footer className="footer">
      <div className="footer-container">

        <p className="h1 logo">
          <a href="#">
            Kuwar<span>.</span>
          </a>
        </p>

        <p className="copyright">
          &copy; 2023 <a href="#" style={{ "textDecoration": "none" }}>KuwarJha</a>. All rights reserved
        </p>

      </div>
    </footer>


  )
}

export default Footer