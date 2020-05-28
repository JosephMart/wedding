import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./registry.scss"

import AmazonImg from "../images/registry/amazon.png"
import BBBImg from "../images/registry/bbb.svg"
import CrateImg from "../images/registry/crateBarrel.png"
import PotteryImg from "../images/registry/pottery.png"
// import PotteryBarnImg from "../images/registry/potteryBarn.svg"

const pageTitle = "Registry"

const IndexPage = () => (
  <Layout location={pageTitle}>
    <SEO title={pageTitle} />
    <h1 className="title cursive">Registry</h1>
    <p className="titleInfo">Here are some places we looked at.</p>

    <div className="row">
      <div className="logo">
        <img
          src={AmazonImg}
          className="amazon"
          alt="Registry Location Amazon"
        />
      </div>
      <div className="logo">
        <img src={BBBImg} className="bbb" alt="Bed Bath & Beyond Logo" />
      </div>
      <div className="logo">
        <img src={PotteryImg} className="pottery" alt="Pottery Barn Logo" />
      </div>
    </div>

    <div className="row">
      <div className="logo">
        <img src={CrateImg} className="crate" alt="Crate & Barrel Logo" />
      </div>
    </div>
    {/* amazon, bed bath and beyond, pottery barn, crate and barrel */}
    {/* <AmazonImg /> */}
    {/* <img src={BBBImg} alt="Bed Bath & Beyond Logo" height="130px" /> */}
    {/* <PotteryBarnImg /> */}
    {/* <img src={PotteryBarnImg} alt="Pottery Barn Logo" height="130px" /> */}
  </Layout>
)

export default IndexPage
