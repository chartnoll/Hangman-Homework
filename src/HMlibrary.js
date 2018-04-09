
const Library = {}

Library.compareLetter = function(letter, word) {
  if(word === undefined) return 0
  if(word.indexOf(letter) === -1) {
    return 0
  }
  else {
    return 1
  }
}

Library.correctGuessCount = function(word, guesses) {
  console.log(word, guesses)
  const counter = 0
  if(guesses.length === 1) return Library.compareLetter(guesses, word)
  else {
    return guesses.reduce( function (accumulator = 0, guess) {
       return counter + Library.compareLetter(guess, word)
    })
  }
}

Library.displayProgress = function(word, guesses){
  //console.log("displayprogress function",word,guesses)
  guesses = guesses.join("")
  let wordArray = word.split("")
  let answer = []
  wordArray.forEach( function (letter) {
    if(Library.compareLetter(letter, guesses) === 1){
      answer.push(letter)
    }
    else answer.push("_")
  })
  //console.log(answer, wordArray, guesses)
  return answer.join(" ")
}

 Library.gameProgress = function(word, guesses){
  //console.log("inside gameprogess function", word, guesses)
  if(guesses.length === 0) return "Game in Progress, 6 guesses left"
  if(guesses.length - Library.correctGuessCount(word, guesses) >= 6){
    return "You loose!"
    }
  else if(Library.correctGuessCount === word.length - 1){
      return "You win!"
    }
  else{
    console.log("number of guesses", Library.correctGuessCount(word, guesses), guesses.length)
    let guessesLeft = 6 + Library.correctGuessCount(word, guesses) - guesses.length
    return `Game in Progress, you have ${guessesLeft} guesses left`
    }
}

Library.guessWarning = function(comment){
  //console.log("GUESSWARNING",comment)
    if(comment === "" || comment === undefined) return ""
					else return `Uh OH! ${comment}`
	}

Library.guessesLeft = function(word, guesses){
  if(guesses.length === 0) return 6
  const numberLeft = 6 + Library.correctGuessCount(word, guesses) - guesses.length
  return numberLeft
}

export {Library}
