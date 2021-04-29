import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {useDarkMode} from '../hooks/useDarkMode'
import icon from '../images/skulllogo_gradient.png'
import resume from '../images/JKoch-Resume.pdf'

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Header() {
  const [darkMode, setDarkMode] = useDarkMode(false)

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode)
  }

  return (
    <Container className="pl-auto nav-container" fluid={true}>
      <Navbar expand="lg">
          <Link to="/" ><img className="icon" src={icon} alt="logo" /></Link>
          <Navbar.Toggle className="border-0 navbar-dark" aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-collapse">
            <Nav className="ml-auto">
              <Link style={{color: "white"}} className="nav-link" to="/" >Home</Link>
              <Link style={{color: "white"}} className="nav-link" to="/About" >About</Link>
              <Link style={{color: "white"}} className="nav-link" to="/Blog" >Blog</Link>
              <Link style={{color: "white"}} className="nav-link" to="/Contact" >Contact</Link>
              <a style={{color: "white"}} className="nav-link" href = {resume} target = "_blank" without rel="noopener noreferrer">Resume</a>
              <div className="dark-mode__toggle">
                <div 
                  aria-hidden="true"
                  onClick={toggleMode}
                  onKeyDown={toggleMode}
                  className={darkMode ? 'toggle toggled' : 'toggle'}
                />
              </div>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </Container>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header