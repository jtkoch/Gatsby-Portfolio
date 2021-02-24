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
      fadeIn: true,
      autoplay: true,
    }
    return (
      <div className="slider-container">
        <Slider {...settings}>
            <FontAwesomeIcon className="icon-1" icon={faHtml5}></FontAwesomeIcon>
            <FontAwesomeIcon className="icon-2" icon={faCss3}></FontAwesomeIcon>
            <FontAwesomeIcon className="icon-3" icon={faSass}></FontAwesomeIcon>
            <FontAwesomeIcon className="icon-8" icon={faPython}></FontAwesomeIcon>
            <FontAwesomeIcon className="icon-4" icon={faJsSquare}></FontAwesomeIcon>
            <FontAwesomeIcon className="icon-5" icon={faReact}></FontAwesomeIcon>
            <FontAwesomeIcon className="icon-6" icon={faNodeJs}></FontAwesomeIcon>
            <FontAwesomeIcon className="icon-7" icon={faWordpress}></FontAwesomeIcon>
            <FontAwesomeIcon className="icon-9" icon={faJava}></FontAwesomeIcon>
        </Slider>
      </div>
    )
  }
}

export default SimpleSlider
