import React from 'react'
import './Navbar.css'

import hamburg2 from '../asset/img/square.png'
import Webmenu from './Webmenu'
import { useState, useEffect } from 'react'
import Mobilemenu from './Mobilemenu'

function Navbar() {
  const [isOpen, setisOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [navbarColor, setNavbarColor] = useState('transparent')

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset
      setScrollPosition(currentScrollPosition)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (scrollPosition > 30) {
      setNavbarColor('#FFFFFF') // change to desired color when scrolling down
    } else {
      setNavbarColor('transparent') // restore to original color when scrolling up
    }
  }, [scrollPosition])
  return (
    <div
      className="Navbar"
      style={{ backgroundColor: navbarColor, }}
    >
      <div className="title">Kuwar.</div>
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
  )
}

export default Navbar
