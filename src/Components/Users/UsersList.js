import React from 'react'
import { Link } from 'react-router-dom'
import MockList from './usersMock.json'
import './UsersList.css'
import Fade from "react-reveal/Fade"
const UsersList = () => {
    
    const eliminateData = () => {
        console.log("Eliminar");
    }

    const editData = () => {
        console.log("Editar");
    }

    return (
        <div className="container--table">
            <Fade right>
            <h1 className="title">Usuarios</h1>
        <Link className="link--table" to="/backoffice/create-user">Crear usuario</Link>

        {MockList.length !== 0 ? 
                <table className="table">
                    <thead className="table--container-header">
                        <tr className="header-table">
                            <th className="header--text">NOMBRE</th>
                            <th className="header--text">EMAIL</th>
                            <th className="header--text">BOTONES</th>
                        </tr>
                    </thead>
                    <tbody className="table--container-body">
                        {MockList.map((dato, i) => 
                            <tr className="body" key={i}>
                                <td className="body--text">{dato.name}</td>
                                <td className="container--body-image">{dato.email}</td>
                               
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
        </Fade>
    </div>
    )
}

export default UsersList