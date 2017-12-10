import React from 'react';

const Crawl = ({crawl, title, date}) => {

  return (
    <aside>
      <p>{crawl}</p>
      <h3>{title}</h3>
      <p>{date}</p>
    </aside>
  )
}

export default Crawl;
