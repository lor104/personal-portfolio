import React from 'react'
import './devEducation.scss'
import BorderedTitle from '../../../components/borderedHeading/BorderedHeading'
import ColouredHeading from '../../../components/colouredHeading/ColouredHeading'
import skyline from '../../../assets/background-images/skyline.png'

function DevEducation() {
  return (
    <div className='dev-edu'>
        <div className="dev-edu__text-container">
            <BorderedTitle title="Education" hLevel={2}/>
            <div className='dev-edu__block'>
              <ColouredHeading title="BrainStation" hLevel={3} colour="lavender"/>
              <h4 className='dev-edu__dates'>November 2022 - February 2023</h4>
              <p className='dev-edu__description'>Completed the User Interface Design course through BrainStation and obtained a certificate of completion.</p>
            </div>
            <div className='dev-edu__block'>
              <ColouredHeading title="University of Toronto, SCS" hLevel={3} colour="cantaloupe"/>
              <h4 className='dev-edu__dates'>September - December 2019, February - March 2020</h4>
              <p className='dev-edu__description'>Completed Intro to User Experience Design course in December 2019, & completed Interaction Design course in March of 2020, both through the University of Toronto, School of Continuing Studies.</p>
            </div>
            <div className='dev-edu__block'>
              <ColouredHeading title="Bitmaker Labs" hLevel={3} colour="honeydew"/>
              <h4 className='dev-edu__dates'>March - May 2017</h4>
              <p className='dev-edu__description'>Since been acquired by General Assembly. Completed the Web Development (Full Stack) Immersive Bootcamp in May 2017</p>
            </div>
            <div className='dev-edu__block'>
              <ColouredHeading title="Queen's University" hLevel={3} colour="peach"/>
              <h4 className='dev-edu__dates'>2011 - 2015</h4>
              <p className='dev-edu__description'>Graduated with a major in Fine Arts (specialization in Printmedia) and a minor in mathematics</p>
            </div>
        </div>
        <img className='dev-edu__skyline' src={skyline} alt="Single line drawing, skyline of Toronto, ON, Canada" />
    </div>
  )
}

export default DevEducation