import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export class Word extends PureComponent {
  static propTypes = {
    data: PropTypes.shape({
      word: PropTypes.isRequired,
      guesses: PropTypes.arrayOf(
          PropTypes.string
        ).isRequired
      }).isRequired
    }


  render() {
    console.log(this.props.data.guesses)
    const guesses = this.props.data.guesses
    const word = this.props.data.word
    console.log(word)
    console.log(guesses)

    return (
      <div className="Guesses">
        <p>You guessed: </p>
      </div>
    )
  }
}

export default Word
