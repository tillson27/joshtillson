import React from "react"
import { Link } from "gatsby"
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'


import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/nav/header"
import image from "../components/image"
import Card from "../components/card"
import Card2 from "../components/card2"

const IndexPage = () => {


  return (
    <div>
      <Header />
      <div className="Opener">
        <body>
          <h1>Hello, I'm <b>Josh Tillson</b></h1>

          <div className="slider-wrapper">
            <div className="slider-text1">Lover of Tim Hortons Coffee</div>
            <div className="slider-text2">Competitive Runner</div>
            <div className="slider-text3">Data Enthusiast</div>
            <div className="slider-text4">Problem Solver</div>
            <div className="slider-text5">Story Teller</div>
            <div className="slider-text6">Mental Health Advocate</div>
            <div className="slider-text7">Business and Computer Science Student</div>
          </div>
          <p>Welcome to my Personal Website! We're Currently Under Construction.</p>
          <a href="#about">Learn More About Me</a>
        </body>
      </div>

      <section id="about">
        <div class="Hero">

          <div className="HeroGroup">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1><b>About</b></h1>
            <p>I'm a third-year Business and Computer Science student at the University of British-Columbia passionate about technology, data analysis and empowering communities.
          <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </p>
            {/* <Link to="/page-2/">Go to page 2</Link> <br />
          <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
          </div>


          <div className="VillainGroup">

            <div class="image">
              <img src={require('../images/No-background-pic.png')} width="400" />
            </div>
            <div class="rect">
              <rectangle></rectangle>
            </div>
            <h1>
              <br></br>
              <br></br>
              <br></br>
            </h1>
          </div>
        </div>
      </section>

      <div>
        <section id="projects">

          <div className="ProjectCards">
            <h1>Projects</h1>

            <div className="CardGroup">

              <Card title="KPMG Ideation Challenge" text="An efficient system for monitoring employee safety validation and productivity in the construction and mining industries" image={require('../images/KPMG_logo.svg.png')} />
              <Card2 title="Race Registration Platform" text="A Java based application for registering participants in a community run/walk" />
              <Card2 title="Simple Black Jack Game" text="Python based black jack game played within the console." />
              <Card2 title="Personal Portfolio" text="Personal website designed using React, Boostrap, HTML/CSS and Gatsby within VS Code." />
            </div>
          </div>

        </section>
      </div>

      <section id="experience">
        <div className="Experience">
          <h1> Experience </h1>
          <p> Check out my experience!</p>
        </div>

      </section>

      <section id="contact">
        <div className="Contact">
          <h1> Let's Get In Touch!! </h1>
          <p> I love meeting new people, reach out to me!</p>
        </div>

      </section>

      <footer>
        <br></br>
          © {new Date().getFullYear()} Josh Tillson | Built with love,
          {` `}
        <a href="https://azure.microsoft.com/en-ca/">Azure</a>
        {`, `}
        <a href="https://reactjs.org/">React</a>
        {`, `}
        <a href="https://getbootstrap.com/">Bootstrap</a>
        {`, `} and {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>

  )
}

export default IndexPage
