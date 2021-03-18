import React from 'react'
import { Link } from 'gatsby'

function CardInfo(props) {

    return (
        <div className="card-info">
            <p className="card-title">{props.title}</p>
            <p className="card-sub-title">{props.subTitle}</p>
            <div className="buttons">
              <Link className="button" to={props.code} target=" _blank" rel="noopener noreferrer">Code</Link>
              <Link className="button" to={props.link} target=" _blank" rel="noopener noreferrer">View</Link>
            </div>
        </div>
    )
}

export default CardInfo