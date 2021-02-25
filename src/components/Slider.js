import React, { Component } from "react"
import Slider from "react-slick"
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

class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      arrows: false,
      fadeIn: true,
      autoplay: true,
    }
    return (
      <div className="slider-container">
        <Slider {...settings}>
            <FontAwesomeIcon className="icon" icon={faHtml5}></FontAwesomeIcon>
            <FontAwesomeIcon className="icon" icon={faCss3}></FontAwesomeIcon>
            <FontAwesomeIcon className="icon" icon={faSass}></FontAwesomeIcon>
            <FontAwesomeIcon className="icon" icon={faPython}></FontAwesomeIcon>
            <FontAwesomeIcon className="icon" icon={faJsSquare}></FontAwesomeIcon>
            <FontAwesomeIcon className="icon" icon={faReact}></FontAwesomeIcon>
            <FontAwesomeIcon className="icon" icon={faNodeJs}></FontAwesomeIcon>
            <FontAwesomeIcon className="icon" icon={faWordpress}></FontAwesomeIcon>
            <FontAwesomeIcon className="icon" icon={faJava}></FontAwesomeIcon>
        </Slider>
      </div>
    )
  }
}

export default SimpleSlider
