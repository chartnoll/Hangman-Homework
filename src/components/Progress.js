import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


const textToShow = ["a","b"]
const word2 = "Hello"

export class Progress extends PureComponent {
  static propTypes = {
    guesses: PropTypes.string.isRequired
  }

  /*     guessed: PropTypes.arrayOf(
        PropTypes.string
      ).isRequired*/

  render() {
    console.log(this.props.guessed)
    return (
      <div className="Guesses">
        <p>You guessed: {this.props.guesses} </p>

      </div>
    )
  }
}

export default Progress
