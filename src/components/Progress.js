import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const textToShow = ["a","b"]
const word2 = "Hello"

export class Progress extends PureComponent {
  static propTypes = {
    guessed: PropTypes.arrayOf(
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
        <p>You guessed: {this.props.guessed} </p>

      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    guessed: state.guesses
  }
}

export default connect(mapStateToProps)(Progress)
