import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./watch.scss"

const pageTitle = "Watch"

const WatchPage = () => (
  <Layout location={pageTitle}>
    <SEO title={pageTitle} />
    <h1 className="title cursive">Watch</h1>
    <p>
      Thank you to all of our friends and family joining us virtually, while we
      wish we could be with you in person, we are happy you are able to
      celebrate this special day with us! Thanks for all of your love and
      support today and throughout our lives!
    </p>
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
  </Layout>
)

export default WatchPage
