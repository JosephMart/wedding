import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 align="center">Joseph &amp; Savannah</h1>

    <div style={{ maxWidth: `800px` }}>
      <Image file="homeImg.jpg" />
      <br />
      <h3 align="center">Coming soon....</h3>
    </div>
  </Layout>
)

export default IndexPage
