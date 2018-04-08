import React, { Component } from 'react';
import './App.css';
import Finished from './components/Finished'
import EnterGuess from './components/EnterGuess'
import Word from './components/Word'
import Guesses from './components/Guesses'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="title">Welcome to hangman</h1>
        </header>

        <Word />

        <Guesses />

        <EnterGuess />

        <Finished />

      </div>
    );
  }
}
//<img src={logo} className="App-logo" alt="logo" />

export default App;
