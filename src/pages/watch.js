import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import F from "../images/f"
import YT from "../images/yt"

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
    <h2>Click to watch on one of the two platforms below!</h2>

    <div className="row">
      <div className="item">
        <a
          href="https://www.facebook.com/czdigitalmedia/posts/3232718040098962"
          target="_blank"
          rel="noopener noreferrer"
        >
          <F />
        </a>
      </div>
      <div className="item">
        <a
          href="https://www.youtube.com/watch?v=Kl-26caWN4s"
          target="_blank"
          rel="noopener noreferrer"
        >
          <YT />
        </a>
      </div>
    </div>
  </Layout>
)

export default WatchPage
