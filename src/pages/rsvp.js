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

// const API_URL = "http://localhost:3000"
const API_URL = "https://registry-two.now.sh"

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
    </>
  )
}

const RSVPPage = props => {
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
    attending: false,
    attendingModified: false,
    registered: false,
    message: "",
    rsvpName: "",
    registering: false,
  })

  // State for tracking guests added to the RSVP list
  const [guestState, guestDispatcher] = useReducer(guestReducer, [])

  // I am too lazy to implement a reducer to load my search fetch request...
  const { promiseInProgress } = usePromiseTracker()

  if (registerState.registering) {
    return (
      <Layout location={pageTitle}>
        <SEO title={pageTitle} />
        <div className="message registerLoading">
          <div className="loading">
            <BeatLoader />
          </div>
        </div>
      </Layout>
    )
  }

  const handlePersonalMessage = e => {
    const { value: message } = e.target
    setRegisterState(state => ({ ...state, message }))
  }

  /**
   * Search for RSVP invitation
   */
  const handleSearch = async () => {
    trackPromise(
      ky
        .get(`${API_URL}/api/canRegister`, {
          searchParams: new URLSearchParams({ name: searchState.searchText }),
        })
        .json()
        .then(parsed => {
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
    setRegisterState(state => ({ ...state, registering: true }))
    trackPromise(
      ky
        .post(`${API_URL}/api/register`, {
          json: {
            rsvpName: registerState.rsvpName,
            message: registerState.message,
            users: guestState,
            attending: registerState.attending,
          },
        })
        .json()
        .then(parsed => {
          setRegisterState(state => ({
            ...state,
            registered: parsed.success,
          }))
          props.navigate("/rsvpResult", {
            state: {
              rsvpName: registerState.rsvpName,
              success: parsed.success,
              msg: parsed.msg,
              data: parsed.data,
            },
          })
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
        <button className="fancyButton" onClick={handleSearch}>
          <h4>Search</h4>
        </button>
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
        <div
          className={classNames({
            invitationAnswer: true,
            showinvitationAnswer: correct,
          })}
        >
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
      <FormEntry
        show={correct && registerState.attending}
        state={guestState}
        dispatch={guestDispatcher}
      />

      <div
        className={classNames({
          submitRSVP: true,
          showSubmit: correct && registerState.attendingModified,
        })}
      >
        <textarea
          placeholder="Leave a Message for the Bride &amp; Groom..."
          onChange={handlePersonalMessage}
          value={registerState.message}
        />
        <button className="fancyButton" onClick={tryToRegister}>
          <h3>Submit</h3>
        </button>
      </div>
    </Layout>
  )
}

export default RSVPPage
