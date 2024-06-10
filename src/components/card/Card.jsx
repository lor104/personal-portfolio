import React from 'react';
import './card.scss';

function Card({ index, card, flipCard, cardFront, cardImage, isFlipped, isInactive }) {
    const handleCardClick = () => {
        !isFlipped && !isInactive && flipCard(index)
    }

    const evaluateClass = (isFlipped, isInactive) => {
        let className = "card skill";
        if (isFlipped) {
            className += " card--flip";
        }
        if (isInactive) {
            className += " card--inactive";
        }
        return className
    }

  return (
    <div 
        className={evaluateClass(isFlipped, isInactive)}
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