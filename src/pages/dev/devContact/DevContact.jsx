import React from 'react'

import './devContact.scss';
import BorderedTitle from '../../../components/borderedHeading/BorderedHeading';

function DevContact() {
  return (
    <div className='dev-contact'>
        <BorderedTitle title="Get in Touch!" hLevel={2}/>
        <a className="dev-contact__link dev-contact__link--email" href="mailto:lauren.rosentzveig@gmail.com">lauren.rosentzveig@gmail.com </a>
        <a className="dev-contact__link dev-contact__link--phone" href="tel:6475195360">(647) - 519 - 5360 </a>
        <a className="dev-contact__link dev-contact__link--linkedin" href="http://www.linkedin.com/in/rosentzveig" target="_blank"> linkedin/rosentzveig</a>
        <a className="dev-contact__link dev-contact__link--github" href="http://github.com/lor104" target="_blank">github/lor104</a>
    </div>
  )
}

export default DevContact