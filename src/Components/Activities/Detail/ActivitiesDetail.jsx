import axios from 'axios'
import React, { useEffect, useState, Fragment } from 'react'
import Titles from '../../Titles/Titles'
import ActivitiesContent from './ActivitiesContent'
import { getDataActivityDetail } from '../../../Services/activityService'
// llamada a Api con redux thunk Activiti
// import { getListActivities } from '../../../features/activity/activitySlice'
// import { useDispatch, useSelector } from 'react-redux'

export default function ActivitiesDetail(props) {
    // Llamada a redux thunk funcionando
    // const dispatch = useDispatch();         
    // const { listActivities } = useSelector((state) => state.listActivity);
    // useEffect(() => {
    //     dispatch(getListActivities("https://jsonplaceholder.typicode.com/users"))
    // }, [])
    // console.log(listActivities)
    
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
