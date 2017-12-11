import React from 'react';
import './Crawl.css';
import PropTypes from 'prop-types';


const Crawl = ({dataSet}) => {
  const {crawl, title, date} = dataSet;
  return (
    <section className="Card-container Crawl-container">
      <h3>{title}</h3>
      <p>{crawl}</p>
      <p>{date}</p>
    </section>
  );
};

Crawl.propTypes = {
  dataSet: PropTypes.object.isRequired
};

export default Crawl;
