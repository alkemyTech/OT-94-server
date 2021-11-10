import React from 'react'
import './Card.css'

const Card = (props) => {

    //card component para utilizar en los listados de Novedades, Actividades, Últimas Novedades y Relacionadas

    //<Card titleCard={'titulo example'} descriptionCard={'esta es una de descripcion de ejemplo'} imgCard={'/images/latest-03.jpg'} />


    const cardImgPlaceHolder = 'https://getuikit.com/v2/docs/images/placeholder_600x400.svg'

    return (
        <div className="card-container">
            <div className="card">
                <img alt={props.titleCard} src={props.imgCard ? props.imgCard : cardImgPlaceHolder} />
                <div className="card-text">
                    <h2 className="card-title">{props.titleCard}</h2>
                    <p>{props.descriptionCard}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
