import React, { Component } from 'react';
import { fetchPeople,
         cleanPeople,
         buildPeople,
         fetchPlanets,
         cleanPlanets,
         buildPlanets,
         fetchVehicles,
         cleanVehicles,
         fetchCrawl,
         randomizer } from '../../helper.js';

import CardContainer from '../CardContainer/CardContainer';
import Nav from '../Nav/Nav';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      crawl: null,
      people: [],
      planets: [],
      vehicles: [],
      favorites: [],
      display: 'crawl'
    };
  }

  componentWillMount() {
    this.navToggle(this.state.display);
  }

  async componentDidMount() {
    let initialFetch = 0;
    if (!initialFetch) {
      try {
        const crawl = await fetchCrawl(randomizer());
        const people = await cleanPeople(await fetchPeople());
        const planets = await cleanPlanets(await fetchPlanets());
        const vehicles = await cleanVehicles(await fetchVehicles());
        initialFetch++;
        this.setState({crawl, people, planets, vehicles});
      } catch (error) {
        this.setState({errorStatus: error.message});
      }
    }
  }

  async navToggle(display) {
    const { people, planets } = this.state;
    let build;
    let peopleCount = 0;
    let planetCount = 0;


    if (display === 'people' && peopleCount === 0) {
      build = await buildPeople(people);
      peopleCount++;
      this.setState({ people: build, display });
    } else if (display === 'planets' && planetCount === 0) {
      build = await buildPlanets(planets);
      planetCount++;
      this.setState({ planets: build, display });
    }

    this.setState({ display });
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
    const { display, crawl } = this.state;
    if (crawl) {
      return (
        <div className="App">
          <div className="main-container">
            <header className="App-header">
              <h1 className="App-title">SwapiBox</h1>
            </header>
            <hr />
            <Nav navToggle={this.navToggle.bind(this)}/>
            <CardContainer dataSet={this.state[display]} display={display}
            favoriteToggle={this.favoriteToggle.bind(this)}/>
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          Loading.......
        </div>
      );
    }
  }
}

export default App;
