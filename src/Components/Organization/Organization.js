import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./organization.css";
const Organization = () => {
    const data = {
        name: 'Nombre de la empresa',
        image: 'https://images.freeimages.com/images/large-previews/eee/summer-nature-3-1370238.jpg',
        shortDescription: 'Descripcion de la empresa' 
    }
    return (
        <div className="container--organization">
            {Object.values(data).filter(data => data !== "").length !== 0 ? 
                    <section className="container--organization-data">    
                        <h1 className="title-organization">{data.name}</h1>
                        <img className="image-organization" src={data.image} alt={`${data.name}`} />
                        <p className="shortDescription-organization">{data.shortDescription}</p>
                    </section>
            : <h1 className="title-organization">No se encontraron datos de la empresa</h1>}
            <Link className="link" to="/backoffice/organization/edit">Formulario de edicion</Link>
        </div>
    )
}

export default Organization
