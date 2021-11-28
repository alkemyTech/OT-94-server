import React from 'react'
import { Link } from 'react-router-dom'
import MockList from './newsMock.json'
import './NewsList2.css'
import { getDataNewsTable } from '../../Services/NewsService';
import Fade from "react-reveal/Fade";
const NewsList2 = () => {

    const eliminateData = () => {
        console.log("Eliminar");
    }

    const editData = () => {
        console.log("Editar");
    }

    return (
        <Fade right>
            <h1 className="title">Listado de novedades</h1>
              <div className="container--table">
            <Link className="link--table" to="/backoffice/news/create">Crear novedades</Link>

            {MockList.length !== 0 ? 
                    <table className="table">
                    <thead className="table--container-header">
                        <tr className="header-table">
                            <th className="header--text">NOMBRE</th>
                            <th className="header--text">IMAGEN</th>
                            <th className="header--text">FECHA DE CREACION</th>
                            <th className="header--text">BOTONES</th>
                        </tr>
                    </thead>
                    <tbody className="table--container-body">
                        {MockList.map((dato, i) => 
                            <tr className="body" key={i}>
                                <td className="body--text">{dato.name}</td>
                                <td className="container--body-image"><img className="body--image" src={dato.image}  alt={dato.name} /></td>
                                <td className="body--text">{dato.createdAt} </td>
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
        {/* <div className="news-list">
            <Link to='/backoffice/news/create'>link a....crear novedad</Link>
            <h2>Novedades</h2>

            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>image</th>
                        <th>createdAt</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {MockList.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td><img src={item.image} alt={item.name} /></td>
                            <td>{item.createdAt ? 'yes' : 'no'}</td>
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

export default NewsList2

