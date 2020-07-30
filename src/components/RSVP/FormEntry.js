import React from "react"
import classNames from "classnames"

import "./FormEntry.scss"
import { ADD_GUEST } from "../../reducers/guestReducer"
import FormRow from "./FormRow"

const FormEntry = ({ state, dispatch, show, setRegisterState, email }) => {
  const rows = state.map((r, i) => (
    <FormRow key={`FormRow-${i}`} index={i} dispatch={dispatch} {...r} />
  ))

  const updateEmail = e => {
    const { value } = e.target
    setRegisterState(state => ({ ...state, email: value }))
  }

  return (
    <div className={classNames({ FormEntry: true, hide: !show, show })}>
      {/* Header */}
      <div className="formRow header">
        <div className="headerName">
          <h3>Name</h3>
        </div>

        <div className="headerAction" />
      </div>

      {/* Rows */}
      {rows}

      {/* Add new row or Submit */}
      <div className="formRow footerAdd">
        <button
          className="fancyButton"
          type="button"
          onClick={() => dispatch({ type: ADD_GUEST })}
        >
          <h3>
            <span>Add Guest</span>
          </h3>
        </button>
      </div>
      <div className="formRow">
        <div className="inputEmail">
          <h3>If you would like to receive any possible updates.</h3>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={updateEmail}
          />
        </div>
      </div>
    </div>
  )
}

export default FormEntry
