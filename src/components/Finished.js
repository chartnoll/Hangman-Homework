import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Finished extends PureComponent {
  static propTypes = {
    hide: PropTypes.bool
  }

  render() {
    if (this.props.hide) return null

    return (
      <div className="Finished">
        <div className="dialog">
          <h1>Well Done!</h1>
          <p>Congrats on finishing the game!</p>
          <div className="actions">
          </div>
        </div>
      </div>
    )
  }
}

export default Finished
