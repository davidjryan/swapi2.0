import React from 'react';

const Nav = () => {

  return (
    <nav className="Data-nav">
      <button className="People-button">people</button>
      <button className="Planets-button">planets</button>
      <button className="Vehicles-button">vehicles</button>
      <button className="favorites">favorites<span>10</span></button>
    </nav>
  )
}

export default Nav;
