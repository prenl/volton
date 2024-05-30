import React from 'react';
import "./OffersStripe.scss";
import Offer from "../offer/offer.js";
import SmoothHeading from '../smooth-heading/smooth-heading';

const OffersStripe = ({ offers }) => {
    return (
        <div className="special-offer-stripe">
            <SmoothHeading fontSize={30} content="Лучшие товары" />
            <div className="offer-container">
                <Offer />
                <Offer />
                <Offer />
                <Offer />
            </div>
        </div>
    );
};

export default OffersStripe;