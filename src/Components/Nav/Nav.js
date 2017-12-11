import React from 'react';
import PropTypes from 'prop-types';
import './Nav.css';

const Nav = ({navToggle, favLength}) => {

  return (
    <nav className="Data-nav">
      <button className="People-button" onClick={(event) => navToggle(event.target.innerText)}>people</button>
      <button className="Planets-button" onClick={(event) => navToggle(event.target.innerText)}>planets</button>
      <button className="Vehicles-button" onClick={(event) => navToggle(event.target.innerText)}>vehicles</button>
      <button className="favorites" onClick={(event) => navToggle(event.target.innerText)}>favorites</button>
    </nav>
  );
};

Nav.propTypes = {
  navToggle: PropTypes.func.isRequired
};

export default Nav;
