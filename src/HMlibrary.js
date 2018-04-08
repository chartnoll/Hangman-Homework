
const Library = {}

function compareLetter(letter, word) {
  if(word.indexOf(letter) === -1) return 0
  else return 1
}

function correctGuessCount(word, guesses) {
  guesses.reduce( (currentValue, guess) => currentValue + compareLetter(guess, word))
}

Library.displayProgress = function(word, guesses){
  guesses = guesses.join("")
  let wordArray = word.split("")
  let answer = []
  wordArray.forEach( function (letter) {
    if(compareLetter(letter, guesses) === 1){
      answer.push(letter)
    }
    else answer.push("_")
  })
  console.log(answer, wordArray, guesses)
  return answer.join(" ")
}

 Library.gameProgress = function(word, guesses){
  console.log("inside gameprogess function", word, guesses)
  if(guesses.length - correctGuessCount(word, guesses) > 6){
    return "You loose!"
    }
  else if(correctGuessCount === word.length){
      return "You win!"
    }
  else return "Game in progress"
}

export {Library}
