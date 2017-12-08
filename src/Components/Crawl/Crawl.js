import React from 'react';

const Crawl = () => {

  return (
    <aside>
      <p>{this.state.crawl.crawl}</p>
      <h3>{this.state.crawl.title}</h3>
      <p>{this.state.crawl.date}</p>
    </aside>
  )
}

export default Crawl;
