import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = ({cardData, favorite, display, favoriteToggle}) => {
  const cardDataKeys = Object.keys(cardData)

  const cardRender = cardDataKeys.map((cardKey, index) => {
    if (cardKey !== 'name' && cardKey !== 'favorite') {
      return (
        <div key={`${cardKey} - ${cardData.name}`}>
          <p className="Card-title">{cardData}</p>
          <p className="Card-body">{cardData[cardKey]}</p>
        </div>
      );
    }
    return null;
  });
      )
    }
  })

  return (
    <article className="Card">
      <p className="Card-title">{cardData.name}</p>
      <hr />
      <button className="Card-button" onClick={() => favoriteToggle(cardData)}>FAV</button>
      { cardRender }
    </article>
  )
}

export default Card;
