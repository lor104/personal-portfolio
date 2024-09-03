import React from 'react'
import './devExperience.scss'
import BorderedTitle from '../../../components/borderedHeading/BorderedHeading'
import ColouredHeading from '../../../components/colouredHeading/ColouredHeading'

function DevExperience() {
  return (
    <div className='dev-exp'>
        <div className="dev-exp__text-container">
            <BorderedTitle title="expcation" hLevel={2}/>
            <div className='dev-exp__block'>
              <ColouredHeading title="BrainStation" hLevel={3} colour="lavender"/>
              <h4 className="dev-exp__position">Senior Educator of Software Engineering & Manager of Education</h4>
              <h5 className='dev-exp__dates'>May 2020 - present</h5>
              <p className='dev-exp__description'>
                Deliver lectures and provide expert technical guidance to students who are building exciting projects using the most cutting-edge technologies
                Facilitate in-class activities, group discussions, demos and mentor the next wave of emerging talent.
              </p>
              <p className='dev-exp__description'>
                Design and develop programs in various disciplines, ensuring alignment with industry standards. 
                Create engaging course content, including lessons, practical exercises, assessments, and instructional materials that foster an engaging and effective learning environment.
                Work closely with subject matter experts (SMEs), and industry partners to gather insights and ensure course content is accurate and industry-relevant.
                Manage a team of 20+ educators and facilitate agile updates to the course curriculum. 
              </p>
            </div>
            <div className='dev-exp__block'>
                <ColouredHeading title="BrainStation" hLevel={3} colour="cantaloupe"/>
                <h4 className="dev-exp__position">Senior Educator of Software Engineering & Manager of Education</h4>
                <h5 className='dev-exp__dates'>May 2020 - present</h5>
                <p className='dev-exp__description'>
                    Deliver lectures and provide expert technical guidance to students who are building exciting projects using the most cutting-edge technologies
                    Facilitate in-class activities, group discussions, demos and mentor the next wave of emerging talent.
                </p>
            </div>
            <div className='dev-exp__block'>
              <ColouredHeading title="Bitmaker Labs" hLevel={3} colour="honeydew"/>
              <h4 className='dev-exp__dates'>March - May 2017</h4>
              <p className='dev-exp__description'>Since been acquired by General Assembly. Completed the Web Development (Full Stack) Immersive Bootcamp in May 2017</p>
            </div>
            <div className='dev-exp__block'>
              <ColouredHeading title="Queen's University" hLevel={3} colour="peach"/>
              <h4 className='dev-exp__dates'>2011 - 2015</h4>
              <p className='dev-exp__description'>Graduated with a major in Fine Arts (specialization in Printmedia) and a minor in mathematics</p>
            </div>
        </div>
        {/* <img className='dev-exp__skyline' src={skyline} alt="Single line drawing, skyline of Toronto, ON, Canada" /> */}
    </div>
  )
}

export default DevExperience