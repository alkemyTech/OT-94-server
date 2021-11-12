import React from 'react'
import { Link } from 'react-router-dom'
import MockList from './membersMock.json' //fotos sacas de random user generator

const MembersList = () => {
    return (
        <div>
            <Link to='/backoffice/members/create'>link a....crear miembro</Link>
            <h2>miembros de la ONG </h2>

            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>photo</th>
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
