import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Map from "../components/map"

const pageTitle = "Wedding"

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "40em",
}

const WeddingPage = () => {
  console.log(process.env.GATSBY_LOL_TEST)
  return (
    <Layout location={pageTitle}>
      <SEO title={pageTitle} />
      <h1 className="title cursive">Wedding</h1>
      <div style={containerStyle}>{<Map />}</div>
    </Layout>
  )
}

export default WeddingPage
