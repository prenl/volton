import React, { useEffect } from 'react';

import OnImage from '../../img/ON-logo-removebg-preview.png';
import './MapComponent.scss';

const MapComponent = () => {
    useEffect(() => {
        if (window.ymaps) {
            window.ymaps.ready(init);
        }

        function init() {
            const map = new window.ymaps.Map("map", {
                center: [51.167255, 71.476306],
                zoom: 15
            });

            const placemark = new window.ymaps.Placemark([51.167255, 71.476306], {
                hintContent: 'Улица Александра Пушкина, 31',
                balloonContent: 'Маркеры Volton.'
            });

            map.geoObjects.add(placemark);
        }
    }, []);

    return (
        <div className='mapContainer'>
            <div className='beOnTime'>
                <h4>Be <img src={OnImage} alt='ON' className="onImage" /> Time</h4>
            </div>

            <div id="map" className="map"></div>
        </div>
    );
};

export default MapComponent;