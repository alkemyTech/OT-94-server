import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Titles from '../Titles/Titles'
import Alert from '../Skeleton/Alert'
import Loader from '../Skeleton/Loader'

const AboutPage = () => {

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
        </div>
    )
}

export default AboutPage
