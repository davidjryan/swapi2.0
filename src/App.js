import React, { Component } from 'react';
import logo from './logo.svg';
import { getPeople,
         getPlanets,
         getVehicles,
         getCrawl,
         randomizer } from './helper.js';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      crawl: {},
      people: [],
      planets: [],
      vehicles: [],
      display: ''
    }
  }

  async componentDidMount() {
    const crawl = await getCrawl(randomizer());
    const people = await getPeople();
    const planets = await getPlanets();
    const vehicles = await getVehicles();


    this.setState({crawl, people, planets, vehicles, display: ''});
  }

  render() {
    return (
      <div className="App">
          <aside>
            <p>{this.state.crawl.crawl}</p>
            <h3>{this.state.crawl.title}</h3>
            <p>{this.state.crawl.date}</p>
          </aside>
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
