import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      scroll: null,
      people: null,
      planets: null,
      vehicles: null,
      display: ''
    }
  }
  render() {
    return (
      <div className="App">
          <aside></aside>
        <div className="main-container">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <body>
            
          </body>
        </div>
      </div>
    );
  }
}

export default App;
