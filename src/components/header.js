import React from "react"
import classNames from "classnames"
import { Link } from "gatsby"

import "./header.scss"

const Header = () => {
  const currentPath = "Home" // todo get this dynamically
  const links = [
    ["Home", "/"],
    ["Our Story", "/story/"],
    ["Wedding", "/wedding/"],
    ["Wedding Party", "/party/"],
    ["Travel", "/travel/"],
    ["Registry", "registry"],
    ["RSVP", "/rsvp/"],
  ]
  const desktopNav = links.map(([name, path]) => (
    <li>
      <Link to={path} className={classNames({ active: name === currentPath })}>
        {name}
      </Link>
    </li>
  ))
  return (
    <>
      <header>
        <div className="flex-container">
          <div className="flex-container header">
            <h5>August 29, 2020</h5>
            <h5>San Antonio, TX</h5>
          </div>
          <h5 className="hashtag">#MarryingMartinsen</h5>
        </div>
        <div className="flex-container header">
          <h1>Savannah &amp; Joseph</h1>
        </div>
      </header>
      <nav>
        <ul>{desktopNav}</ul>
        <div className="bar" />
      </nav>
    </>
  )
}

export default Header
