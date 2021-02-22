import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import name from "../images/Jensen.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { 
    faHtml5, 
    faCss3, 
    faSass, 
    faJsSquare, 
    faReact, 
    faWordpress, 
    faPython, 
    faNodeJs,
    faJava
} from "@fortawesome/free-brands-svg-icons"
import Carousel from '../components/Carousel'


const Home = (props) => (
  <Layout>
    <SEO title="Home" />
    <div className="home-container">

      <div className="hero-container">
        <div className="header">
          <img className="big" src={name} alt="name" />
          <h3 className="small">
            I'm a full stack developer currently working for <a href="https://galaxe.com/">Galaxe.Solutions</a> <br/>
            I particularly enjoy frontend development (React and Gatsby).
          </h3>
          <h3 className="small">Check out my projects below</h3>
        </div>
      </div>

      <div className="fonts">
        <FontAwesomeIcon className="m-1" icon={faHtml5}></FontAwesomeIcon>
        <FontAwesomeIcon className="m-1" icon={faCss3}></FontAwesomeIcon>
        <FontAwesomeIcon className="m-1" icon={faSass}></FontAwesomeIcon>
        <FontAwesomeIcon className="m-1" icon={faJsSquare}></FontAwesomeIcon>
        <FontAwesomeIcon className="m-1" icon={faReact}></FontAwesomeIcon>
        <FontAwesomeIcon className="m-1" icon={faNodeJs}></FontAwesomeIcon>
        <FontAwesomeIcon className="m-1" icon={faWordpress}></FontAwesomeIcon>
        <FontAwesomeIcon className="m-1" icon={faPython}></FontAwesomeIcon>
        <FontAwesomeIcon className="m-1" icon={faJava}></FontAwesomeIcon>
      </div>
      <Carousel />
    </div>
  </Layout>
)

export default Home
