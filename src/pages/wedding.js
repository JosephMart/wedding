import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Map from "../components/map"

import "./wedding.scss"

const pageTitle = "Wedding Details"

const WeddingPage = () => {
  console.log(process.env.GATSBY_LOL_TEST)
  return (
    <Layout location={pageTitle} idName="Wedding">
      <SEO title={pageTitle} />
      <h1 className="title cursive">Wedding</h1>
      <p>
        The mass will begin promptly at 4:30 PM at
        <address>
          <p>Sacred Heart Chapel</p>
          <p>Pvt Rd</p>
          <p>San Antonio, TX 78237</p>
        </address>
      </p>

      <h1 className="cursive">Reception</h1>
      <p>A cocktail hour, dinner &amp; dancing will follow at 6:30 PM at</p>
      <address>
        <p>Kendall Plantation</p>
        <p>20 Guthrie Rd</p>
        <p>Boerne, TX 78006</p>
      </address>

      <div className="accommodations">
        <h1 className="cursive">Accommodations</h1>
        <p>For your convenience a block of rooms will soon be reserved.</p>
        <p>If interested, please check back soon for more information.</p>
      </div>

      <div className="mapContainer">
        <Map />
      </div>
    </Layout>
  )
}

export default WeddingPage
