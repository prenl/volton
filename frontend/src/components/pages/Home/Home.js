import React from "react";
import OffersSlider from "../../slider/Slider";
import Advantages from "../../Advantages-stripe/Advantages.js"
import Offer from "../../offer/offer.js";

import "./Home.scss";
import OffersStripe from "./Offers-stripe/OffersStripe.js";

const Home = () => {
    return (
        <div className="main-container">
            <OffersSlider />
            <Advantages />
            <OffersStripe />

        </div>
    );
};
export default Home;