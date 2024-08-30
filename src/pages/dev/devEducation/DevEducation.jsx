import React from 'react'
import './devEducation.scss'
import BorderedTitle from '../../../components/borderedHeading/BorderedHeading'
import ColouredHeading from '../../../components/colouredHeading/ColouredHeading'

function DevEducation() {
  return (
    <div className='dev-edu'>
        <div className="dev-edu__text-container">
            <BorderedTitle title="Education" hLevel={2}/>
            <ColouredHeading title="BrainStation" hLevel={3} colour="honeydew"/>
            <p className='dev-edu__dates'>November 2022 - February 2023</p>
            <p className='dev-edu__description'>Completed the User Interface Design course through BrainStation and obtained a certificate of completion.</p>
        </div>
        {/* <img className='dev-edu__skyline' src={skyline} alt="Single line drawing, skyline of Toronto, ON, Canada" /> */}
    </div>
  )
}

export default DevEducation