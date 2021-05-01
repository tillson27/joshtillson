import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.css'
import './NavRight.js'
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import NavRight from "./NavRight.js"

const Header = ({ siteTitle }) => (
  <header>
    <Navbar collapseOnSelect expand="sm" variant="light">
      <div className="container">
        <div className="Header">
          <div className="HeaderMini1">
            <a class="navigation" href=""> Josh Tillson </a>
          </div>
          <div className="HeaderMini2">
            <Navbar.Collapse id="responsive-navbar-nav">
              <nav>
                <a class="navigation" href="#about"> About </a>
                <a class="navigation" href="#projects"> Projects </a>
                <a class="navigation" href="#experience"> Experience </a>
                <a class="navigation" href="#contact"> Contact </a>

                <a class="navigation" href="https://drive.google.com/file/d/1VI9kwDhwiLZZK-fVXk14guVBeMmVb4S5/view?usp=sharing" target="_blank"> <button>Resume</button> </a>
              </nav>
            </Navbar.Collapse>
          </div>
        </div>
      </div>
    </Navbar>
  </header >
)

export default Header
