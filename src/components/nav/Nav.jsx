import React, { useContext } from 'react';
import ToggleTheme from '../toggleTheme/ToggleTheme';
import { ThemeContext } from '../../theme';
import DevNav from '../../pages/dev/devNav/DevNav';
import ArtNav from '../../pages/art/artNav/ArtNav';
import './nav.scss';

function Nav() {
  const {theme} = useContext(ThemeContext);
  console.log(theme)

  return (
    <div className={`nav ${theme === "dev" ? "dev" : "art"}`}>
      <ToggleTheme />    
      {theme === "dev" ?
      <DevNav />
      :
      <ArtNav />}
    </div>
  )
}

export default Nav