import React from 'react';
import './devAbout.scss'
import BorderedTitle from '../../../components/borderedHeading/BorderedHeading';
import portrait from '../../../assets/background-images/portrait.png'

function DevAbout() {
  return (
    <div className='dev-about'>
        <div className="dev-about__text-container">
            <BorderedTitle title="About Me" />
            <p className='dev-about__text dev-about__text--emphasis'>
                Traditional Printmaker turned Web Developer, I strive to be creative in everything I do. 
            </p>
            <p className='dev-about__text'>
                I tried to make a go of being a practicing artist, but the more I devoted myself to thinking without limitations, the more I missed knowing what the right answer was, or even that there was one. Being both creative and logical, I was finding it hard to find the balance between these two sides of me. This is what turned me towards Web Development: knowing that my skills of composition theory (seeing a problem through to completion in the best, most efficient way) and logical problem solving would help me get into a field I would excel in.
            </p>
        </div>
        <img className='dev-about__portrait' src={portrait} alt="Single line drawing, self portrait" />
    </div>
  )
}

export default DevAbout