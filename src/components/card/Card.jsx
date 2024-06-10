import React from 'react';
import './card.scss';

function Card({ index, card, flipCard, cardFront, cardImage, isFlipped, isInactive, flippedCards }) {
    const handleCardClick = () => {

        // dont track a third click while cards are matching
        if (flippedCards.length === 2) {
            return;
        }

        !isFlipped && !isInactive && flipCard(index)
    }

    // create classname based on whether a card is flipped, inactive (or default, active)
    const evaluateClass = (isFlipped, isInactive) => {
        let className = "card skill";
        if (isFlipped) {
            className += " card--flip";
        }
        if (isInactive) {
            className += " card--flip card--stay";
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