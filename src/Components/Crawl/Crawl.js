import React from 'react';

const Crawl = ({dataSet}) => {;
  const {crawl, title, date} = dataSet;
  return (
    <section className="Card-container Crawl-container">
      <p>{crawl}</p>
      <h3>{title}</h3>
      <p>{date}</p>
    </section>
  )
}

export default Crawl;
