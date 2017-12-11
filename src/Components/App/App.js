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
      peopleFetch: false,
      planets: [],
      planetFetch: false,
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
    const { people, planets, peopleFetch, planetFetch } = this.state;
    let build;

    if (display === 'people' && !peopleFetch) {
      build = await buildPeople(people);
      this.setState({ people: build, display, peopleFetch: true });
    } else if (display === 'planets' && !planetFetch) {
      build = await buildPlanets(planets);
      this.setState({ planets: build, display, planetFetch: true });
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
    const { display, crawl, favorites } = this.state;
    if (crawl) {
      return (
        <div className="App">
          <div className="main-container">
            <header className="App-header">
              <h1 className="App-title">SwapiBox</h1>
            </header>
            <hr />
            <Nav navToggle={this.navToggle.bind(this)}                  favLength={favorites.length}/>
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
