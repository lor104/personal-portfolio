import React from 'react'
import './borderedHeading.scss'

function BorderedTitle({ title }) {
  return (
    <div className='bordered-heading'>
      <h2 className='bordered-heading__text'>
        <span className='bordered-heading__box bordered-heading__box--left'></span>
        {title}
        <span className='bordered-heading__box bordered-heading__box--right'></span>
      </h2>
      <hr className='bordered-heading__underline' />
    </div>
  )
}

export default BorderedTitle