import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Map from "../components/map"

import "./wedding.scss"

const pageTitle = "Wedding Details"

const WeddingPage = () => (
  <Layout location={pageTitle} idName="Wedding">
    <SEO title={pageTitle} />
    <h1 className="title cursive">Wedding</h1>
    <p>
      The mass will begin promptly at 4:30 PM at
      <a
        href="https://maps.google.com/maps?ll=29.426978,-98.54315&z=17&t=m&hl=en-US&gl=US&mapclient=apiv3&cid=4826326906391070726"
        target="_blank"
        rel="noopener noreferrer"
      >
        <address>
          <p>Sacred Heart Chapel</p>
          <p>Pvt Rd</p>
          <p>San Antonio, TX 78237</p>
        </address>
      </a>
    </p>

    <h1 className="cursive">Reception</h1>
    <p>A cocktail hour, dinner &amp; dancing will follow at 6:30 PM at</p>
    <a
      href="https://maps.google.com/maps?ll=29.78995,-98.601522&z=18&t=m&hl=en-US&gl=US&mapclient=apiv3&cid=11158093104063480470"
      target="_blank"
      rel="noopener noreferrer"
    >
      <address>
        <p>Kendall Plantation</p>
        <p>20 Guthrie Rd</p>
        <p>Boerne, TX 78006</p>
      </address>
    </a>

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

export default WeddingPage
