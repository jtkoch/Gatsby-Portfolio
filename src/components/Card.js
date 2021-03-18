import React from 'react'
import CardInfo from '../components/CardInfo'

function CardComponent(props) {

    return (
      <div className="container">
        <div className="card">
          <div className="card__image-container">
            <img src={props.item.imgSrc} alt={props.item.imgSrc} />
          </div>

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
            <CardInfo
              className="card__info"
              title={props.item.title}
              subTitle={props.item.subTitle}
              link={props.item.link}
              code={props.item.code}
            />
          </div>
        </div>
      </div>
    )   
}

export default CardComponent

