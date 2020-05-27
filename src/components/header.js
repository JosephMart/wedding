import React, { useState, useEffect } from "react"
import classNames from "classnames"
import propTypes from "prop-types"
import { Link } from "gatsby"

import "./header.scss"

const links = [
  ["Home", "/"],
  ["Our Story", "/story/"],
  ["Wedding", "/wedding/"],
  ["Wedding Party", "/party/"],
  ["Travel", "/travel/"],
  ["Registry", "/registry/"],
  ["RSVP", "/rsvp/"],
]

const Header = ({ location }) => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [menuActive, toggleMenu] = useState(false)

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  const handleKeyDown = e => {
    // Enter key
    if (e.keyCode === 13) {
      toggleMenu(t => !t)
    }

    // Escape key
    if (e.keyCode === 27) {
      toggleMenu(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const desktopNav = links.map(([name, path]) => (
    <div key={name} className="navItem">
      <Link to={path} className={classNames({ active: name === location })}>
        {name}
      </Link>
    </div>
  ))
  return (
    <div
      className={classNames({ headerFixed: true, fixed: scrollPosition > 50 })}
    >
      <header>
        <div className="flex-container">
          <div className="flex-container">
            <h5 className="date">August 29, 2020</h5>
            <h5>San Antonio, TX</h5>
          </div>
          {/* Maybe this should direct to https://www.instagram.com/explore/tags/MarryingMartinsen/? */}
          <a
            className="hashtag"
            href="https://www.instagram.com/explore/tags/MarryingMartinsen/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h5>#MarryingMartinsen</h5>
          </a>
          {/* <h5 className="hashtag">#MarryingMartinsen</h5> */}
        </div>
        <div className="flex-container">
          <h1>Savannah &amp; Joseph</h1>
        </div>

        {/* Mobile */}
        <div className="headerFixed mobileHeader">
          <div
            className={classNames({
              "icon-one": true,
              "active-one": menuActive,
            })}
            onClick={() => toggleMenu(t => !t)}
            onKeyDown={handleKeyDown}
            role="button"
          >
            <div className="hamburger"></div>
          </div>
          <h1>Savannah &amp; Joseph</h1>
        </div>
      </header>
      <nav>
        <div className="navList">{desktopNav}</div>
        <div className="bar" />
      </nav>

      {/* Overlay Mobile Menu */}
      <div id="myNav" className={classNames({ overlay: true, menuActive })}>
        <div className="overlay-content navList">
          {desktopNav}
          <div className="navItem">
            <a
              className="hashtag"
              href="https://www.instagram.com/explore/tags/MarryingMartinsen/"
              target="_blank"
              rel="noopener noreferrer"
            >
              #MarryingMartinsen
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

Header.defaultProps = {
  location: "",
}

Header.propTypes = {
  location: propTypes.string,
}

export default Header
