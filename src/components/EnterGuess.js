import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {newGuess} from '../actions/game'
import { bindActionCreators } from 'redux'

class EnterGuess extends PureComponent {
	state = {name: ""}

	guessedLetter(letter){
		this.props.dispatch({type: "NEW_GUESS", payload: this.state.value})
	}

	handleChange(event) {
		this.setState({value: event.target.value})
	}

	handleSubmit = (event) => {
		this.guessedLetter(this.state.value)
		event.preventDefault()
	}

	render() {
		console.log("Value is equal to",this.props.value)
		return (
			<form onSubmit={this.handleSubmit}>
				<div className="NewGuess">
					<label htmlFor="letter">Next Letter:</label>
					<input name="guess" id="guess" value={this.state.value} onChange={this.handleChange} />
				</div>
			</form>
		)
	}
}

function mapStateToProps(state){
  return {
    data: state.data
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({newGuess: newGuess}, dispatch)
}

export default connect(mapStateToProps, {newGuess})(EnterGuess)
