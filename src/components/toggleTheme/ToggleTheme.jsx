import { useContext, useState } from 'react'
import { ThemeContext } from '../../theme'
import './toggleTheme.scss';
import ToggleSwitch from '../toggleSwitch/ToggleSwitch';
import { useNavigate } from 'react-router-dom';

function toggleTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const navigate = useNavigate();

  const changeTheme = () => {
    console.log(theme)
    theme === "dev" ?
      navigate("/art/about")
      :
      navigate("/dev/about")

      toggleTheme()
  }

  return (
    <ToggleSwitch 
        isChecked={theme === "dev" ? false : true}
        onChange={() => changeTheme()}
        left="developer"
        right="artist"
        />
  )
}

export default toggleTheme