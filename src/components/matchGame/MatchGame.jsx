import React, {useState, useEffect} from 'react'
import cardFront from '../../assets/logo5.png'
import ai from '../../assets/ai.png'
import csharp from '../../assets/csharp.png'
import css from '../../assets/css.png'
import express from '../../assets/express.png'
import figma from '../../assets/figma.png'
import git from '../../assets/git.png'
import html from '../../assets/html.png'
import jquery from '../../assets/jquery.png'
import js from '../../assets/js.png'
import net from '../../assets/net.png'
import node from '../../assets/node.png'
import ps from '../../assets/ps.png'
import rails from '../../assets/rails.png'
import react from '../../assets/react.png'
import ruby from '../../assets/ruby.png'
import sass from '../../assets/sass.png'
import sql from '../../assets/sql.png'
import wordpress from '../../assets/wordpress.png'

import './matchGame.scss';
import Card from '../card/Card';

const uniqueCardsArray = [
    {
        type: 'ai',
        image: ai
    },
    {
        type: 'csharp',
        image: csharp
    },
    {
        type: 'css',
        image: css
    },
    {
        type: 'express',
        image: express
    },
    {
        type: 'figma',
        image: figma
    },
    {
        type: 'git',
        image: git
    },
    {
        type: 'html',
        image: html
    },
    {
        type: 'jquery',
        image: jquery
    },
    {
        type: 'js',
        image: js
    },
    {
        type: 'net',
        image: net
    },
    {
        type: 'node',
        image: node
    },
    {
        type: 'ps',
        image: ps
    },
    {
        type: 'rails',
        image: rails
    },
    {
        type: 'react',
        image: react
    },
    {
        type: 'ruby',
        image: ruby
    },
    {
        type: 'sass',
        image: sass
    },
    {
        type: 'sql',
        image: sql
    },
    {
        type: 'wordpress',
        image: wordpress
    },
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

function MatchGame({ endGame }) {
    const [cards, setCards] = useState(
        () => shuffleCards(uniqueCardsArray.concat(uniqueCardsArray))
      );
    const [matches, setMatches] = useState(0)
    const [flippedCards, setFlippedCards] = useState([])
    const [matchedCards, setMatchedCards] = useState([])

    // flip a card when it is clicked
    const flipCard = (index) => {
        console.log("flipCard: ", index)

        if (flippedCards.includes(index)) {
            return
        }
        
        setFlippedCards((prev) => [...prev, index])
    }

    // track the cards that are flipped and update UI when changes occur
    useEffect(() => {
        if (flippedCards.length == 2) {
            checkMatch(flippedCards)
        }
    }, [flippedCards])

    // track matches to end the game when all matches are made
    useEffect(() => {
        if (matches === uniqueCardsArray.length) {
            setCards(shuffleCards(uniqueCardsArray.concat(uniqueCardsArray)))
            setFlippedCards([])
            setMatchedCards([])
            endMatchGame()
        }
    }, [matches])

    // track whether a card is flipped or not
    const checkIsFlipped = (index) => {
        return flippedCards.includes(index)
    }

    // check whether 2 cards are a match
    const checkMatch = (flippedCards) => {
        const [first, second] = flippedCards
        if (cards[first].type === cards[second].type) {
            setMatchedCards((prev) => ({ ...prev, [cards[first].type]: true }))
            setMatches(matches + 1)
        }

        setTimeout(() => {setFlippedCards([])}, 1000)
    }

    // check whether the cards have been matched, therefore inactive
    const isInactive = (card) => {
        return matchedCards[card.type]
    }

    // end game when all matches are made
    const endMatchGame = () => {
        setMatches(0)
        endGame()
    }


    return (
        <div className='match-game'>
            {cards.map((card, index) => {
                return (
                    <Card
                        className="match-game__card"
                        key={index}
                        index={index}
                        card={card}
                        flipCard={flipCard}
                        cardFront={cardFront}
                        cardImage={card.image}
                        isFlipped={checkIsFlipped(index)}
                        isInactive={isInactive(card)}
                        flippedCards={flippedCards}
                    />
                );
                })}
        </div>
    )
}

export default MatchGame