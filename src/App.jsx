import { useContext, useState } from 'react'
import { ThemeContext } from './theme'
import './App.scss'
import Skills from './pages/skills/Skills'
import ToggleSwitch from './components/toggleSwitch/ToggleSwitch';
import Landing from './pages/landing/Landing';

function App() {
  // const [count, setCount] = useState(0)

  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div className={`App ${theme}`}>
      <Landing />
      {/* <ToggleSwitch 
        isChecked={theme === "dev" ? false : true}
        onChange={() => toggleTheme()}
        left="developer"
        right="artist"
        /> 
      <Skills /> */}
    </div>
  )
}

export default App
