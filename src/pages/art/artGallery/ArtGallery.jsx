import React from 'react'
import './artGallery.scss';
import BorderedHeading from '../../../components/borderedHeading/BorderedHeading';
import ColouredHeading from '../../../components/colouredHeading/ColouredHeading'

function ArtGallery() {
  return (
    <div className="art-gallery">
      <BorderedHeading title="Gallery" hLevel={2}/>
      <div className='art-gallery__content'>
        <ColouredHeading title="Coming Soon!" hLevel={3} colour={"peach"}/>
      </div>
    </div>
  )
}

export default ArtGallery