import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

function compareLetter(letter, word) {
  if(word.indexOf(letter) === -1) return 1
  else return 0
}

function displayProgress(word, guesses){
  guesses = guesses.join("")
  let wordArray = word.split("")
  let answer = []
  console.log(answer, wordArray, guesses)
  wordArray.forEach( function (letter) {
    if(compareLetter(letter, guesses) === -1){
      console.log(letter, guesses)
      answer.push(letter)
      console.log(`Answer is now ${answer}`)
    }
    else answer.push("_")
  })
  answer = answer.join(" ")
  return answer
}

export class Word extends PureComponent {
  static propTypes = {
    data: PropTypes.shape({
      word: PropTypes.string.isRequired,
      guesses: PropTypes.arrayOf(
          PropTypes.string
        ).isRequired
    })
  }

  render() {
    const guesses = this.props.data.guesses
    const word = this.props.data.word
    console.log(word)
    console.log(guesses)

    return (
      <div className="Word">
        <p>What is the word??</p>
        <p>{displayProgress(word, guesses)}</p>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    data: state.word
  }
}

export default connect(mapStateToProps)(Word)
