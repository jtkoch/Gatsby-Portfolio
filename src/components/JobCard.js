import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const JobCard = () => {

  const data = useStaticQuery(graphql`
    query {
      beneticImage: file(relativePath: {eq: "benetic-mock.png"}) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      tarotImage: file(relativePath: {eq: "tarot-mock.png"}) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      buzzedImage: file(relativePath: {eq: "buzzed-mock.png"}) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      fixedImage: file(relativePath: {eq: "314fixed-mock.png"}) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div className="card-container">
      <div className="card">
        <svg className="card__svg" viewBox="0 0 800 500">
          <path
            d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
            stroke="transparent"
            fill="transparent"
          />
          <path
            className="card__line"
            d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
            stroke="pink"
            strokeWidth="5"
            fill="transparent"
          />
        </svg>

        <div className="card__content">
          <div className="card__image-container">
            <Img 
              fixed={data.beneticImage.childImageSharp.fixed}
              alt="benetic" 
            />
          </div>

          <div className="card__info">
            <p className="card-title">Benetic</p>
            <p className="card-sub-title">
              This is an application built with Gatsby, Bootstrap, and Netlify functions. 
              I worked from professionally designed wireframes to turn this into a fully functional website.
            </p>

            <div className="buttons">
              <Link className="button" to="https://github.com/jtkoch/Benetic" target=" _blank" rel="noopener noreferrer">Code</Link>
              <Link className="button" to="https://benetic.netlify.app/" target=" _blank" rel="noopener noreferrer">View</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <svg className="card__svg" viewBox="0 0 800 500">
          <path
            d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
            stroke="transparent"
            fill="transparent"
          />
          <path
            className="card__line"
            d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
            stroke="pink"
            strokeWidth="5"
            fill="transparent"
          />
        </svg>

        <div className="card__content">
          <div className="card__image-container">
            <Img 
              fixed={data.tarotImage.childImageSharp.fixed}
              alt="tarot" 
            />
          </div>

          <div className="card__info">
            <p className="card-title">Moon Travelers Tarot</p>
            <p className="card-sub-title">
              A website for a Tarot and Oracle Practice built with React, Node, and Express JS
            </p>

            <div className="buttons">
              <Link className="button" to="https://github.com/jtkoch/moon-travelers-tarot" target=" _blank" rel="noopener noreferrer">Code</Link>
              <Link className="button" to="https://moon-travelers-tarot.vercel.app/" target=" _blank" rel="noopener noreferrer">View</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <svg className="card__svg" viewBox="0 0 800 500">
          <path
            d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
            stroke="transparent"
            fill="transparent"
          />
          <path
            className="card__line"
            d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
            stroke="pink"
            strokeWidth="5"
            fill="transparent"
          />
        </svg>

        <div className="card__content">
          <div className="card__image-container">
            <Img 
              fixed={data.buzzedImage.childImageSharp.fixed}
              alt="buzzed" 
            />
          </div>

          <div className="card__info">
            <p className="card-title">Buzzed Ecommerce</p>
            <p className="card-sub-title">
              A fully functional ecommerce website built with React, Commerce JS, and Stripe JS
            </p>

            <div className="buttons">
              <Link className="button" to="https://github.com/jtkoch/React-Ecommerce" target=" _blank" rel="noopener noreferrer">Code</Link>
              <Link className="button" to="https://buzzed.netlify.app/" target=" _blank" rel="noopener noreferrer">View</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <svg className="card__svg" viewBox="0 0 800 500">
          <path
            d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
            stroke="transparent"
            fill="transparent"
          />
          <path
            className="card__line"
            d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
            stroke="pink"
            strokeWidth="5"
            fill="transparent"
          />
        </svg>

        <div className="card__content">
          <div className="card__image-container">
            <Img 
              fixed={data.fixedImage.childImageSharp.fixed}
              alt="fixed" 
            />
          </div>

          <div className="card__info">
            <p className="card-title">314 Fixed</p>
            <p className="card-sub-title">
              A website for a local fixed gear bike community here in St. Louis built with Gatsby, Netlify CMS, and Stripe JS
            </p>

            <div className="buttons">
              <Link className="button" to="https://github.com/jtkoch/314Fixed_Gatsby" target=" _blank" rel="noopener noreferrer">Code</Link>
              <Link className="button" to="https://314fixed.netlify.app/" target=" _blank" rel="noopener noreferrer">View</Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default JobCard