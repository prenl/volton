import React from 'react';

const CarBatteryListing = ({ batteries }) => {
    return (
        <div className="car-battery-listing">
            {batteries.map((battery) => (
                <div key={battery.id} className="battery-card">
                    <div className="battery-preview">
                        <img src={battery.previewPictures[0]} alt={`Preview`} />
                    </div>

                    <div className="battery-details">
                        <h3>{battery.modelName}</h3>
                        <p>Trademark: {battery.trademark}</p>
                        <p>Price: ${battery.price}</p>
                        <p>Rating: {battery.rating}/5</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CarBatteryListing;
