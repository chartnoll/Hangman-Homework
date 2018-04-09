import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { newGuess } from '../actions/game'

export class Guesses extends PureComponent {
  static propTypes = {
    word: PropTypes.string.isRequired,
    guesses: PropTypes.arrayOf(
        PropTypes.string
      ).isRequired
  }

  render() {
    console.log("Guess Line 17",this.props.word)
    return (
      <div className="Guesses">
        <p>You guessed: {this.props.guesses}</p>
      </div>
    )
  }
}

function mapStateToProps(reduxState){
  return {word: reduxState.word, guesses: reduxState.guesses }
}

export default connect(mapStateToProps)(Guesses)
