import { useState, useContext } from 'react'
import { ThemeContext } from '../../theme'
import BorderedHeading from '../../components/borderedHeading/BorderedHeading'
import { Link } from 'react-router-dom'

import './error.scss'

function Error() {
  const [backgroundClass, setBackgroundClass] = useState("")
  const { setTheme } = useContext(ThemeContext);

  const slideBackground = (className) => {
    console.log(className)
    if (className === 'dev') {
      setBackgroundClass('background--slide-left')
    } else if (className === "art") {
      setBackgroundClass('background--slide-right')
    }

    return ""
  }

  return (
    <div className={`error background ${backgroundClass}`}>
        <p>uh oh</p>
        <BorderedHeading title="404"/>
        <p>maybe this is what you're looking for?</p>
        <Link onClick={() => setTheme("dev")} 
            onMouseEnter={() => slideBackground("dev")}
            onMouseLeave={() => setBackgroundClass("")}
            className='error__subtitle' to="/dev/about">
            Developer <span>➡️</span>
        </Link>
        <Link onClick={() => setTheme("art")} 
            onMouseEnter={() => slideBackground("art")}
            onMouseLeave={() => setBackgroundClass("")}
            className='error__subtitle' to="/art/about">
            Artist <span>➡️</span>
        </Link>
    </div>
  )
}

export default Error