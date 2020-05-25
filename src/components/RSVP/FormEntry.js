import React from "react"

import "./FormEntry.scss"
import {
  ADD_GUEST,
  REMOVE_GUEST,
  UPDATE_GUEST,
} from "../../reducers/guestReducer"

const FormRow = ({ index, dispatch, ...state }) => {
  const handleRadioBtn = e => {
    const [name] = e.target.name.split("-")
    dispatch({
      type: UPDATE_GUEST,
      index,
      data: {
        ...state,
        diet: {
          ...state.diet,
          [name]: e.target.checked,
        },
      },
    })
  }

  return (
    <div className="formRow">
      <div className="inputName">
        <input
          type="text"
          value={state.name}
          placeholder="Name"
          onChange={e =>
            dispatch({
              type: UPDATE_GUEST,
              index,
              data: { ...state, name: e.target.value },
            })
          }
        />
      </div>

      <div className="inputAllergy">
        <fieldset name={`allergy-${index}`}>
          <legend>Food Allergy</legend>
          <input
            type="checkbox"
            id={`celiac-${index}`}
            name={`celiac-${index}`}
            checked={state.diet.celiac}
            onChange={handleRadioBtn}
          />
          <label htmlFor={`celiac-${index}`}>Celiac</label>

          <input
            type="checkbox"
            id={`dairy-${index}`}
            name={`dairy-${index}`}
            checked={state.diet.dairy}
            onChange={handleRadioBtn}
          />
          <label htmlFor={`dairy-${index}`}>Dairy</label>

          <input
            type="checkbox"
            id={`vegetarian-${index}`}
            name={`vegetarian-${index}`}
            checked={state.diet.vegetarian}
            onChange={handleRadioBtn}
          />
          <label htmlFor={`vegetarian-${index}`}>Vegetarian</label>
        </fieldset>
      </div>

      <div className="inputAction">
        <button
          type="button"
          onClick={() => dispatch({ type: REMOVE_GUEST, index })}
        >
          <h4>Remove Guest</h4>
        </button>
      </div>
    </div>
  )
}

const FormEntry = ({ state, dispatch, tryToRegister }) => {
  const rows = state.map((r, i) => (
    <FormRow key={`FormRow-${i}`} index={i} dispatch={dispatch} {...r} />
  ))

  return (
    <div className="FormEntry">
      {/* Header */}
      <div className="formRow header">
        <div className="headerName">
          <h3>Name</h3>
        </div>

        <div className="headerAllergy">
          <h3>Food Restrictions</h3>
        </div>

        <div className="headerAction" />
      </div>

      {/* Rows */}
      {rows}

      {/* Add new row */}
      <div className="formRow footerAdd">
        <button type="button" onClick={() => dispatch({ type: ADD_GUEST })}>
          <h3>
            <span>Add Guest</span>
          </h3>
        </button>
        <button onClick={tryToRegister}>
          <h3>
            <span>Submit</span>
          </h3>
        </button>
      </div>
    </div>
  )
}

export default FormEntry
