import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
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
import AshlynImg from "../images/party/bridesMaids/ashlyn"
import MarieImg from "../images/party/bridesMaids/marie"

// Groomsmen
import EthanImg from "../images/party/groomsMen/ethan"
import TristanImg from "../images/party/groomsMen/tristan"
import WyattImg from "../images/party/groomsMen/wyatt"
import ZachImg from "../images/party/groomsMen/zach"
import HudsonImg from "../images/party/groomsMen/hudson"

import "./party.scss"

const pageTitle = "Wedding Party"

const partyMembers = [
  { name: "Carlisle Harper", title: "Maid of Honor", Img: CarlisleImg },
  { name: "Zachary Balciunas", title: "Best Man", Img: ZachImg },

  { name: "Elizabeth Hans", Img: ElizabethImg },
  { name: "Cade Rampy" },

  { name: "Ashlyn Harper", Img: AshlynImg },
  { name: "Wyatt Harper", Img: WyattImg },

  { name: "Emily Harris", Img: EmilyImg },
  { name: "Hudson Birdsong", Img: HudsonImg },

  { name: "Audrey Aguilar", Img: AudreyImg },
  { name: "Andrew Griesel" },

  { name: "Clare Lamers", Img: ClareImg },
  { name: "Tristan Partin", Img: TristanImg },

  { name: "Georgie Metz", Img: GeorgieImg },
  { name: "Ethan Partin", Img: EthanImg },

  { name: "Amanda Powers", Img: AmandaImg },
  { name: "Patrick Powers" },

  { name: "Michelle Martinsen", Img: MichelleImg },
  { name: "Juan Camillo Arevallo" },

  { name: "Marie Martinsen", Img: MarieImg },
  { name: "Jorge Arevalo" },
]

const PersonSquare = ({ name, i, title, Img }) => (
  <div key={name} className="square">
    {Img ? <Img /> : <PlaceHolder />}
    <h2>{name}</h2>
    <h3>{title ? title : i % 2 ? "Bridesmaid" : "Groomsmen"}</h3>
  </div>
)

const genPartySquares = () => {
  const partySquares = []

  // create the rows
  for (let i = 1; i < partyMembers.length; i += 2) {
    partySquares.push(
      <>
        <PersonSquare i={i} {...partyMembers[i - 1]} />
        <div key={`bar-${i}`} className="bar" />
        <PersonSquare i={i + 1} {...partyMembers[i]} />
      </>
    )
  }

  // create the cols
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
