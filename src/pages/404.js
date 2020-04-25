import React from "react"

import Layout from "../components/layout"
import Img from "../images/404Img"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Woops!" />
    <h3 style={{ textAlign: "center ", padding: "3em" }}>
      Looks like Joseph messed up...
    </h3>
    <div
      style={{ height: "500px", justifyContent: "center", display: "block" }}
    >
      <Img />
    </div>
  </Layout>
)

export default NotFoundPage
