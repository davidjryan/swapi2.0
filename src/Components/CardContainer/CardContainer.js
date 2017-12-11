import React from 'react';
import Crawl from '../Crawl/Crawl'
import Card from '../Card/Card'
import PropTypes from 'prop-types';

const CardContainer = ({dataSet, display, favoriteToggle}) => {
  if (display === 'crawl') {
    return (
      <Crawl dataSet={dataSet}/>
    )
  }

  // if (display === 'favorites' && dataSet.length = 0) {
  //   return (
  //     <section className="Card-container Fav-Container">
  //       No Favorites Data...
  //     </section>
  //   )
  // }

  const cardList = dataSet.map((card, index) => {
    return (
      <Card
        key={`${display}-${index}`}
        cardData={card}
        favorite={card.favorite}
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

CardContainer.propTypes = {
  dataSet: PropTypes.object.isRequired,
  favoriteToggle: PropTypes.func.isRequired,
  display: PropTypes.string.isRequired
}

export default CardContainer;
