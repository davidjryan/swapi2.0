import React from 'react';

const Crawl = ({crawl, title, date}) => {

  return (
    <section className="Card-container">
      <p>{crawl}</p>
      <h3>{title}</h3>
      <p>{date}</p>
    </section>
  )
}

export default Crawl;
