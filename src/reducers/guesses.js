// src/reducers/board.js
import { NEW_GUESS } from '../actions/types'

const initialState = []

export default (state = initialState, { type, payload } = {}) => {
  switch (type) {
      case NEW_GUESS :
        console.log("Reducer guesses", payload, state)
        state = state.concat(payload)
        console.log("Reducer new state", payload, state)
        return state

      default :
        return state
    }
}
