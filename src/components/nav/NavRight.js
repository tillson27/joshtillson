import React from "react"
import './header.css'
import './NavRight.js'
import Navbar from "react-bootstrap/Navbar"
const NavRight = () => {

    return (
        <ul>
            <a class="navigation" href="#about"> About </a>
            <a class="navigation" href="#projects"> Projects </a>
            <a class="navigation" href="#experience"> Experience </a>
            <a class="navigation" href="#contact"> Contact </a>

            <a class="navigation" href="https://drive.google.com/file/d/1VI9kwDhwiLZZK-fVXk14guVBeMmVb4S5/view?usp=sharing" target="_blank"> <button>Resume</button> </a>
        </ul>

    )

}

export default NavRight