import React from 'react'
import Logo from '../../LOGO-SOMOS-MAS.png'

export default function Footer() {


    return (
        <footer>
            <div>
                <img src={Logo} alt="Logo Somos Mas" />
            </div>
            <div>
                <h5>items de navegacion</h5>
                <ul>
                    <li>
                        <a href="">Link 1</a>
                    </li>
                    <li>
                        <a href="">Link 2</a>
                    </li>
                </ul>
            </div>
            <div></div>
        </footer>
    )
}

