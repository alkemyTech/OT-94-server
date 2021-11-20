import React from 'react'
import { Link } from 'react-router-dom'
import MockList from './usersMock.json'
import './UsersList.css'

const UsersList = () => {
    return (
        <div className="users-list">
            <Link to='/backoffice/users/create'>link a....crear usuario</Link>
            <h2>Usuarios existentes</h2>

            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>email</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {MockList.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
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

export default UsersList