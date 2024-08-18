import React, { useContext } from 'react';
import ToggleTheme from '../toggleTheme/ToggleTheme';
import { ThemeContext } from '../../theme';
import DevNav from '../../pages/dev/devNav/DevNav';
import ArtNav from '../../pages/art/artNav/ArtNav';

function Nav() {
  const {theme} = useContext(ThemeContext);
  console.log(theme)

  return (
    <>
      <ToggleTheme />    
      <div>Nav</div>
      {theme === "dev" ?
      <DevNav />
      :
      <ArtNav />}
    </>
  )
}

export default Nav