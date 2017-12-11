import React from 'react';
import './Crawl.css'

const Crawl = ({dataSet}) => {;
  const {crawl, title, date} = dataSet;
  return (
    <section className="Card-container Crawl-container">
      <h3>{title}</h3>
      <p>{crawl}</p>
      <p>{date}</p>
    </section>
  )
}

export default Crawl;
