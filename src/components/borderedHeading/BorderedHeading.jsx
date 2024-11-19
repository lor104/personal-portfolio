import React from 'react'
import './borderedHeading.scss'

function BorderedHeading({ title, hLevel = 6 }) {
  const Heading = "h" + hLevel
  return (
    <div className='bordered-heading'>
      <Heading className='bordered-heading__text'>
        <span className='bordered-heading__box bordered-heading__box--left'></span>
        {title}
        <span className='bordered-heading__box bordered-heading__box--right'></span>
      </Heading>
      <hr className='bordered-heading__underline' />
    </div>
  )
}

export default BorderedHeading