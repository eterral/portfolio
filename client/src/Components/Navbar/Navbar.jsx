import '../Navbar/Navbar.css'
import { HashLink } from 'react-router-hash-link'

export default function Navbar() {
    return (
        <div className="nav-container">
            <div className="banner-left">
                <h1> Elliott Terral </h1>
            </div>
            <div className="banner-right">
                <a href="#about"><h3>About</h3></a>
                <a href="#projects"><h3>Projects</h3></a>
                <a href="#skills"><h3>Skills</h3></a>
                <a href="#contact"><h3>Contact</h3></a>
            </div>
        </div>
    )
}
