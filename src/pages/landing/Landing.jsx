import React from 'react'
import './landing.scss'
import BorderedHeading from '../../components/borderedHeading/BorderedHeading'

function Landing() {
    return (
        <div className='landing'>
            <BorderedHeading title="Lauren Rosentzveig"/>
            <h2 className='landing__subtitle'>Developer <span>➡️</span></h2>
            <h2 className='landing__subtitle'>Artist <span>➡️</span></h2>
        </div>
    )
}

export default Landing