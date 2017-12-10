import React, { Component } from 'react';
import { fetchPeople,
         cleanPeople,
         fetchPlanets,
         cleanPlanets,
         fetchVehicles,
         cleanVehicles,
         fetchCrawl,
         randomizer } from '../../helper.js';

import CardContainer from '../CardContainer/CardContainer';
import Crawl from '../Crawl/Crawl';
import Nav from '../Nav/Nav';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      crawl: {},
      people: [],
      planets: [],
      vehicles: [],
      favorites: [],
      display: 'crawl'
    }
  }

  async componentDidMount() {
    try {
      const crawl = await fetchCrawl(randomizer());
      const people = await cleanPeople(await fetchPeople());
      const planets = await fetchPlanets();
      const vehicles = await cleanVehicles(await fetchVehicles());
      this.setState({crawl, people, planets, vehicles});
    } catch(error) {
      this.setState({errorStatus: error.message})
    }
  }

  navToggle(display) {
    this.setState = { display }
  }

  favoriteToggle(card) {
    const { favorites } = this.state;

    let newFavorites = [];

    favorites.includes(card) ?
    newFavorites = favorites.filter( ele => ele !== card ) :
    newFavorites = [...favorites, card];

    this.setState({ favorites: newFavorites });
  }

  render() {
    const { crawl, people, planets, vehicles, favorites, display } = this.state;

    return (
      <div className="App">
        <Crawl movieData={crawl}/>
        <div className="main-container">
          <header className="App-header">
            <h1 className="App-title">Star Wars</h1>
          </header>
          <hr />
          <Nav navToggle={this.navToggle.bind(this)}/>
          <CardContainer dataSet={this.state[display]} display={display} favoriteToggle={this.favoriteToggle.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;
