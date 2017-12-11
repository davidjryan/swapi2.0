import React from 'react';
import Crawl from '../Crawl/Crawl'
import Card from '../Card/Card'

const CardContainer = ({dataSet, display, favoriteToggle}) => {
  if (display === 'crawl') {
    return (
      <Crawl dataSet={dataSet}/>
    )
  }

  const cardList = dataSet.map((card, index) => {
    return (
      <Card
        key={`${display}-${index}`}
        cardData={card}
        favorite={dataSet.favorite}
        display={display}
        favoriteToggle={favoriteToggle}
      />
    )
  })

  return (
    <section className="Card-container">
      { cardList }
    </section>
  )
}

export default CardContainer;
