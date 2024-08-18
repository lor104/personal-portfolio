import { useContext, useState } from 'react'
import { ThemeContext } from '../../theme'
import './toggleTheme.scss';
import ToggleSwitch from '../toggleSwitch/ToggleSwitch';

function toggleTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <ToggleSwitch 
        isChecked={theme === "dev" ? false : true}
        onChange={() => toggleTheme()}
        left="developer"
        right="artist"
        />
  )
}

export default toggleTheme