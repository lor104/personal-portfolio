import React from 'react'
import './artContact.scss'
import BorderedTitle from '../../../components/borderedHeading/BorderedHeading'

function ArtContact() {
  return (
    <div className='art-contact'>
        <BorderedTitle title="Get in Touch!" hLevel={2}/>
        <a className="art-contact__link art-contact__link--email" href="mailto:lauren.rosentzveig@gmail.com">lauren.rosentzveig@gmail.com </a>
        <a className="art-contact__link art-contact__link--phone" href="tel:6475195360">(647) - 519 - 5360 </a>
        <a className="art-contact__link art-contact__link--instagram" href="https://www.instagram.com/lor104/" target="_blank"> instagram/lor104</a>
    </div>
  )
}

export default ArtContact