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
    <p>The mass will begin promptly at 4:30 PM at</p>
    <address>
      <a
        href="https://maps.google.com/maps?ll=29.426978,-98.54315&z=17&t=m&hl=en-US&gl=US&mapclient=apiv3&cid=4826326906391070726"
        target="_blank"
        rel="noopener noreferrer"
      >
        Sacred Heart Chapel <br />
        Pvt Rd
        <br />
        San Antonio, TX 78237
        <br />
      </a>
    </address>

    <h1 className="cursive">Reception</h1>
    <p>A cocktail hour, dinner &amp; dancing will follow at 6:30 PM at</p>
    <address>
      <a
        href="https://maps.google.com/maps?ll=29.78995,-98.601522&z=18&t=m&hl=en-US&gl=US&mapclient=apiv3&cid=11158093104063480470"
        target="_blank"
        rel="noopener noreferrer"
      >
        Kendall Point <br />
        20 Guthrie Rd <br />
        Boerne, TX 78006
      </a>
    </address>

    <h1 className="cursive">Accommodations</h1>
    <p>Rooms have been reserved for guests at</p>
    <address>
      <a
        href="https://www.google.com/maps/place/TownePlace+Suites+by+Marriott+San+Antonio+Northwest+at+The+RIM/@29.6112564,-98.5957597,18z/data=!3m1!4b1!4m8!3m7!1s0x865c656363d0757b:0xb7b8bb7f40fb57a9!5m2!4m1!1i2!8m2!3d29.611255!4d-98.5950861?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        TownePlace Suites by <br />
        Marriott Northwest at the Rim <br />
        17934 La Cantera Pkwy <br />
        San Antonio, TX 78257
      </a>
      <p>When booking, please reference the</p>
      <h2 className="cursive">Harper-Martinsen Wedding</h2>
    </address>

    <div className="mapContainer">
      <Map />
    </div>
  </Layout>
)

export default WeddingPage
