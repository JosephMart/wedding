import React from "react"

import Layout from "../components/layout"
import HomeImg from "../images/homeImg"
import SEO from "../components/seo"

import "./index.scss"

const pageTitle = "Home"

const IndexPage = () => (
  <Layout location={pageTitle}>
    <SEO title={pageTitle} />
    <HomeImg />
    <br />

    <div className="names">
      <h1 className="cursive">Savannah Grace Harper</h1>
      <h5>AND</h5>
      <h1 className="cursive">Joseph Michael Martinsen</h1>
    </div>

    <div className="homeInfo">
      <div className="location">
        <h2>
          August 29<sup>th</sup>, 2020
        </h2>
      </div>
      <div className="bar" />
      <div className="date">
        <h2>San Antonio, TX</h2>
      </div>
    </div>
  </Layout>
)

export default IndexPage
