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
import Header from '../Header/Header';
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
      display: 'crawl'
    }
  }

  async componentDidMount() {
    try {
      const crawl = await fetchCrawl(randomizer());
      const people = await cleanPeople(await fetchPeople());
      const planets = await fetchPlanets();
      const vehicles = await cleanVehicles(await fetchVehicles());
      this.setState({crawl, people, planets, vehicles, display: ''});
    } catch(error) {
      this.setState({errorStatus: error.message})
    }
  }

  navToggle() {

  }

  favoriteToggle(cardID) {

  }

  favoriteViewToggle() {
    //this.setState = {display: 'favorites'}
  }

  render() {
    const { crawl, people, planets, vehicles } = this.state;

    return (
      <div className="App">
        <Crawl movieData={crawl}/>
        <div className="main-container">
          <header className="App-header">
            <h1 className="App-title">Star Wars</h1>
          </header>
          <hr />
          <Nav navToggle={this.navToggle.bind(this)}/>
          <CardContainer dataSet={people}/>
        </div>
      </div>
    );
  }
}

export default App;
