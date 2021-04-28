import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Slider from '../components/Slider'
import JobCard from '../components/JobCard'


const Home = () => (
  <Layout>
    <SEO title="Home" />
    <div className="home-container">
      <svg className="svg" viewBox="0 0 800 850">
        <path
            d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
            stroke="transparent"
            fill="transparent"
        />
        <path
          className="line"
          d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
          fill="black"
          stroke-width=".3"
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
