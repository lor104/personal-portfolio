import { useState } from 'react'
import './App.css'
import Skills from './pages/skills/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Skills />
    </>
  )
}

export default App
