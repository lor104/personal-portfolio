import { useContext } from 'react'
import { ThemeContext } from '../../theme'
import './landing.scss'
import BorderedHeading from '../../components/borderedHeading/BorderedHeading'
import { Link } from 'react-router-dom'

function Landing() {
    const { setTheme } = useContext(ThemeContext);

    return (
        <div className='landing'>
            {/* <p className='landing__tagline'>
                Traditional Printmaker & Web Developer
            </p> */}
            <BorderedHeading title="Lauren Rosentzveig"/>
            <Link onClick={() => setTheme("dev")} 
                className='landing__subtitle' to="/dev/about">
                Developer <span>➡️</span>
            </Link>
            <Link onClick={() => setTheme("art")} 
                className='landing__subtitle' to="/art/about">
                Artist <span>➡️</span>
            </Link>
        </div>
    )
}

export default Landing