function compareLetter(letter, word) {
  if(word.indexOf(letter) === -1) return 0
  else return 1
}

export default function displayProgress(word, guesses){
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
