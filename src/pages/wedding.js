import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Map from "../components/map"

import "./wedding.scss"

const pageTitle = "Wedding"

const containerStyle = {}

const WeddingPage = () => {
  console.log(process.env.GATSBY_LOL_TEST)
  return (
    <Layout location={pageTitle}>
      <SEO title={pageTitle} />
      <h1 className="title cursive">Wedding</h1>
      <div className="mapContainer" style={containerStyle}>
        {<Map />}
      </div>
    </Layout>
  )
}

export default WeddingPage
