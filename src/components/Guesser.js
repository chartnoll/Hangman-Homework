import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Guesser extends PureComponent {
  static propTypes = {
    progress: PropTypes.number.isRequired,
  }

  render() {
    return (
      <div className="Guesser">
        <p>{this.props.progress} %</p>
      </div>
    )
  }
}

export default Guesser
