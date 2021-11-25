import React, {useEffect, useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../Contact/LeafletMap.css'
import { Get } from '../../Services/privateApiService'
import Alert from '../Skeleton/Alert'

export default function LeafletMap() {

    const [direccion, setDireccion] = useState()
    const [huboError, setHuboError] = useState(false)

    return (
        <div className="contenedor">
            <MapContainer center={[51.500, -0.09]} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.500, -0.09]}>
                    <Popup>
                    Sede de Somos Mas
                    </Popup>
                </Marker>
            </MapContainer>
            {huboError && 
                <Alert 
                    showAlert = {true}
                    title = "Error"
                    text = "Hubo un error cargando la dirección en el mapa"
                    type = "error"
                    cancelButton = {false}
                    confirmButtonText = "OK"
                    cancelButtonText = "Cancel"
                    showDenyButton = {true}
                />
            }
        </div>
    )
}
