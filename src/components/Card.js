import React from 'react'
import CardInfo from '../components/CardInfo'

function Card(props) {

    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={props.item.imgSrc} alt={props.item.imgSrc} />
                </div>
                <div className="flip-card-back">
                    <CardInfo className="info" title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} code={props.item.code}/>
                </div>
            </div>
        </div>
    )   
}

export default Card