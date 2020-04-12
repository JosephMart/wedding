/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.scss"

const Layout = ({ location, children }) => {
  return (
    <>
      <section>
        <Header location={location} />
        <main id={location}>
          {children}
          {/* Footer */}
          <div className="footer">
            <h1 className="cursive">S &amp; J</h1>
          </div>
        </main>
      </section>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
