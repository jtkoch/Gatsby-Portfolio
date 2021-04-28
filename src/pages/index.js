import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Slider from '../components/Slider'
import JobCard from '../components/JobCard'


const Home = () => (
  <Layout>
    <SEO title="Home" />
    <div className="home-container">
      <svg className="svg" viewBox="0 0 800 800">
        <path
            stroke="transparent"
            fill="transparent"
        />
        <path
          className="line"
          d="M -40 0 C 30 120 60 60 120 120 C 180 180 210 30 270 120 C 330 210 390 210 420 120 C 450 30 540 30 630 90 C 720 150 810 210 870 0 "
          fill="black"
          stroke-width="1"
          fill-opacity=".75"
        />
      </svg>

      <div className="hero-container">
        <div className="header">
          <h1 className="big">Jensen Koch</h1>
          <h3 className="small">
            I'm a full stack developer currently working for{" "}
            <a href="https://galaxe.com/">Galaxe.Solutions</a>. I particularly
            enjoy frontend development (React!).
          </h3>
          <br />
          <h3 className="small">Check out my projects below</h3>
        </div>
      </div>

      <Slider />
      <JobCard />
    </div>
  </Layout>
)

export default Home
