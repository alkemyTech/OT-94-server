import React, { useEffect, useState } from 'react'
import Logo from '../../LOGO-SOMOS-MAS.png'
import { Get } from '../../Services/privateApiService'
import './footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {

    const [social, setSocial] = useState()

    useEffect(() => {
        const contact = Get('baseUrl','organization')
        if (contact) {
            setSocial(contact.data)
        }
        
    }, [])


    return (
        <footer className="footer">
            <div>
                <img src={Logo} alt="Logo Somos Mas" />
            </div>
            <div className="footer-navigation">
                <Link to="/">Home</Link>
                <Link to="/actividades">Actividades</Link>
                <Link to="/novedades">Novedades</Link>
                <Link to="/nosotros">Nosotros</Link>
                <Link to="/contacto">Contacto</Link>
                <Link to="/donar">Donar</Link>
            </div>
            <div className="footer-social">
                <a href={social ? social.facebook : ""}>Facebook</a>
                <a href={social ? social.instagram : ""}>Instagram</a>
            </div>
        </footer>
    )
}

