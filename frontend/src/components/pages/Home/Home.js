import React from "react";
import OffersSlider from "../../slider/Slider";
import Advantages from "../../Advantages-stripe/Advantages.js";
import OffersStripe from "../../Offers-stripe/OffersStripe.js";

import "./Home.scss";
import MapComponent from "../../MapComponent/MapComponent.js";

const Home = () => {
    return (
        <div className="main-container">
            <OffersSlider />
            <Advantages />
            <OffersStripe />
            <MapComponent />
        </div>
    );
};
export default Home;