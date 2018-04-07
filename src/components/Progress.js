import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Progress extends PureComponent {
  static propTypes = {
    progress: PropTypes.number.isRequired,
  }

  render() {
    return (
      <div className="Progress">
        <p>{this.props.progress} %</p>
      </div>
    )
  }
}

export default Progress
