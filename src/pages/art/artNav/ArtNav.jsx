import React from 'react';
import { NavLink } from 'react-router-dom';
import './artNav.scss';

const navItems = [
  {
    id: 0,
    text: 'About',
    link: "/about"
  },
  {
    id: 1,
    text: 'Gallery',
    link: "/gallery"
  },
  {
    id: 4,
    text: 'Contact',
    link: "/contact"
  },
]

function ArtNav() {
  return (
    <header className="art header">
        <h1 className='art header__title'>Lauren Rosentzveig</h1>
        <nav className="nav art-nav">
          {navItems.map(navItem => {
            return (
              <NavLink 
                key={navItem.id}
                exact="true"
                to={`/art${navItem.link}`}
                className={isActive =>  "art-nav__link" + (isActive.isActive ? " art-nav__link--active" : "")}>
                {navItem.text}
              </NavLink>
            )
          })}
        </nav>
    </header>
  )
}

export default ArtNav