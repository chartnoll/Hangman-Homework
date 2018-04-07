import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


const textToShow = ["a","b"]
const word2 = "Hello"

export class Progress extends PureComponent {
  static propTypes = {
    guesses: PropTypes.arrayOf(
          PropTypes.string
        ).isRequired
  }

  /*     guessed: PropTypes.arrayOf(
        PropTypes.string
      ).isRequired*/

  render() {
    console.log(this.props.guessed)
    return (
      <div className="Guesses">
        <p>You guessed: {this.props.guesses[0]} </p>
        <p>, {this.props.guesses[1]}, {this.props.guesses[2]} </p>
      </div>
    )
  }
}

export default Progress
