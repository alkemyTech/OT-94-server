import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Titles from '../../Titles/Titles'
import getDataNewsDetail from "../../../Services/publicApiService";
export default function NewsDetail(props) {

    const [novedades, setNovedades] = useState()

    async function getNewsDetail() {
        try {
            const {data} = await axios.get('url')
            setNovedades(data)
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => { getNewsDetail() }, [])

    return (
        <div>
            <Titles imagenTitulo={props.imagenDetail} titulo={props.tituloDetail} />
            <img src='novedades.imagen' alt='novedades.alt'/>
            <p>novedades.contenido</p>
        </div>
    )
}