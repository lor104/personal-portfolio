import React from 'react';
import './card.scss';

function Card({ index, card, flipCard, cardFront, cardImage, isFlipped }) {
    const handleCardClick = () => {
        flipCard(index)
    }

  return (
    <div 
        className={isFlipped ? 
            "card skill card--flip" :
            "card skill"}
        // index={index}
        // card={card}
        key={index}
        onClick={(e) => handleCardClick(e)}>
            <img 
                className="card__face card__face--front" 
                src={cardFront} 
                alt="front" />
            <img 
                className="card__face card__face--back" src={cardImage} alt="back" />
    </div>
  )
}

export default Card