import { useState, useContext } from 'react'
import { ThemeContext } from '../../theme'
import './landing.scss'
import BorderedHeading from '../../components/borderedHeading/BorderedHeading'
import { Link } from 'react-router-dom'

function Landing() {
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
        <div  className={`landing background ${backgroundClass}`}>
            {/* <p className='landing__tagline'>
                Traditional Printmaker & Web Developer
            </p> */}
            <BorderedHeading title="Lauren Rosentzveig"/>
            <Link onClick={() => setTheme("dev")} 
                onMouseEnter={() => slideBackground("dev")}
                onMouseLeave={() => setBackgroundClass("")}
                className='landing__subtitle' to="/dev/about">
                Developer <span>➡️</span>
            </Link>
            <Link onClick={() => setTheme("art")} 
                onMouseEnter={() => slideBackground("art")}
                onMouseLeave={() => setBackgroundClass("")}
                className='landing__subtitle' to="/art/about">
                Artist <span>➡️</span>
            </Link>
        </div>
    )
}

export default Landing