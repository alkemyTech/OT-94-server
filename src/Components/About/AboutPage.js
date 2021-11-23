import React from 'react'
import Titles from '../Titles/Titles'
import MemberList from './MemberList'

const AboutPage = () => {

    const aboutMock = [
        {name: 'Luis', image: "https://image.shutterstock.com/image-vector/profile-anonymous-face-icon-gray-260nw-789318310.jpg", description: 'Descripcion de prueba', facebookUrl: "https://www.facebook.com", linkedinUrl: "https://www.linkedin.com"},
        {name: 'Sandra', image: "https://image.shutterstock.com/image-vector/profile-anonymous-face-icon-gray-260nw-789318310.jpg", description: 'Descripcion de prueba', facebookUrl: "https://www.facebook.com", linkedinUrl: "https://www.linkedin.com"},
        {name: 'Javier', image: "https://image.shutterstock.com/image-vector/profile-anonymous-face-icon-gray-260nw-789318310.jpg", description: 'Descripcion de prueba', facebookUrl: "https://www.facebook.com", linkedinUrl: "https://www.linkedin.com"}
    ];

    const SobreNosotrosText = 'Texto sobre nosotros example'

    return (
        <div>
            <Titles titulo='Nosotros' imagenTitulo='https://a.slack-edge.com/ddb1dac/marketing/img/careers/img-hero-slack-careers.jpg' />
            <p>{SobreNosotrosText}</p>
            <MemberList miembros={aboutMock}/>
        </div>
    )
}

export default AboutPage
