import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


const textToShow = ["a","b"]
const word2 = "Hello"

export class Guesses extends PureComponent {
  static propTypes = {
    guesses: PropTypes.arrayOf(
          PropTypes.string
        ).isRequired
  }

  /*     guessed: PropTypes.arrayOf(
        PropTypes.string
      ).isRequired*/

  render() {
    const {guesses} = this.props
    console.log(this.props.guessed)
    return (
      <div className="Guesses">
        <p>You guessed: {this.props.guesses[0]} </p>
        <p>, {guesses[1]}, {guesses[2]} </p>
      </div>
    )
  }
}

export default Guesses
