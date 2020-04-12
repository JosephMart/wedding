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
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const desktopNav = links.map(([name, path]) => (
    <li key={name}>
      <Link to={path} className={classNames({ active: name === location })}>
        {name}
      </Link>
    </li>
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
          <h5 className="hashtag">#MarryingMartinsen</h5>
        </div>
        <div className="flex-container">
          <h1>Savannah &amp; Joseph</h1>
        </div>
      </header>
      <nav>
        <ul>{desktopNav}</ul>
        <div className="bar" />
      </nav>
    </div>
  )
}

Header.defaultProps = {
  location: links[0][0],
}

Header.propTypes = {
  location: propTypes.string,
}

export default Header
