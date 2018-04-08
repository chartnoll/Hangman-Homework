import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Library} from '../HMlibrary'

export class Finished extends PureComponent {
  static propTypes = {
    data: PropTypes.shape({
      word: PropTypes.string.isRequired,
      guesses: PropTypes.arrayOf(
          PropTypes.string
        ).isRequired
    })
  }

  render() {
    if (this.props.hide) return null

    return (
      <div className="Finished">
        <h1>Your Progress</h1>
        <p>{Library.gameProgress(this.props.data.word, this.props.data.guesses)}</p>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    data: state.word
  }
}

export default connect(mapStateToProps)(Finished)
