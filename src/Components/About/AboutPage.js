import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Titles from '../Titles/Titles'
import Alert from '../Skeleton/Alert'
import Loader from '../Skeleton/Loader'
import MemberList from './MemberList'

const AboutPage = () => {

    const aboutMock = [
        {name: 'Luis', image: "https://image.shutterstock.com/image-vector/profile-anonymous-face-icon-gray-260nw-789318310.jpg", description: 'Descripcion de prueba', facebookUrl: "https://www.facebook.com", linkedinUrl: "https://www.linkedin.com"},
        {name: 'Sandra', image: "https://image.shutterstock.com/image-vector/profile-anonymous-face-icon-gray-260nw-789318310.jpg", description: 'Descripcion de prueba', facebookUrl: "https://www.facebook.com", linkedinUrl: "https://www.linkedin.com"},
        {name: 'Javier', image: "https://image.shutterstock.com/image-vector/profile-anonymous-face-icon-gray-260nw-789318310.jpg", description: 'Descripcion de prueba', facebookUrl: "https://www.facebook.com", linkedinUrl: "https://www.linkedin.com"}
    ];

    const SobreNosotrosText = 'Texto sobre nosotros example'

    const [texto, setTexto] = useState("cargando")
    const [huboError, setHuboError] = useState(false)

    useEffect(() => {

        async function getText() {
            try {
                const texto = await axios.get("url")
                setTexto(texto.data)
            } catch (err) {
                console.log(err)
                setHuboError(true)
                setTexto(SobreNosotrosText)
            }
        }

        getText()

    }, [])

    return (
        <div>
            <Titles titulo='Nosotros' imagenTitulo='https://a.slack-edge.com/ddb1dac/marketing/img/careers/img-hero-slack-careers.jpg' />
            {
                texto === "cargando" ? <Loader /> : <p>{texto}</p>
            }
            {
                huboError && <Alert />
            }
            <MemberList miembros={aboutMock}/>
        </div>
    )
}

export default AboutPage
