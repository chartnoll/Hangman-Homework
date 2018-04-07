import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Finished from './components/Finished'
import Guesser from './components/Guesser'
import Progress from './components/Progress'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="title">Welcome to hangman</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Progress />

        <Guesser />

        <Finished />

      </div>
    );
  }
}

export default App;
