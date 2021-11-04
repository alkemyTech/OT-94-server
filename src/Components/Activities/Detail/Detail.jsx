import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Titles from '../../Titles/Titles'

export default function Detail(props) {

    const [content, setContent] = useState()

    async function getActivity() {
        try {
            const respuesta = await axios.get('url')
            setContent(respuesta)
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => { getActivity() }, [])

    return (
        <div>
            <Titles imagenTitulo={props.imagenDetail} titulo={props.tituloDetail} />
            <p>{content}</p>
        </div>
    )
}
