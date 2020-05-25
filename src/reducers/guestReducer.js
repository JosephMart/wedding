export const ADD_GUEST = "ADD_GUEST"
export const REMOVE_GUEST = "REMOVE_GUEST"
export const UPDATE_GUEST = "UPDATE_GUEST"

const EmptyGuest = {
  name: "",
  diet: {
    vegetarian: false,
    celiac: false,
    dairy: false,
  },
}

const guestReducer = (state, { type, index = -1, data }) => {
  switch (type) {
    case ADD_GUEST:
      return [...state, EmptyGuest]

    case REMOVE_GUEST:
      return [...state.slice(0, index), ...state.slice(index + 1)]

    case UPDATE_GUEST:
      return [...state.slice(0, index), data, ...state.slice(index + 1)]

    default:
      return state
  }
}

export default guestReducer
