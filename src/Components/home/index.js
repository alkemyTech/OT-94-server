import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Carrousel from '../Carrousel/Carrousel'
import Alert from '../Skeleton/Alert'
import Loader from '../Skeleton/Loader'

const Home = () => {
    const welcomeText = 'texto de bienvenida example';

    const [textoBienvenida, setTextoBienvenida] = useState("cargando")
    const [huboError, setHuboError] = useState(false)

    useEffect(() => {

        async function getText() {
            try {
                const texto = await axios.get("url")
                setTextoBienvenida(texto.data)
            } catch (err) {
                console.log(err)
                setHuboError(true)
                setTextoBienvenida(welcomeText)
            }
        }

        getText()

    }, [])

    return (
        <div>
            {
                textoBienvenida === "cargando" ? <Loader /> : <h2>{textoBienvenida}</h2>
            }
            {
                huboError && <Alert />
            }
            <div>//placeholder
            //slider  //listado de novedades
            </div>
            <Carrousel />
        </div>
    )
}

export default Home;