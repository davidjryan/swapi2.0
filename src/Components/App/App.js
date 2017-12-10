import React, { Component } from 'react';
import { fetchPeople,
         fetchPlanets,
         fetchVehicles,
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
      display: ''
    }
  }

  async componentDidMount() {
    try {
      const crawl = await fetchCrawl(randomizer());
      const people = await fetchPeople();
      const planets = await fetchPlanets();
      const vehicles = await fetchVehicles();
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
          <Header />
          <hr />
          <Nav navToggle={this.navToggle.bind(this)}/>
          <CardContainer dataSet={people}/>
        </div>
      </div>
    );
  }
}

export default App;
