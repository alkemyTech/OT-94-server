import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Titles from '../../Titles/Titles'
// import Alert from '../Skeleton/Alert';
import Alert from "../../Skeleton/Alert";
// redux
import { showAlerts } from '../../../features/alert/alertSlice';
import { useDispatch, useSelector } from 'react-redux'; 

export default function NewsDetail(props) {
    // redux
    const valueAlert = useSelector(state => state.alert);
    const dispatch = useDispatch();
 
    const [novedades, setNovedades] = useState()

    async function getNewsDetail() {
        try {
            const {data} = await axios.get('url')
            setNovedades(data)
        } catch(error) {
            dispatch(showAlerts(true))
        }
    }

    useEffect(() => { getNewsDetail() }, [])

    return (
        <div>
            <Titles imagenTitulo={props.imagenDetail} titulo={props.tituloDetail} />
            <img src='novedades.imagen' alt='novedades.alt'/>
            <p>novedades.contenido</p>
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