import React from 'react'
import './Titles.css';

const Titles = (props) => {
    console.log(props.imagenTitulo)
    return (
        <div className="titulo-contenedor">
            <h1>{props.titulo}</h1>
            <img alt={props.titulo} src={props.imagenTitulo ? props.imagenTitulo : "/images/latest-02.jpg"} />

        </div>
    )
}

export default Titles
