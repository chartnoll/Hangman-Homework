import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export class Guesses extends PureComponent {
  static propTypes = {
    guesses: PropTypes.arrayOf(
          PropTypes.string
        ).isRequired
  }

  render() {
    const {guesses} = this.props
    console.log(this.props.guessed)
    return (
      <div className="Guesses">
        <p>You guessed: {guesses}</p>
      </div>
    )
  }
}

export default Guesses
