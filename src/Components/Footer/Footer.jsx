import React, { useEffect, useState } from 'react'
import Logo from '../../LOGO-SOMOS-MAS.png'
import { Get } from '../../Services/privateApiService'
import './footer.css'

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
                <a href="/">Home</a>
                <a href="/actividades">Actividades</a>
                <a href="/novedades">Novedades</a>
                <a href="/nosotros">Nosotros</a>
                <a href="/contacto">Contacto</a>
                <a href="/donar">Donar</a>
            </div>
            <div className="footer-social">
                <a href={social ? social.facebook : ""}>Facebook</a>
                <a href={social ? social.instagram : ""}>Instagram</a>
            </div>
        </footer>
    )
}

