import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = ({cardData, favoriteToggle}) => {
  const cardDataKeys = Object.keys(cardData);

  const cardRender = cardDataKeys.map((cardKey) => {
    if (cardKey !== 'name' && cardKey !== 'favorite') {
      return (
        <div key={`${cardKey} - ${cardData.Name}`}>
          <h3 className="Card-title-2">{cardKey.toUpperCase()}</h3>
          <p className="Card-body">{cardData[cardKey]}</p>
        </div>
      );
    }
    return null;
  });

  return (
    <article className="Card">
      <p className="Card-title">{cardData.name}</p>
      <hr />
      <button className="Card-button" onClick={() => favoriteToggle(cardData)}>FAV</button>
      <hr />
      { cardRender }
    </article>
  );
};

Card.propTypes = {
  cardData: PropTypes.object.isRequired,
  favoriteToggle: PropTypes.func.isRequired
};

export default Card;
