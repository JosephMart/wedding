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
          src="https://player.vimeo.com/video/456403905?byline=0&portrait=0"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </div>
  </Layout>
)

export default WatchPage
