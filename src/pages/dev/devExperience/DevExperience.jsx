import React from 'react'
import './devExperience.scss'
import BorderedTitle from '../../../components/borderedHeading/BorderedHeading'
import ColouredHeading from '../../../components/colouredHeading/ColouredHeading'

function DevExperience() {
  return (
    <div className='dev-exp'>
        <div className="dev-exp__text-container">
            <BorderedTitle title="Experience" hLevel={2}/>
            <div className='dev-exp__block'>
              <ColouredHeading title="BrainStation" hLevel={3} colour="lavender"/>
              <h4 className="dev-exp__position">Senior Educator of Software Engineering & Manager of Education</h4>
              <h5 className='dev-exp__dates'>May 2020 - present</h5>
              <p className='dev-exp__description'>
                Deliver lectures and provide expert technical guidance to students who are learning development from the ground up, building exciting projects using the most cutting-edge technologies.
                Facilitate in-class activities, group discussions, demos and mentor the next wave of emerging talent.
              </p>
              <p className='dev-exp__description'>
                Design and develop programs in various disciplines (Software Engineering, Cybersecurity, Design, Data Science, Marketing & Product Management), ensuring alignment with industry standards. 
                Create engaging course content, including lessons, practical exercises, assessments, and instructional materials that foster an engaging and effective learning environment.
                Work closely with subject matter experts (SMEs), and industry partners to gather insights and ensure course content is accurate and industry-relevant.
                Manage a team of 20+ educators and facilitate agile updates to the course curriculums. 
              </p>
            </div>
            <div className='dev-exp__block'>
                <ColouredHeading title="Richmond Day" hLevel={3} colour="cantaloupe"/>
                <h4 className="dev-exp__position">Full Stack Developer</h4>
                <h5 className='dev-exp__dates'>April 2018 - May 2020</h5>
                <p className='dev-exp__description'>
                  Responsible for both new build sites and maitenance of existing ones. Determine structure and design of web pages from photoshop templates, stiking a balance between function and aesthetic while keeping user-experience at the forefront. Focus on interactivity, responsive design, and maintainability.
                </p>
                <div className='dev-exp__projects'>
                  <h4 className="dev-exp__title">Projects Include:</h4>
                  <div className="dev-exp__project">
                      <ColouredHeading title="LG Appliance Kiosk" hLevel={4} colour="cantaloupe"/>
                      <p className='dev-exp__description'>Created LG Appliance Kiosk, an application where users can select appliances and view them in a kitchen/laundry room environment. Specifically designed for Best Buy Experience stores across Canada where users can access through a touch enabled kiosk screen.
                      (not responsive, only done for 1920x1080 screen resolution)</p>
                      <a target="_blank" href="https://977.lgappliancekiosk.ca/Shared">View Site</a>
                  </div>
                  <div className="dev-exp__project">
                      <ColouredHeading title="BMW Canada DAG Sites" hLevel={4} colour="cantaloupe"/>
                      <p className='dev-exp__description'>Responsible for the redesign of the 6 regional sites (August 2018), sale offer takeovers (monthly), and overall site maitenance.</p>
                      <a target="_blank" href="http://www.bmw-gta.ca/">View Site</a>
                  </div>
                  <div className="dev-exp__project">
                      <ColouredHeading title="MINI Canada National and Retailer Sites" hLevel={4} colour="cantaloupe"/>
                      <p className='dev-exp__description'>Responsible for maitenance of national and retailer sites, as well as new page builds.</p>
                      <a target="_blank" href="http://www.mini.ca/">View Site</a>
                  </div>
                </div>
            </div>
            <div className='dev-exp__block'>
              <ColouredHeading title="HealthWorks" hLevel={3} colour="honeydew"/>
              <h4 className='dev-exp__dates'>March - May 2017</h4>
              <p className='dev-exp__description'>Worked with senior back end developers to build the company's corporate website and online identity. Actively suggest design options and implement. Projects mainly included editing wordpress themes and customization.</p>
            </div>
            <div className='dev-exp__block'>
              <ColouredHeading title="Baby Uno" hLevel={3} colour="peach"/>
              <h4 className="dev-exp__position">Web Designer and Front End Developer</h4>
              <h5 className='dev-exp__dates'>October 2017</h5>
              <p className='dev-exp__description'>Worked with a graphic designer to build the brand's identity and create wireframes and protoypes through Adobe Illustrator and Photoshop. Worked from prototypes to develop a webpage that displayed the company's product in a fun way that focused primarily on user-interactivity.</p>
              <a target="_blank" href="http://www.babyuno.ca/">View Site</a>
            </div>
            <div className='dev-exp__block'>
              <ColouredHeading title="Bitmaker" hLevel={3} colour="lavender"/>
              <h4 className="dev-exp__position">Web Designer and Front End Developer</h4>
              <h5 className='dev-exp__dates'>May 2017</h5>
              <p className='dev-exp__description'>Worked with a team of 4 developers, and a timeline of 2 weeks, to create a beer companion application that allows users to track and rate beers. Through the ratings they provide, the user is given suggestions of similar beers that they may like, but haven't yet tried. Users can look up the location of bars around Toronto where the beer is available on tap. Built with Ruby on Rails.</p> 
              <p className='dev-exp__description'>Responsible for manipulating LCBO API for relevant information and importing to our own database. Focused on user interactivity and implementation of front end design.</p>
            </div>
        </div>
        {/* <img className='dev-exp__skyline' src={skyline} alt="Single line drawing, skyline of Toronto, ON, Canada" /> */}
    </div>
  )
}

export default DevExperience