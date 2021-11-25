import React from 'react'
import Logo from '../../LOGO-SOMOS-MAS.png'
import { Link } from 'react-router-dom'
import './footer.css'

export default function Footer() {


    return (
        <footer className="footer">
            <div>
                <img src={Logo} alt="Logo Somos Mas" />
            </div>
            <div className="footer-navigation">
                <a href="">Actividades</a>
                <a href="">Novedades</a>
                <a href="">Nosotros</a>
                <a href="">Contacto</a>
                <a href="">Donar</a>
                {/* <ul className="footer-navigation__list">
                    <li>
                        <a href="">Actividades</a>
                    </li>
                    <li>
                        <a href="">Novedades</a>
                    </li>
                    <li>
                        <a href="">Nosotros</a>
                    </li>
                    <li>
                        <a href="">Contacto</a>
                    </li>
                    <li>
                        <a href="">Donar</a>
                    </li>
                </ul> */}
            </div>
            <div className="footer-social">
                <a href="">Facebook</a>
                <a href="">Instagram</a>
            </div>
        </footer>
    )
}

