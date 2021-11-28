import React from 'react'
import { Link } from 'react-router-dom'
import MockList from './membersMock.json' //fotos sacas de random user generator
import './MemberList.css'
import Fade from "react-reveal/Fade";
const MembersList = () => {
    const eliminateData = () => {
        console.log("Eliminar");
    }

    const editData = () => {
        console.log("Editar");
    }
    return (
        <Fade right>
            <h1 className="title">Lista de miembros</h1>
            <div className="container--table">
            <Link className="link--table" to="/backoffice/members/edit">Crear miembro</Link>

            {MockList.length !== 0 ? 
                    <table className="table">
                    <thead className="table--container-header">
                        <tr className="header-table">
                            <th className="header--text">NOMBRE</th>
                            <th className="header--text">IMAGEN</th>
                            <th className="header--text">BOTONES</th>
                        </tr>
                    </thead>
                    <tbody className="table--container-body">
                        {MockList.map((dato, i) => 
                            <tr className="body" key={i}>
                                <td className="body--text">{dato.name}</td>
                                <td className="container--body-image"><img className="body--image" src={dato.photo.medium}  alt={dato.name} /></td>
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
        {/* <div className="members-list">
            <Link to='/backoffice/members/create'>link a....crear miembro</Link>
            <h2>Miembros de la ONG </h2>

            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>photo</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {MockList.map((member) => (
                        <tr key={member.id}>
                            <td>{member.name}</td>
                            <td><img src={member.photo.medium} alt={member.name} /></td>
                            <td>
                                <div>
                                    <button  >Eliminar</button>
                                </div>
                                <div>
                                    <button>Editar</button>
                                </div>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div> */}
        </Fade>
    )
}

export default MembersList
