import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { newGuess } from '../actions/game'

export class Guesses extends PureComponent {
  static propTypes = {
    data: PropTypes.shape({
      word: PropTypes.string.isRequired,
      guesses: PropTypes.arrayOf(
          PropTypes.string
        ).isRequired
    })
  }

  render() {
    console.log(this.props.data)
    const data = this.props.data
    return (
      <div className="Guesses">
        <p>You guessed: {data.guesses}</p>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    data: state.guesses
  }
}

export default connect(mapStateToProps)(Guesses)
