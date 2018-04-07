// src/reducers/board.test.js

import guess from './guess'

describe('guess reducer', () => {
  const reducer = guess
  const initialState = {
    word: "",
    guesses: ["a","b"]
  }

  it('returns an empty array for the initial state', () => {
    expect(reducer()).toEqual(initialState)
  })
})
