import React from 'react';
import Crawl from '../Crawl/Crawl'
import Card from '../Card/Card'

const CardContainer = ({dataSet, display, favoriteToggle}) => {
  if (display === 'crawl') {
    return (
      <Crawl dataSet={dataSet}/>
    )
  }

  const cardList = dataSet.map((card) => {
    
  })

  return (
    <section className="Card-container">

    </section>
  )
}

export default CardContainer;
