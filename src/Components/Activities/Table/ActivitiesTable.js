import React from 'react';
import { Link } from 'react-router-dom';
import "./activitiesTable.css";
import getDataActivityTable from "../../../Services/privateApiService";
const ActivitiesTable = () => {
    const data = [
        {
            name: "Jorge",
            image: "https://randomuser.me/api/portraits/men/75.jpg",
            order: "order"
        },
        {
            name: "Agustina",
            image: "https://randomuser.me/api/portraits/women/76.jpg",
            order: "order"
        },
        {
            name: "Andrea",
            image: "https://randomuser.me/api/portraits/men/77.jpg",
            order: "order"
        },
        {
            name: "Carolina",
            image: "https://randomuser.me/api/portraits/women/78.jpg",
            order: "order"
        },
        {
            name: "Melina",
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
            <Link className="link--table" to="/backoffice/activities/create">Crear actividades</Link>

            {data.length !== 0 ? 
                    <table className="table">
                        <thead className="table--container-header">
                            <tr className="header">
                                <th className="header--text">NOMBRE</th>
                                <th className="header--text">IMAGEN</th>
                                <th className="header--text">ORDEN</th>
                                <th className="header--text">BOTONES</th>
                            </tr>
                        </thead>
                        <tbody className="table--container-body">
                            {data.map((dato, i) => 
                                <tr className="body" key={i}>
                                    <td className="body--text">{dato.name}</td>
                                    <td className="container--body-image"><img className="body--image" src={dato.image} alt={dato.name} /></td>
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

export default ActivitiesTable;