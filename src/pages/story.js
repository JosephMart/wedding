import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeImg from "../images/homeImg"

const pageTitle = "Our Story"

const IndexPage = () => (
  <Layout location={pageTitle}>
    <SEO title={pageTitle} />
    <h1 className="title cursive">Our Story</h1>
    <HomeImg />
  </Layout>
)

export default IndexPage
