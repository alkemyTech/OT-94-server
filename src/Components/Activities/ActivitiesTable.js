import React from 'react'
import { Link } from 'react-router-dom'
const ActivitiesTable = () => {
    const data = [
        {
            name: "Messi",
            image: "url",
            createdAt: "algo 1"
        },
        {
            name: "Paredes",
            image: "url",
            createdAt: "algo 2"
        },
        {
            name: "Di maria",
            image: "url",
            createdAt: "algo 3"
        },
        {
            name: "Aguero",
            image: "url",
            createdAt: "algo 4"
        },
        {
            name: "De Paul",
            image: "url",
            createdAt: "algo 5"
        }
    ]

    const eliminateData = () => {
        console.log("Eliminar");
    }

    const editData = () => {
        console.log("Editar");
    }

    return (
        <div>
            <h1>Activiites table</h1>
            <Link to="/backoffice/activities/create">Crear actividad</Link>
            {data ? 
                <table>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>image</th>
                            <th>createdAt</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(dato => 
                            <tr>
                                <td>{dato.name}</td>
                                <td><img src={dato.image} alt={dato.name} /></td>
                                <td>{dato.createdAt}</td>
                                <td><button onClick={eliminateData} >Eliminar</button></td>
                                <td><button onClick={editData} >Editar</button></td>
                            </tr>
                            )}
                    </tbody>
                </table>
            : <h2>No hay data para mostrar</h2>}
        </div>
    )
}

export default ActivitiesTable;
