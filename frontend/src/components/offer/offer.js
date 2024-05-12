import React from 'react';
import "./offer.scss";

import Zaglushka from "../../img/заглушка.jpeg";

const Offer = ({ batteries }) => {
    return (
        <div className="car-battery-listing">
            <div className="battery-preview">
                <img src={Zaglushka} alt={`Preview`} />
            </div>
            <div className="battery-details">
                <h3>Аккум</h3>
                <p>Фирма: Барс</p>
                <p>Цена: 10000</p>
                <p>Рейтинг: 4/5</p>
            </div>
            {/* {batteries.map((battery) => (
                <div key={battery.id} className="battery-card"> */}
            {/* <div className="battery-preview">
                        <img src={battery.previewPictures[0]} alt={`Preview`} />
                    </div> */}
            {/* <div className="battery-details">
                        <h3>{battery.modelName}</h3>
                        <p>Trademark: {battery.trademark}</p>
                        <p>Price: ${battery.price}</p>
                        <p>Rating: {battery.rating}/5</p>
                    </div> */}
        </div>
        //     ))}
        // </div>
    );
};

export default Offer;
