import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const pageTitle = "Wedding Party"

const IndexPage = () => (
  <Layout location={pageTitle}>
    <SEO title={pageTitle} />
  </Layout>
)

export default IndexPage
