import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import displayProgress from '../HMlibrary'

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
