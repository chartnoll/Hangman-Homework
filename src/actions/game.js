import { NEW_GUESS } from './types'

export const newGuess = (guess) => {
  console.log(`You guessed ${guess}`)
  return{
    type: NEW_GUESS,
      payload: {
        guess
      }
    }
}
