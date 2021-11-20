import React from 'react';
import { Link } from 'react-router-dom';
import "./categoriesTable.css";
import REACT_APP_CATEGORIES_LIST from "../../../../.env";
import REACT_APP_CATEGORIES_ELIMINATION from "../../../../.env";
const categoriesTable = () => { 
    const data = [
        {
            name: "Jorge",
            createdAt: "fecha"
        },
        {
            name: "Jorge",
            createdAt: "fecha"
        },
        {
            name: "Jorge",
            createdAt: "fecha"
        },
        {
            name: "Jorge",
            createdAt: "fecha"
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
            <Link className="link--table" to="/backoffice/categorias/create">Crear categoria</Link>
           
            {data.length !== 0 ? 
                    <table className="table">
                        <thead className="table--container-header">
                            <tr className="header">
                                <th className="header--text">NOMBRE</th>
                                <th className="header--text">FECHA DE CREACION</th>
                                <th className="header--text">BOTONES</th>
                            </tr>
                        </thead>
                        <tbody className="table--container-body">
                            {data.map(dato => 
                                <tr className="body">
                                    <td className="body--text">{dato.name}</td>
                                    <td className="body--text">{dato.createdAt}</td>
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

export default categoriesTable
