import React, { Component } from 'react';
import { getPeople,
         getPlanets,
         getVehicles,
         getCrawl,
         randomizer } from '../../helper.js';
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
        <Crawl />
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
