import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import PlaceHolder from "../images/placeHolder"
import PlaceHolder from "../images/party/blankProfile"

// Bridesmaids
import EmilyImg from "../images/party/bridesMaids/emily"
import AmandaImg from "../images/party/bridesMaids/amanda"
import CarlisleImg from "../images/party/bridesMaids/carlisle"
import ElizabethImg from "../images/party/bridesMaids/elizabeth"
import AudreyImg from "../images/party/bridesMaids/audrey"
import ClareImg from "../images/party/bridesMaids/clare"
import MichelleImg from "../images/party/bridesMaids/michelle"
import GeorgieImg from "../images/party/bridesMaids/georgie"
import AhlynImg from "../images/party/bridesMaids/ashlyn"

// Groomsmen
import EthanImg from "../images/party/groomsMen/ethan"

import "./party.scss"

const pageTitle = "Wedding Party"

// TODO: actually fill this in
const partyMembers = [
  { name: "Carlisle Harper", title: "Maid of Honor", Img: CarlisleImg },
  { name: "Zachary Balciunas", title: "Best Man" },

  { name: "Michelle Martinsen", Img: MichelleImg },
  { name: "Patrick Powers" },

  { name: "Emily Harris", Img: EmilyImg },
  { name: "Jorge Arevalo" },

  { name: "Amanda Powers", Img: AmandaImg },
  { name: "Juan Camillo Arevallo" },

  { name: "Elizabeth Hans", Img: ElizabethImg },
  { name: "Hudson Birdsong" },

  { name: "Audrey Aguilar", Img: AudreyImg },
  { name: "Cade Rampy" },

  { name: "Clare Lamers", Img: ClareImg },
  { name: "Andrew Griesel" },

  { name: "Georgie Metz", Img: GeorgieImg },
  { name: "Tristan Partin" },

  { name: "Marie Martinsen" },
  { name: "Ethan Partin", Img: EthanImg },

  { name: "Ashlyn Harper", Img: AhlynImg },
  { name: "" },
]

// const partyMembers = [...Array(20)].map((_, i) => ({
//   name: i % 2 ? `Joseph-${i}` : `Savannah-${i}`,
//   title: "title",
// }))

const PersonSquare = ({ name, i, title, Img }) => (
  <div key={name} className="square">
    {Img ? <Img /> : <PlaceHolder />}
    <h2>{name}</h2>
    <h3>{title ? title : i % 2 ? "Bridesmaid" : "Groomsmen"}</h3>
  </div>
)

const genPartySquares = () => {
  const partySquares = []

  for (let i = 1; i < partyMembers.length; i += 2) {
    partySquares.push(
      <>
        <PersonSquare i={i} {...partyMembers[i - 1]} />
        <div key={`bar-${i}`} className="bar" />
        <PersonSquare i={i + 1} {...partyMembers[i]} />
      </>
    )
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
      <p>Meet our Bridesmaids and Groomsmen</p>
    </div>

    {genPartySquares()}
  </Layout>
)

export default IndexPage
