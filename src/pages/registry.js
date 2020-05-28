import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./registry.scss"

import AmazonImg from "../images/registry/amazon.png"
import BBBImg from "../images/registry/bbb.svg"
import CrateImg from "../images/registry/crateBarrel.png"
import PotteryImg from "../images/registry/pottery.png"

const pageTitle = "Registry"

const IndexPage = () => (
  <Layout location={pageTitle}>
    <SEO title={pageTitle} />
    <h1 className="title cursive">Registry</h1>

    <div className="titleInfo">
      <p>While we are the Bride and Groom </p>
      <p>We can’t wait to celebrate with you</p>
      <p>Yet if a gift is your intention</p>
      <p>We thought that we would mention</p>
      <p>We’d love a treasure from our registry </p>
      <p>To start the home of our little family</p>
    </div>

    <div className="row">
      <a
        href="https://www.amazon.com/wedding/share/marrying-martinsen"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="logo">
          <img
            src={AmazonImg}
            className="amazon"
            alt="Registry Location Amazon"
          />
        </div>
      </a>
      <a
        href="https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/548792761?eventType=Wedding"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="logo">
          <img src={BBBImg} className="bbb" alt="Bed Bath & Beyond Logo" />
        </div>
      </a>

      <a
        href="https://www.potterybarn.com/registry/fss5x6hxqs/registry-list.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="logo">
          <img src={PotteryImg} className="pottery" alt="Pottery Barn Logo" />
        </div>
      </a>
    </div>

    <div className="row">
      <a
        href="https://www.crateandbarrel.com/gift-registry/savannah-harper-and-joseph-martinsen/r6114275"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="logo">
          <img src={CrateImg} className="crate" alt="Crate & Barrel Logo" />
        </div>
      </a>
    </div>
    {/* amazon, bed bath and beyond, pottery barn, crate and barrel */}
    {/* <AmazonImg /> */}
    {/* <img src={BBBImg} alt="Bed Bath & Beyond Logo" height="130px" /> */}
    {/* <PotteryBarnImg /> */}
    {/* <img src={PotteryBarnImg} alt="Pottery Barn Logo" height="130px" /> */}
  </Layout>
)

export default IndexPage
