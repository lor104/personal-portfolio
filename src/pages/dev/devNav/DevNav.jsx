import React from 'react';
import { NavLink } from 'react-router-dom';
import './devNav.scss';

const navItems = [
  {
    id: 0,
    text: 'About Me',
    link: "/about"
  },
  {
    id: 1,
    text: 'Education',
    link: "/education"
  },
  {
    id: 2,
    text: 'Experience',
    link: "/experience"
  },
  {
    id: 3,
    text: 'Skills',
    link: "/skills"
  },
  {
    id: 4,
    text: 'Contact',
    link: "/contact"
  },
]

function DevNav() {
  return (
    <header className="header">
        <h1 className='header__title'>Lauren Rosentzveig</h1>
        <nav className="nav dev-nav">
          {navItems.map(navItem => {
            return (
              <NavLink 
                key={navItem.id}
                exact="true"
                to={`/dev${navItem.link}`}
                className={isActive =>  "dev-nav__link" + (isActive.isActive ? " dev-nav__link--active" : "")}>
                {navItem.text}
              </NavLink>
            )
          })}
        </nav>
    </header>
  )
}

export default DevNav