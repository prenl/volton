
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import On from '../../img/ON-logo-removebg-preview.png';
import './MapComponent.scss';

// Исправление проблемы с маркерами
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png'
});

const MapComponent = () => {
    return (
        <div className='mapContainer'>
            <div className='beOnTime'>
                <h4>Be <img src={On} alt='ON' className="onImage" /> Time</h4>
            </div>

            <MapContainer center={[51.1672761, 71.4759185]} zoom={15} style={{ height: "400px", width: "100%", margin: '0 auto' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[51.1672761, 71.4759185]}>
                    <Popup>
                        Маркеры Volton.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default MapComponent;
