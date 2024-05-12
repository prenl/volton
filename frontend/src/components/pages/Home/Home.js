import React from "react";
import OffersSlider from "../../slider/Slider";
import Advantages from "../../Advantages-stripe/Advantages.js"
import Offer from "../../offer/offer.js";


const Home = () => {
    return (
        <div>
            <OffersSlider />
            <Advantages />
            <Offer />
        </div>
    );
};
export default Home;