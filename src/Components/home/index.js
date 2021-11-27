import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Carrousel from '../Carrousel/Carrousel'
import Loader from '../Skeleton/Loader'
import Alert from '../Skeleton/Alert'
// redux
import { showAlerts } from '../../features/alert/alertSlice'
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
    // redux
    const valueAlert = useSelector(state => state.alert);
    const dispatch = useDispatch();

    const welcomeText = 'Bienvenidos al sitio web de Somos Mas';

    const [textoBienvenida, setTextoBienvenida] = useState("cargando")

    useEffect(() => {

        async function getText() {
            try {
                const texto = await axios.get("url")
                setTextoBienvenida(texto.data)
            } catch (err) {
                dispatch(showAlerts(true))
                setTextoBienvenida(welcomeText)
            }
        }

        getText()

    }, [])

    return (
        <div>
            {
                textoBienvenida === "cargando" ? <Loader /> : <h2 style={{textAlign: "center"}}>{textoBienvenida}</h2>
            }

            {/* {valueAlert.showAlert ?
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
                : null} */}
            <Carrousel />
        </div>
    )
}

export default Home;