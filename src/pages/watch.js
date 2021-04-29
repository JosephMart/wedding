import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/video"

import "./watch.scss"

const pageTitle = "Watch"

const WatchPage = () => (
  <Layout location={pageTitle}>
    <SEO title={pageTitle} />

    <h1 className="cursive">Livestream</h1>
    <Video src="https://www.youtube-nocookie.com/embed/Kl-26caWN4s" />

    <h1 className="cursive">Highlights</h1>
    <Video src="https://www.youtube-nocookie.com/embed/jVFTowOKGuE" />
  </Layout>
)

export default WatchPage
