import React from 'react'
import { Link } from 'react-router-dom'
import MockList from './membersMock.json' //fotos sacas de random user generator
import './MemberList.css'

const MembersList = () => {
    return (
        <div className="members-list">
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
        </div>
    )
}

export default MembersList
