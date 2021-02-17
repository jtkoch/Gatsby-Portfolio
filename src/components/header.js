import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import icon from '../images/skulllogo.png'
import resume from '../images/resume.pdf'

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Header = () => (
  <Container className="pl-auto nav-container" fluid={true}>
    <Navbar expand="lg">
        <Link to="/" ><img className="icon" src={icon} alt="logo" /></Link>
        <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
        <Navbar.Collapse id="navbar-collapse">
          <Nav className="ml-auto">
            <Link style={{color: "black"}} className="nav-link" to="/" >Home</Link>
            <Link style={{color: "black"}} className="nav-link" to="/About" >About</Link>
            <Link style={{color: "black"}} className="nav-link" to="/Contact" >Contact</Link>
            <a style={{color: "black"}} className="nav-link" href = {resume} target = "_blank" without rel="noopener noreferrer">Resume</a>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header