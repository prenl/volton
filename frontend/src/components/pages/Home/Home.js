import React from "react";
import OffersSlider from "../../slider/Slider";
import Advantages from "../../Advantages-stripe/Advantages.js";

import "./Home.scss";
import MapComponent from "../../MapComponent/MapComponent.js";
import BatteriesComponent from "../../BatteriesComponent/BatteriesComponent.js";

const Home = () => {
    return (
        <div className="main-container">
            <OffersSlider />
            <Advantages />
            <BatteriesComponent />
            <MapComponent />
        </div>
    );
};
export default Home;