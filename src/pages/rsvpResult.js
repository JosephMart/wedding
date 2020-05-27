import React, { useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./rsvpResult.scss"

const pageTitle = "RSVP | Result"

const PageWrapper = ({ children }) => (
  <Layout location={pageTitle} idName="RSVPResult">
    <SEO title={pageTitle} />
    {children}
  </Layout>
)

const RSVPResultPage = ({ location, navigate }) => {
  const rsvpState = location.state
  const needToRedirect = rsvpState?.rsvpName === undefined

  console.log(needToRedirect)
  // Redirect to /rsvp if no state has been passed in
  useEffect(() => {
    console.log("sup")
    if (needToRedirect) {
      navigate("/rsvp")
    }
  })

  if (needToRedirect) {
    return null
  }

  // const searchParams = new URLSearchParams(props.location.search)

  // if (searchParams.has("error")) {
  //   console.log("we got an error")
  // }

  // for (let p of searchParams) {
  //   console.log(p)
  // }
  // console.log(searchParams)

  if (rsvpState.success) {
    return (
      <PageWrapper>
        <h1 className="title cursive">Thanks for your {"RS V P"}!</h1>
        <p>We Look forward to seeing you!</p>
      </PageWrapper>
    )
  }
  return (
    <PageWrapper>
      <p>hello world</p>
    </PageWrapper>
  )
}

export default RSVPResultPage
