import React from 'react'
import './landing.scss'
import BorderedHeading from '../../components/borderedHeading/BorderedHeading'
import { Link } from 'react-router-dom'

function Landing() {
    return (
        <div className='landing'>
            <BorderedHeading title="Lauren Rosentzveig"/>
            <Link className='landing__subtitle' to="/dev">
                Developer <span>➡️</span>
            </Link>
            <Link className='landing__subtitle' to="/art">
                Artist <span>➡️</span>
            </Link>
        </div>
    )
}

export default Landing