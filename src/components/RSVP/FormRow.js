import React from "react"

import "./FormEntry.scss"
import { REMOVE_GUEST, UPDATE_GUEST } from "../../reducers/guestReducer"

const FormRow = ({ index, dispatch, ...state }) => (
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

export default FormRow
