import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../Contact/LeafletMap.css';
import { Get } from '../../Services/privateApiService';
import Alert from '../Skeleton/Alert';

export default function LeafletMap() {
  const [direccion, setDireccion] = useState();
  const [huboError, setHuboError] = useState(false);
  const position = [-34.439837347788526, -58.556327027441405];


  return (
    <div className='contenedor'>
      <MapContainer center={position} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>Sede de Somos Mas</Popup>
        </Marker>
      </MapContainer>
      {huboError && (
        <Alert
          showAlert={true}
          title='Error'
          text='Hubo un error cargando la dirección en el mapa'
          type='error'
          cancelButton={false}
          confirmButtonText='OK'
          cancelButtonText='Cancel'
          showDenyButton={true}
        />
      )}
    </div>
  );
}
