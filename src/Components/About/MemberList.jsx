import React from 'react'
import "./memberList.css";
import { SiFacebook, SiLinkedin } from "react-icons/si"
export default function MemberList({miembros}) {

    if(miembros){
        return (
            <div>
                <ul className="container--members">
                    {
                        miembros.length > 0 ?
                            miembros.map((miembro) => {
                                return(
                                    <li key={miembro.name} className="member">
                                        <h3 className="member--name">{miembro.name}</h3>
                                        <img className="member--img" src={miembro.image} alt={miembro.name} />
                                        <p className="member--description">{miembro.description}</p>
                                        <div className="member--container-social">
                                        <a target="_blank" href={miembro.facebookUrl}><SiFacebook className="member--social" /></a>
                                        <a target="_blank" href={miembro.linkedinUrl}><SiLinkedin className="member--social" /></a>
                                        </div>
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
