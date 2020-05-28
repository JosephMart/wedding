import React from "react"

import "./FormEntry.scss"
import { REMOVE_GUEST, UPDATE_GUEST } from "../../reducers/guestReducer"

const FormRow = ({ index, dispatch, ...state }) => {
  const handleCheckBox = e => {
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
              index,
              type: UPDATE_GUEST,
              data: { ...state, name: e.target.value },
            })
          }
        />
      </div>

      <div className="inputAllergy">
        <fieldset name={`allergy-${index}`} className="fancyInputSelect">
          <legend>Food Allergy</legend>
          <input
            type="checkbox"
            id={`celiac-${index}`}
            name={`celiac-${index}`}
            checked={state.diet.celiac}
            onChange={handleCheckBox}
          />
          <label htmlFor={`celiac-${index}`}>Celiac</label>

          <input
            type="checkbox"
            id={`dairy-${index}`}
            name={`dairy-${index}`}
            checked={state.diet.dairy}
            onChange={handleCheckBox}
          />
          <label htmlFor={`dairy-${index}`}>Dairy</label>

          <input
            type="checkbox"
            id={`vegetarian-${index}`}
            name={`vegetarian-${index}`}
            checked={state.diet.vegetarian}
            onChange={handleCheckBox}
          />
          <label htmlFor={`vegetarian-${index}`}>Vegetarian</label>
        </fieldset>
      </div>

      <div className="inputAction">
        <button
          type="button"
          className="fancyButton"
          onClick={() => dispatch({ type: REMOVE_GUEST, index })}
        >
          <h4>Remove Guest</h4>
        </button>
      </div>
    </div>
  )
}

export default FormRow
