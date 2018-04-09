import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {newGuess} from '../actions/game'
import {Library} from '../HMlibrary'

class EnterGuess extends PureComponent {
	constructor(props, word, guesses) {
		super(props, word, guesses);
		this.state = {value: "", word, guesses, comment: ""}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	guessedLetter(letter){
		//console.log("GuessedLetter", this.props.guesses,letter, Library.compareLetter(letter, this.props.guesses))

		if(Library.compareLetter(letter, this.props.guesses) === 0){
			this.setState({comment: ""})
			this.props.dispatch({type: "NEW_GUESS", payload: this.state.value})
		}
		else this.setState({comment: `You guessed ${letter} already!`})
	}

	handleChange(event) {
		//console.log("HandleChange", event.target)
		this.setState({value: event.target.value})
	}

	handleSubmit = (event) => {
		//console.log("HandleSubmit", event, this.state.value, this.state.guesses)
		event.preventDefault()

		this.guessedLetter(this.state.value)
	}

	render() {
		//console.log("Line 28",this.props.word, this.props.guesses, this.state.value)
		return (
			<div className="NewGuess">
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="letter">Next Letter:</label>
					<input name="guess" id="guess" value={this.state.value} maxLength="1" onChange={this.handleChange} />
				</form>
				<p> { Library.guessWarning(this.state.comment) } </p>
			</div>
		)
	}
}

const mapStateToProps = (reduxState) =>{
  return {word: reduxState.word, guesses: reduxState.guesses }
}

export default connect(mapStateToProps)(EnterGuess)
