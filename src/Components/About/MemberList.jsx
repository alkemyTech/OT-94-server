import React from 'react'

export default function MemberList({miembros}) {

    if(miembros){
        return (
            <div>
                <ul>
                    {
                        miembros.length > 0 ?
                            miembros.map((miembro) => {
                                return(
                                    <li key={miembro.name}>
                                        <h3>{miembro.name}</h3>
                                        <img src={miembro.image} alt={miembro.name} />
                                        <p>{miembro.description}</p>
                                        <a href={miembro.facebookUrl}>Facebook</a>
                                        <a href={miembro.linkedinUrl}>Linkedin</a>
                                    </li>
                                )
                            })
                        : 
                            <p>No hay miembros actualmente</p>
                    }
                </ul>
            </div>
        )
    } else {
        return (
            <p>La información sobre los miembros de la ONG no esta disponible por ahora</p>
        )
    }
    
}
