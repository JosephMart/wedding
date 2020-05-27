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

  // Redirect to /rsvp if no state has been passed in
  useEffect(() => {
    if (needToRedirect) {
      navigate("/rsvp")
    }
  })

  if (needToRedirect) {
    return null
  }

  const headerText = rsvpState.success ? `Thanks for your RS V P!` : `Woops...`

  return (
    <PageWrapper>
      <h1 className="title cursive">{headerText}</h1>
      <p>{`${rsvpState.msg}`}</p>
    </PageWrapper>
  )
}

export default RSVPResultPage
