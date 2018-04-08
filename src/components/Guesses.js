import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Guesses extends PureComponent {
  static propTypes = {
    guesses: PropTypes.shape({
      word: PropTypes.string.isRequired,
      guesses: PropTypes.arrayOf(
          PropTypes.string
        ).isRequired
    })
  }

  render() {
    console.log(this.props.guesses)
    const guesses = this.props.guesses
    return (
      <div className="Guesses">
        <p>You guessed: {guesses.guesses}</p>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    guesses: state.guesses
  }
}

export default connect(mapStateToProps)(Guesses)

//const {guesses} = this.props


/*
static propTypes = {
  guesses: PropTypes.arrayOf(
        PropTypes.string
      ).isRequired
}
*/
