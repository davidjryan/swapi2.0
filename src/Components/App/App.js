import React, { Component } from 'react';
import { getPeople,
         getPlanets,
         getVehicles,
         getCrawl,
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
      const crawl = await getCrawl(randomizer());
      const people = await getPeople();
      const planets = await getPlanets();
      const vehicles = await getVehicles();
      this.setState({crawl, people, planets, vehicles, display: ''});
    } catch(error) {
      this.setState({errorStatus: error.message})
    }
  }

  render() {
    const { crawl, people, planets, vehicles } = this.state;

    return (
      <div className="App">
        <Crawl movieData={crawl}/>
        <div className="main-container">
          <Header />
          <hr />
          <Nav />
          <CardContainer />
        </div>
      </div>
    );
  }
}

export default App;
