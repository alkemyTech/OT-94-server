import React from 'react'
import { Link } from 'react-router-dom'
import MockList from './newsMock.json'
import './NewsList2.css'

const NewsList2 = () => {
    return (
        <div className="news-list">
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
        </div>
    )
}

export default NewsList2

