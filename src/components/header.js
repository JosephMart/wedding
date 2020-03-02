import React from "react"
import classNames from "classnames"
import { Link } from "gatsby"

import "./header.scss"

const Header = () => {
  const currentPath = "Home" // todo get this dynamically
  const links = [
    ["Home", "/"],
    ["Wedding", "/wedding/"],
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
        <h1>Joseph &amp; Savannah</h1>
      </header>
      <nav>
        <ul>{desktopNav}</ul>
        <div className="bar" />
      </nav>
    </>
  )
}

export default Header
