import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./watch.scss"

const pageTitle = "Watch"

const WatchPage = () => (
  <Layout location={pageTitle}>
    <SEO title={pageTitle} />
    <h1 className="cursive">Livestream</h1>

    <div className="videoWrapper">
      <iframe
        title="livestream"
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/Kl-26caWN4s"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>

    <h1 className="cursive">Highlights</h1>

    <div className="videoWrapper">
      <div>
        <iframe
          title="highlights"
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/jVFTowOKGuE"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  </Layout>
)

export default WatchPage
