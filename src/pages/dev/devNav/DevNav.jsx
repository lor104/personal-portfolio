import React from 'react';
import { NavLink } from 'react-router-dom';
import './devNav.scss';

function DevNav() {
  return (
    <header class="header">
        <h1 className='header__title'>Lauren Rosentzveig</h1>
        <nav class="nav">
            <NavLink>About Me</NavLink>
            <NavLink>Education</NavLink>
            <NavLink>Experience</NavLink>
            <NavLink to="/dev/skills">Skills</NavLink>
            <NavLink>Contact</NavLink>
        </nav>
    </header>
  )
}

export default DevNav