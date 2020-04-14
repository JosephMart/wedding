import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./rsvp.scss"

const pageTitle = "RSVP"

const IndexPage = () => (
  <Layout location={pageTitle}>
    <SEO title={pageTitle} />
    <div className="title">
      <h1 className="cursive">{"RS V P"}</h1>
    </div>

    <div className="info">
      <p>
        Please let us know your plans here by entering your name as it appears
        on your invitation.
      </p>
      <p>We hope we get to celebrate together!</p>
    </div>

    <div className="search">
      <input type="text" />
      <button>Search</button>
    </div>
  </Layout>
)

export default IndexPage
