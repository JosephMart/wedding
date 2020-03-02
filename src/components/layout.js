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
import "./weddingCard.scss"

const Layout = ({ children }) => {
  return (
    <>
      <section id="WeddingCard">
        <Header />
        <main>{children}</main>
      </section>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
