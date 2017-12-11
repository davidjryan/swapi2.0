import React from 'react';
import PropTypes from 'prop-types';

const Nav = ({navToggle}) => {

  return (
    <nav className="Data-nav">
      <button className="People-button" onClick={(e) => navToggle(e.target.innerText)}>people</button>
      <button className="Planets-button" onClick={(e) => navToggle(e.target.innerText)}>planets</button>
      <button className="Vehicles-button" onClick={(e) => navToggle(e.target.innerText)}>vehicles</button>
      <button className="favorites" onClick={(e) => navToggle(e.target.innerText)}>favorites</button>
    </nav>
  )
}

Nav.propTypes = {
  navToggle: PropTypes.func.isRequired
}
export default Nav;
