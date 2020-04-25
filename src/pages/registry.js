import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

// import AmazonImg from "../images/registry/amazon"
// import BBBImg from "../images/registry/bbb.svg"
// import PotteryBarnImg from "../images/registry/potteryBarn.svg"

const pageTitle = "Registry"

const IndexPage = () => (
  <Layout location={pageTitle}>
    <SEO title={pageTitle} />
    <h1 className="title cursive">Registry</h1>

    {/* amazon, bed bath and beyond, pottery barn, crate and barrel */}
    {/* <AmazonImg /> */}
    {/* <img src={BBBImg} alt="Bed Bath & Beyond Logo" height="130px" /> */}
    {/* <PotteryBarnImg /> */}
    {/* <img src={PotteryBarnImg} alt="Pottery Barn Logo" height="130px" /> */}
  </Layout>
)

export default IndexPage
