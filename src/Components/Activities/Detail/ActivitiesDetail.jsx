import axios from 'axios'
import React, { useEffect, useState, Fragment } from 'react'
import Titles from '../../Titles/Titles'
import ActivitiesContent from './ActivitiesContent'

export default function ActivitiesDetail(props) {

    const [content, setContent] = useState()

    async function getActivity() {
        try {
            const {data} = await axios.get('url')
            setContent(data)
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => { getActivity() }, [])

    return (
        <div>
            <Titles imagenTitulo={props.imagenDetail} titulo={props.tituloDetail} />
            <ActivitiesContent 
                contenido={
                    content 
                    ? content 
                    : <p>Esta actividad todavía no tiene contenido.</p>
                }
            />
        </div>
    )
}
