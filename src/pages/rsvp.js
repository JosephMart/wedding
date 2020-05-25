import React, { useState, useReducer } from "react"
import classNames from "classnames"
import ky from "ky"
import { usePromiseTracker } from "react-promise-tracker"
import { trackPromise } from "react-promise-tracker"
import BeatLoader from "react-spinners/BeatLoader"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FormEntry from "../components/RSVP/FormEntry"

import guestReducer from "../reducers/guestReducer"

import "./rsvp.scss"

const pageTitle = "RSVP"

const SearchResultsText = ({ hasSearched, foundMatch, match }) => {
  if (!hasSearched) {
    return null
  }

  if (!foundMatch) {
    return <p>{"No result found"}</p>
  }

  return (
    <>
      <p>{`Found RSVP for ${match.firstName} ${match.lastName}!`}</p>
      {/* <p>{`Please come back later to RSVP when Joseph has the service up and running :)`}</p> */}
    </>
  )
}

const RSVPPage = () => {
  const [searchState, setSearchState] = useState({
    hasSearched: false,
    foundMatch: false,
    searchText: "",
    registered: false,
    match: undefined,
  })

  const [guestState, guestDispatcher] = useReducer(guestReducer, [
    {
      name: "Joseph Martinsen",
      diet: {
        vegetarian: false,
        celiac: true,
        dairy: false,
      },
    },
    {
      name: "Savannah Harper",
      diet: {
        vegetarian: true,
        celiac: false,
        dairy: true,
      },
    },
  ])

  const [registerState, setRegisterState] = useState({
    registered: false,
    rsvpName: "AMY CLARK",
  })
  const { promiseInProgress } = usePromiseTracker()

  /**
   * Search for RSVP invitation
   */
  const handleSearch = async () => {
    trackPromise(
      ky
        .get("https://registry-two.now.sh/api/canRegister", {
          // .get("http://localhost:3000/api/canRegister", {
          searchParams: new URLSearchParams({ name: searchState.searchText }),
        })
        .json()
        .then(parsed => {
          console.log(parsed)
          const { rsvp: match } = parsed

          setSearchState(state => ({
            ...state,
            hasSearched: true,
            foundMatch: parsed.success,
            match,
          }))

          if (match === undefined) {
            return
          }

          // Set first user register entry as the RSVP user, if no users set?
          setRegisterState(state => ({
            ...state,
            rsvpName: match.rsvpName,
            users: [
              {
                firstName: match.firstName,
                lastName: match.lastName,
                diet: {
                  vegetarian: false,
                  celiac: false,
                  dairy: false,
                },
              },
            ],
          }))
        })
    )
  }

  const tryToRegister = async () => {
    trackPromise(
      ky
        .post("https://registry-two.now.sh/api/register", {
          // .post("http://localhost:3000/api/register", {
          // json: { rsvpName: registerState.match.rsvpName, users: registerState.users },
          json: {
            rsvpName: registerState.rsvpName,
            users: registerState.users,
          },
        })
        .json()
        .then(parsed => {
          console.log(parsed)
          setRegisterState(state => ({
            ...state,
            registered: parsed.success,
          }))
        })
    )
  }

  /**
   * Search with Enter key
   */
  const handleKeyDownSearch = e => {
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
  const wrong = searchState.hasSearched && !searchState.foundMatch // this is just !correct?

  return (
    <Layout location={pageTitle}>
      <SEO title={pageTitle} />
      <h1 className="title cursive">{"RS V P"}</h1>
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
          onKeyDown={handleKeyDownSearch}
          className={classNames({
            correct,
            wrong,
          })}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Search Result Message */}
      <div className={classNames({ message: true, correct, wrong })}>
        {promiseInProgress === true && (
          <div className="loading">
            <BeatLoader />
          </div>
        )}
        <SearchResultsText
          hasSearched={searchState.hasSearched}
          foundMatch={searchState.foundMatch}
          match={searchState.match}
        />
      </div>

      {searchState.foundMatch ||
        (true && (
          <FormEntry
            state={guestState}
            dispatch={guestDispatcher}
            setRegisterState={setRegisterState}
            tryToRegister={tryToRegister}
          />
        ))}
    </Layout>
  )
}

export default RSVPPage
