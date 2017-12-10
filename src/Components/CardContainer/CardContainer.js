import React from 'react';
import Crawl from '../Crawl/Crawl'

const CardContainer = ({dataSet, display, favoriteToggle}) => {
  if (display === 'crawl') {
    return (
      <Crawl dataSet={dataSet}/>
    )
  }

  return (
    <section className="Card-container">

    </section>
  )
}

export default CardContainer;
