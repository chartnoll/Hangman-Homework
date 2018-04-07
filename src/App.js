import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Finished from './components/Finished'
import EnterGuess from './components/EnterGuess'
import Word from './components/Word'
import Guesses from './components/Guesses'

const data = {
  word: "hello",
  guesses: ["a","i","g"]
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="title">Welcome to hangman</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Word data={data} />

        <Guesses guesses={data.guesses} />

        <EnterGuess />

        <Finished />

      </div>
    );
  }
}
//<img src={logo} className="App-logo" alt="logo" />

export default App;
