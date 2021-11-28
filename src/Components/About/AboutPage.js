import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MemberList from './MemberList'

const AboutPage = () => {

    const aboutMock = [
        { name: 'Brad', image: "https://randomuser.me/api/portraits/men/75.jpg", description: 'Descripcion de prueba', facebookUrl: "https://www.facebook.com", linkedinUrl: "https://www.linkedin.com" },
        { name: 'Jessica', image: "https://randomuser.me/api/portraits/women/76.jpg", description: 'Descripcion de prueba', facebookUrl: "https://www.facebook.com", linkedinUrl: "https://www.linkedin.com" },
        { name: 'Lisandro', image: "https://randomuser.me/api/portraits/men/77.jpg", description: 'Descripcion de prueba', facebookUrl: "https://www.facebook.com", linkedinUrl: "https://www.linkedin.com" },
        { name: 'Rebeca', image: "https://randomuser.me/api/portraits/women/78.jpg", description: 'Descripcion de prueba', facebookUrl: "https://www.facebook.com", linkedinUrl: "https://www.linkedin.com" }
    ];

    useEffect(() => {

        async function getText() {
            try {
                const texto = await axios.get("url")
            } catch (err) {
                console.log(err)
            }
        }
        getText()
    }, [])

    return (
        <div>
            <div className="container--us">
                <h1>Nosotros</h1>
                <img className="img-us" src="/images/blog-img-03.jpg" alt="img-us" />
            </div>
            <MemberList miembros={aboutMock} />
        </div>
    )
}

export default AboutPage
