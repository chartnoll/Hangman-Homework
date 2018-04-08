// src/reducers/board.js
import { NEW_GUESS } from '../actions/types'

const initialState = {
  word: "",
  guesses: ["f","g"]
}

export default (state = initialState, { type, payload } = {}) => {
  switch (type) {
      case NEW_GUESS :
        return state = state.push(payload.guess)

      default :
        return state
    }
}
