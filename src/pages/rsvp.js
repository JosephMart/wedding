import React, { useState } from "react"
import classNames from "classnames"
import ky from "ky"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./rsvp.scss"

const pageTitle = "RSVP"
const noResultMsg = "No result found"

const RSVPPage = () => {
  const [searchState, setSearchState] = useState({
    hasSearched: false,
    foundMatch: [],
    searchText: "",
  })

  /**
   * Search for RSVP invitation
   */
  const handleSearch = async () => {
    // const parsed = await ky.get("http://localhost:3000/api/register").json()
    const parsed = await ky
      .get("https://registry-two.now.sh/api/register")
      .json()

    console.log(parsed)
    setSearchState(state => ({
      ...state,
      hasSearched: true,
      foundMatch: parsed.rsvps.filter(
        ({ firstName }) => firstName === state.searchText
      ),
    }))
  }

  const genMsg = () =>
    searchState.foundMatch.length > 0
      ? `Found RSVP for ${searchState.foundMatch[0].firstName} ${searchState.foundMatch[0].lastName}!`
      : noResultMsg

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

  const correct = searchState.hasSearched && searchState.foundMatch.length > 0
  const wrong = searchState.hasSearched && !searchState.foundMatch.length > 0

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

      <div className={classNames({ message: true, correct, wrong })}>
        <p>{genMsg()}</p>
      </div>
    </Layout>
  )
}

export default RSVPPage
