import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `800px` }}>
      <Image file="homeImg.jpg" />
    </div>
  </Layout>
)

export default IndexPage
