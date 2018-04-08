// src/reducers/board.test.js

import guesses from './guesses'

describe('guesses reducer', () => {
  const reducer = guesses
  const initialState = {
    word: "",
    guesses: ["f","g"]
  }

  it('returns an empty array for the initial state', () => {
    expect(reducer()).toEqual(initialState)
  })
})
