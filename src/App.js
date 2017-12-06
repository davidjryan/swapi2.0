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

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
          <aside></aside>
        <div className="main-container">
          <header className="App-header">
            <h1 className="App-title">Star Wars</h1>
            <button className="favorites">Favorites<span>10</span></button>
          </header>
          <hr />
          <nav className="Data-nav">
            <button className="People-button">people</button>
            <button className="Planets-button">planets</button>
            <button className="Vehicles-button">vehicles</button>
          </nav>
          <section className="Card-container">
            <article className="Card">
              <header className="Card-header">
                <p className="Card-title">Luke Skywalker</p>
                <button className="Card-button">IMG</button>
              </header>
              <hr />
              <p>Tatooine</p>
              <p>Jedi</p>
              <p>Moisture Farmer</p>
            </article>
            <article className="Card">
              <header className="Card-header">
                <p className="Card-title">Luke Skywalker</p>
                <button className="Card-button">IMG</button>
              </header>
              <hr />
              <p>Tatooine</p>
              <p>Jedi</p>
              <p>Moisture Farmer</p>
            </article>
            <article className="Card">
              <header className="Card-header">
                <p className="Card-title">Luke Skywalker</p>
                <button className="Card-button">IMG</button>
              </header>
              <hr />
              <p>Tatooine</p>
              <p>Jedi</p>
              <p>Moisture Farmer</p>
            </article>
            <article className="Card">
              <header className="Card-header">
                <p className="Card-title">Luke Skywalker</p>
                <button className="Card-button">IMG</button>
              </header>
              <hr />
              <p>Tatooine</p>
              <p>Jedi</p>
              <p>Moisture Farmer</p>
            </article>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
