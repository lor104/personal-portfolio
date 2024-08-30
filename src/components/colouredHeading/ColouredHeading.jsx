import React from 'react'
import './colouredHeading.scss'

function ColouredHeading({ title, hLevel, colour }) {
    // cantaloupe
    // lavender
    // honeydew
    // orchid
    // peach

    const Heading = "h" + hLevel
    return (
        <div className={`coloured-heading`}>
            <Heading className={`coloured-heading__text coloured-heading__text--${colour}`}>
                {title}
            </Heading>
        </div>
    )
}

export default ColouredHeading