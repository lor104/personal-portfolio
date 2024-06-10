import React, {useState, useEffect} from 'react'
import cardFront from '../../assets/logo5.png'
import css from '../../assets/css.png'
import sass from '../../assets/sass.png'

import './matchGame.scss';
import Card from '../card/Card';

const uniqueCardsArray = [
    {
        type: 'css',
        image: css
    },
    {
        type: 'sass',
        image: sass
    }
]

function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
function shuffleCards(array) {
    const length = array.length;
    for (let i = length; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * i);
        const currentIndex = i - 1;
        swap(array, currentIndex, randomIndex)
    }
    return array;
}

function MatchGame() {
    const [cards, setCards] = useState(
        () => shuffleCards(uniqueCardsArray.concat(uniqueCardsArray))
      );
    const [flippedCards, setFlippedCards] = useState([])
    const [matchedCards, setMatchedCards] = useState([])

    const flipCard = (index) => {
        console.log("flipCard: ", index)

        if (flippedCards.includes(index)) {
            return
        }
        
        setFlippedCards((prev) => [...prev, index])
    }

    useEffect(() => {
        if (flippedCards.length == 2) {
            checkMatch(flippedCards)
        }
    }, [flippedCards])

    const checkIsFlipped = (index) => {
        return flippedCards.includes(index)
    }

    const checkMatch = (flippedCards) => {
        const [first, second] = flippedCards
        if (cards[first].type === cards[second].type) {
            setMatchedCards((prev) => ({ ...prev, [cards[first].type]: true }))
        }

        setTimeout(() => {setFlippedCards([])}, 1000)
    }

    const isInactive = (card) => {
        return matchedCards[card.type]
    }

    return (
        <div className='match-game'>
            {cards.map((card, index) => {
                return (
                    <Card
                        key={index}
                        index={index}
                        card={card}
                        flipCard={flipCard}
                        cardFront={cardFront}
                        cardImage={card.image}
                        isFlipped={checkIsFlipped(index)}
                        isInactive={isInactive(card)}
                    />
                );
                })}
        </div>
    )
}

export default MatchGame