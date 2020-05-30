import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProposalImg from "../images/proposalImg"
import ProposalImg01 from "../images/proposalImg01"
import ProposalImg02 from "../images/proposalImg02"

import "./story.scss"
const pageTitle = "Our Story"

const IndexPage = () => (
  <Layout location={pageTitle} idName="Story">
    <SEO title={pageTitle} />
    <h1 className="title cursive">Our Story</h1>

    <div className="image">
      <ProposalImg01 />
    </div>

    <h3>Once Upon a Time </h3>
    <p>
      We met on Thursday August 28<sup>th</sup>, 2015 while attending the
      freshmen Connect retreat at St. Mary’s Catholic Student Center in
      Aggieland. When the retreat began, we both wanted to make friends and get
      involved at St. Mary’s. Little did we know that our connection from our
      small group table would last a lifetime. Fast forward and we are now
      getting married five years and one day after meeting.
    </p>

    <h3>The Proposal</h3>

    <div className="image">
      <ProposalImg />
    </div>

    <p>
      It is said that if a couple walks under the Century Tree together, they
      will be together forever. What better place to ask the one he loves? After
      lots of planning and some help from some friends, Joseph got down on one
      knee and Savannah said yes to forever together.
    </p>

    <h3>Happily, Ever After</h3>

    <div className="image">
      <ProposalImg02 />
    </div>
  </Layout>
)

export default IndexPage
