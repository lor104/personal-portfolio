import React from 'react'
import './artAbout.scss';

import BorderedHeading from '../../../components/borderedHeading/BorderedHeading';

function ArtAbout() {
  
  return (
    <>
      <div className='art-about'>
        <BorderedHeading title="About" hLevel={2}/>
        <div class="art-about__container">
          <p className='art-about__text'>
            Lauren Rosentzveig is a visual artist from Toronto, ON, Canada. She holds a Bachelor of Fine Arts from Queen's University, specializing in Printmedia. 
          </p>
          <p className='art-about__text'>
            Lauren is technically trained in various printmaking techniques and mediums from her time at Queen's University (traditional & waterless lithography, intaglio, relief, screen, etc.) studying under Master Printer Otis Tamasauskaus. Lauren has always gravitated towards relief printing, with a little screen printing thrown into the mix.
          </p>
          <p className='art-about__text'>
            After graduating Queen's University, Lauren set up a small studio practice in her hometown of Toronto where she continues to print when time permits, between her full time job as a software developer and home life with her husband, 3 kids and dog. 
          </p>
        </div>


      </div>
    </>
  )
}

export default ArtAbout