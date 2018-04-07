import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class GuessForm extends PureComponent {
	state = {}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state)
	}

	handleChange = (event) => {
		const {guess} = event.target

		this.setState({
		  guess: ""
		})
	}

	render() {
		const initialValues = this.props.initialValues || {}
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor="guess">Letter to guess</label>
					<input guess="guess" value={
						this.state.guess || initialValues.guess || ''
					} onChange={ this.handleChange } />
				</div>

				<button type="submit">Submit</button>
			</form>
		)
	}
}

export default GuessForm
