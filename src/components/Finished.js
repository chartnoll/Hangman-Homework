import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Library} from '../HMlibrary'

export class Finished extends PureComponent {
  static propTypes = {
    word: PropTypes.string.isRequired,
    guesses: PropTypes.arrayOf(
        PropTypes.string
      ).isRequired
    }

  render() {
    return (
      <div className="Finished">
        <h1>Your Progress</h1>
        <p>{Library.gameProgress(this.props.word, this.props.guesses)}</p>
      </div>
    )
  }
}

const mapStateToProps = (reduxState) => {
  return {word: reduxState.word, guesses: reduxState.guesses }
}

export default connect(mapStateToProps)(Finished)
