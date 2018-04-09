import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Library} from '../HMlibrary'

export class Word extends PureComponent {
  static propTypes = {
      word: PropTypes.string.isRequired,
      guesses: PropTypes.arrayOf(
          PropTypes.string
        ).isRequired
    }

  render() {
    const guesses = this.props.guesses
    const word = this.props.word
    console.log("line17",word, guesses)
    return (
      <div className="Word">
        <p>What is the word??</p>
        <p>{Library.displayProgress(word, guesses)}</p>
      </div>
    )
  }
}

//Library.displayProgress(word, guesses)

function mapStateToProps(reduxState){
  return {word: reduxState.word, guesses: reduxState.guesses }
}

export default connect(mapStateToProps)(Word)
