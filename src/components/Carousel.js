import React from "react"
import benetic from "../images/benetic-mock.png"
import tarot from "../images/tarot-mock.png"
import buzzed from "../images/buzzed-mock.png"
import fixed from "../images/314fixed-mock.png"

import Card from "../components/Card"

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 0,
          title: "Benetic",
          subTitle: "This is an application built with Gatsby, Bootstrap, and Netlify functions. I worked from professionally designed wireframes to turn this into a fully functional website.",
          imgSrc: benetic,
          code: "https://github.com/jtkoch/Benetic",
          link: "https://benetic.netlify.app/",
          selected: false,
        },
        {
          id: 1,
          title: "Moon Travelers Tarot",
          subTitle: "A website for a Tarot & Oracle Practice built with React, Node, and Express JS",
          imgSrc: tarot,
          code: "https://github.com/jtkoch/moon-travelers-tarot",
          link: "https://moon-travelers-tarot.vercel.app/",
          selected: false,
        },
        {
          id: 2,
          title: "Buzzed Ecommerce",
          subTitle: "A fully functional ecommerce website built with React, Commerce JS, and Stripe JS",
          imgSrc: buzzed,
          code: "https://github.com/jtkoch/React-Ecommerce",
          link: "https://buzzed.netlify.app/",
          selected: false,
        },
        {
          id: 3,
          title: "314 Fixed",
          subTitle: "A website for a local fixed gear bike community here in St. Louis built with Gatsby, Netlify CMS, and Stripe JS",
          imgSrc: fixed,
          code: "https://github.com/jtkoch/314Fixed_Gatsby",
          link: "https://314fixed.netlify.app/",
          selected: false,
        },
      ],
    }
  }

  makeItems = items => {
    return items.map(item => {
      return <Card item={item} key={item.id} />
    })
  }

  render() {
    return (
      <div className="carousel-container">
        <div className="carousel">{this.makeItems(this.state.items)}</div>
      </div>
    )
  }
}

export default Carousel
