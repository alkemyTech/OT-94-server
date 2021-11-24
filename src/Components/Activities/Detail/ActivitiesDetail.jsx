import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Titles from '../../Titles/Titles'
import ActivitiesContent from './ActivitiesContent'
// redux
import { showAlerts } from '../../../features/alert/alertSlice'
import { useDispatch, useSelector } from 'react-redux';
import Alert from '../../Skeleton/Alert';

export default function ActivitiesDetail(props) {

    // redux
    const valueAlert = useSelector(state => state.alert);
    const dispatch = useDispatch();

    const [content, setContent] = useState()

    async function getActivity() {
        try {
            const { data } = await axios.get('url')
            setContent(data)
        } catch (error) {
            dispatch(showAlerts(true))
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
           {valueAlert.showAlert ?  
                Alert({
                    showAlert: valueAlert,
                    title: "Hubo un error!",
                    text: "Error al realizar peticion desde el servicio",
                    type: "error",
                    cancelButton: false,
                    confirmButtonText: "OK",
                    cancelButtonText: "Cancel",
                    showDenyButton: true
                }) 
            : null }
        </div>
    )
}
