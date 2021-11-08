import React from 'react'
import Titles from '../Titles/Titles'

const AboutPage = () => {

    const SobreNosotrosText = 'Texto sobre nosotros example'

    return (
        <div>
            <Titles titulo='Nosotros' imagenTitulo='https://a.slack-edge.com/ddb1dac/marketing/img/careers/img-hero-slack-careers.jpg' />
            <p>{SobreNosotrosText}</p>
        </div>
    )
}

export default AboutPage
