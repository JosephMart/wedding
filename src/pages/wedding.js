import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const pageTitle = "Wedding"

const WeddingPage = () => (
  <Layout location={pageTitle}>
    <SEO title={pageTitle} />
    <div style={{ maxWidth: `600px` }}>
      <Image file="homeImg.jpg" />
    </div>
  </Layout>
)

export default WeddingPage