import React from 'react';
import { Link } from 'react-router-dom';
import "./slidesTable.css";
const SlidesTable = () => {
    const data = [
        {
            title: "titulo 1",
            image: "https://randomuser.me/api/portraits/men/75.jpg",
            order: "order"
        },
        {
            title: "titulo 2",
            image: "https://randomuser.me/api/portraits/women/76.jpg",
            order: "order"
        },
        {
            title: "titulo 3",
            image: "https://randomuser.me/api/portraits/men/77.jpg",
            order: "order"
        },
        {
            title: "titulo 4",
            image: "https://randomuser.me/api/portraits/women/78.jpg",
            order: "order"
        },
        {
            title: "titulo 5",
            image: "https://randomuser.me/api/portraits/women/79.jpg",
            order: "order"
        }
    ]

    const eliminateData = () => {
        console.log("Eliminar");
    }

    const editData = () => {
        console.log("Editar");
    }
    return (
        <div className="container--table">
            <Link className="link--table" to="/backoffice/slides/create">Crear slides</Link>
           
            {data.length !== 0 ? 
                    <table className="table">
                        <thead className="table--container-header">
                            <tr className="header">
                                <th className="header--text">TITULO</th>
                                <th className="header--text">IMAGEN</th>
                                <th className="header--text">FECHA DE CREACION</th>
                                <th className="header--text">BOTONES</th>
                            </tr>
                        </thead>
                        <tbody className="table--container-body">
                            {data.map((dato, i) => 
                                <tr className="body" key={i}>
                                    <td className="body--text">{dato.title}</td>
                                    <td className="container--body-image"><img className="body--image" src={dato.image} alt={dato.title} /></td>
                                    <td className="body--text">{dato.order}</td>
                                    <td>
                                        <div className="container--buttons">
                                            <button className="body-button" onClick={editData}>Editar</button>
                                            <button className="body-button" onClick={eliminateData}>Eliminar</button>
                                        </div>
                                    </td>
                                </tr>
                                )}
                        </tbody>
                    </table>
            : <h2 className="title--error">No hay data para mostrar</h2>}
        </div>
    )
}

export default SlidesTable;
