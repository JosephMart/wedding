import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./watch.scss"

const pageTitle = "Watch"

const WatchPage = () => (
  <Layout location={pageTitle}>
    <SEO title={pageTitle} />
    <h1 className="title cursive">Watch</h1>

    {process.env.GATSBY_STREAM_URL ? (
      <div className="videoWrapper">
        <iframe
          width="560"
          height="315"
          modestbranding="1"
          title="wedding-stream"
          src={`${process.env.GATSBY_STREAM_URL}?modestbranding=1&color=white`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    ) : (
      <h3>Come back soon to watch the stream!</h3>
    )}
  </Layout>
)

export default WatchPage
