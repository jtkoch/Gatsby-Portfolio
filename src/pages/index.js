import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Slider from '../components/Slider'
import JobCard from '../components/JobCard'


const Home = () => (
  <Layout>
    <SEO title="Home" />
    <div className="home-container">

      <div className="hero-container">
        <div className="header">
          <h1 className="big">Jensen Koch</h1>
          <h3 className="small">
            I'm a full stack developer currently working for <a href="https://galaxe.com/">Galaxe.Solutions</a>. 
            I particularly enjoy frontend development (React and Gatsby).
          </h3>
          <br/>
          <h3 className="small">Check out my projects below</h3>
        </div>
      </div>

      
      <Slider />
      <JobCard />

    </div>
  </Layout>
)

export default Home
