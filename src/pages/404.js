import React from "react"

import Layout from "../components/layout"
import Img from "../images/404Img"
import SEO from "../components/seo"

import "./404.scss"

const NotFoundPage = () => (
  <Layout idName="NotFound">
    <SEO title="Woops!" />
    <div className="homeImg">
      <Img />
    </div>
    <h3>Looks like Joseph messed up...</h3>
  </Layout>
)

export default NotFoundPage
