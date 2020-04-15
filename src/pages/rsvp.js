import React, { useState } from "react"
import classNames from "classnames"
import ky from "ky"
import { usePromiseTracker } from "react-promise-tracker"
import { trackPromise } from "react-promise-tracker"
import BeatLoader from "react-spinners/BeatLoader"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FormEntry from "../components/RSVP/FormEntry"

import "./rsvp.scss"

const pageTitle = "RSVP"
const noResultMsg = "No result found"

const RSVPPage = () => {
  const [searchState, setSearchState] = useState({
    hasSearched: false,
    foundMatch: false,
    searchText: "",
  })
  const { promiseInProgress } = usePromiseTracker()

  /**
   * Search for RSVP invitation
   */
  const handleSearch = async () => {
    trackPromise(
      ky
        .get("https://registry-two.now.sh/api/register", {
          // .get("http://localhost:3000/api/canRegister", {
          searchParams: new URLSearchParams({ name: searchState.searchText }),
        })
        .json()
        .then(parsed => {
          console.log(parsed)
          setSearchState(state => ({
            ...state,
            hasSearched: true,
            foundMatch: parsed.success,
            match: parsed.rsvp,
          }))
        })
    )
  }

  const genMsg = () => {
    if (!searchState.hasSearched) {
      return null
    }
    return searchState.foundMatch ? (
      <>
        <p>{`Found RSVP for ${searchState.match.firstName} ${searchState.match.lastName}!`}</p>
        <p>{`Please come back later to RSVP when Joseph has the service up and running :)`}</p>
      </>
    ) : (
      noResultMsg
    )
  }

  /**
   * Search with Enter key
   */
  const handleKeyDown = e => {
    // Enter key
    if (e.keyCode === 13) {
      handleSearch()
    }
  }

  const onTextChange = e => {
    const searchText = e.target.value
    setSearchState(state => ({ ...state, searchText }))
  }

  const correct = searchState.hasSearched && searchState.foundMatch
  const wrong = searchState.hasSearched && !searchState.foundMatch

  return (
    <Layout location={pageTitle}>
      <SEO title={pageTitle} />
      <div className="title">
        <h1 className="cursive">{"RS V P"}</h1>
      </div>

      <div className="info">
        <p>
          Please let us know your plans here by entering your name as it appears
          on your invitation.
        </p>
        <p>We hope we get to celebrate together!</p>
      </div>

      <div className="search">
        <input
          type="text"
          name="name"
          value={searchState.searchText}
          onChange={onTextChange}
          onKeyDown={handleKeyDown}
          className={classNames({
            correct,
            wrong,
          })}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Search Result Message */}
      <div className={classNames({ message: true, correct, wrong })}>
        {promiseInProgress === true ? <BeatLoader /> : genMsg()}
      </div>

      {/* RSVP Form */}
      <div className="rsvpForm">
        <FormEntry />
      </div>
    </Layout>
  )
}

export default RSVPPage
