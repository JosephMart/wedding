import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PlaceHolder from "../images/placeHolder"

import "./party.scss"

const pageTitle = "Wedding Party"

// TODO: actually fill this in
const partyMembers = [...Array(20)].map((_, i) => ({
  name: i % 2 ? `Joseph-${i}` : `Savannah-${i}`,
  title: "title",
}))

const personSquare = ({ name, info, title }) => (
  <div key={name} className="square">
    <PlaceHolder />
    <h2>{name}</h2>
    <h3>{title}</h3>
  </div>
)

const genPartySquares = () => {
  const partySquares = []

  for (let i = 1; i < partyMembers.length; i += 2) {
    partySquares.push([
      personSquare(partyMembers[i - 1]),
      <div key={`bar-${i}`} className="bar" />,
      personSquare(partyMembers[i]),
    ])
  }
  return partySquares.map((children, i) => (
    <div key={`partSquare-${i}`} className="partySquares">
      {children}
    </div>
  ))
}

const IndexPage = () => (
  <Layout location={pageTitle} idName="WeddingParty">
    <SEO title={pageTitle} />
    <div className="titleHead">
      <h1 className="title cursive">Wedding Party</h1>
      <p>Meet our close buds.</p>
    </div>

    {genPartySquares()}
  </Layout>
)

export default IndexPage
