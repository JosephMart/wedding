import React, { useState, useReducer } from "react"
import classNames from "classnames"
import ky from "ky"
import { usePromiseTracker } from "react-promise-tracker"
import { trackPromise } from "react-promise-tracker"
import BeatLoader from "react-spinners/BeatLoader"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FormEntry from "../components/RSVP/FormEntry"

import guestReducer, {
  UPDATE_GUEST,
  EMPTY_GUEST,
} from "../reducers/guestReducer"

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
  // State for searching and finding an RSVP match
  const [searchState, setSearchState] = useState({
    hasSearched: false,
    foundMatch: false,
    searchText: "",
    registered: false,
    match: undefined,
  })

  // Keep track registration info, should be a state machine?
  const [registerState, setRegisterState] = useState({
    attending: true,
    attendingModified: false,
    registered: false,
    rsvpName: "",
  })

  // State for tracking guests added to the RSVP list
  const [guestState, guestDispatcher] = useReducer(guestReducer, [])

  // I am too lazy to implement a reducer to load my search fetch request...
  const { promiseInProgress } = usePromiseTracker()

  /**
   * Search for RSVP invitation
   */
  const handleSearch = async () => {
    trackPromise(
      ky
        // .get("https://registry-two.now.sh/api/canRegister", {
        .get("http://localhost:3000/api/canRegister", {
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

          // If not success, something bad happened or no result found
          if (!parsed.success) {
            return
          }

          // Store the rsvpName internally for registration, could use searchState?
          setRegisterState(state => ({
            ...state,
            rsvpName: match.rsvpName,
          }))

          // Set first user register entry as the RSVP user, if no users set?
          guestDispatcher({
            type: UPDATE_GUEST,
            index: 0,
            data: {
              ...EMPTY_GUEST,
              name: `${match.firstName} ${match.lastName}`,
            },
          })
        })
    )
  }

  /**
   * Handle the submit registration
   */
  const tryToRegister = async () => {
    trackPromise(
      ky
        // .post("https://registry-two.now.sh/api/register", {
        .post("http://localhost:3000/api/register", {
          // json: { rsvpName: registerState.match.rsvpName, users: registerState.users },
          json: {
            rsvpName: registerState.rsvpName,
            users: guestState,
          },
        })
        .json()
        .then(parsed => {
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

  /**
   * On search text change
   */
  const onTextChange = e => {
    const searchText = e.target.value
    setSearchState(state => ({ ...state, searchText }))
  }

  const handleAttending = e => {
    const attending = e.target.name.split("-")[1] === "1"
    setRegisterState(state => ({
      ...state,
      attendingModified: true,
      attending,
    }))
  }

  const correct = searchState.hasSearched && searchState.foundMatch
  const wrong = searchState.hasSearched && !searchState.foundMatch

  return (
    <Layout location={pageTitle}>
      <SEO title={pageTitle} />
      {/* Header info */}
      <h1 className="title cursive">{"RS V P"}</h1>
      <div className="info">
        <p>
          Please let us know your plans here by entering your name as it appears
          on your invitation.
        </p>
        <p>
          Please RSVP by August 1<sup>st</sup>, 2020
        </p>
        <p>We hope we get to celebrate together!</p>
      </div>

      {/* Search input */}
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

      {/* Search Result Message and Loader */}
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

      {/* Accept or decline invitation */}
      {correct && (
        <div className="invitationAnswer">
          <h1 className="cursive">Will you be attending?</h1>
          <fieldset name="attending" className="fancyInputSelect">
            {/* TODO: these should be radio buttons for accessibility */}
            <input
              type="checkbox"
              id="attending-1"
              name="attending-1"
              checked={
                registerState.attendingModified && registerState.attending
              }
              onChange={handleAttending}
            />
            <label htmlFor="attending-1">Joyfully Accept</label>

            <input
              type="checkbox"
              id="attending-0"
              name="attending-0"
              checked={
                registerState.attendingModified && !registerState.attending
              }
              onChange={handleAttending}
            />
            <label htmlFor="attending-0">Regretfully Decline</label>
          </fieldset>
        </div>
      )}

      {/* RSVP Form entry */}
      {registerState.attendingModified &&
        correct &&
        registerState.attending && (
          <FormEntry
            state={guestState}
            dispatch={guestDispatcher}
            setRegisterState={setRegisterState}
            tryToRegister={tryToRegister}
          />
        )}
    </Layout>
  )
}

export default RSVPPage
