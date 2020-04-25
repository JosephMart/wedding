import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const pageTitle = "Travel"

const IndexPage = () => (
  <Layout location={pageTitle}>
    <SEO title={pageTitle} />
    <h1 className="title cursive">Travel</h1>
  </Layout>
)

export default IndexPage
