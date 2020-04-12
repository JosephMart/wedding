import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const pageTitle = "Home"

const IndexPage = () => (
  <Layout location={pageTitle}>
    <SEO title={pageTitle} />
    <div style={{ maxHeight: `100px`, maxWidth: "100%" }}>
      <Image file="homeImg.jpg" />
    </div>
  </Layout>
)

export default IndexPage
