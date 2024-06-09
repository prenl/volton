import React, { useRef, useEffect } from 'react';

// Slick imports for slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.scss';

// Components
import SmoothHeading from '../smooth-heading/smooth-heading';

// Slider imagery
import prevOne from "../../img/vitrina/Prev-one.png";
import prevTwo from "../../img/vitrina/Prev-two.png";
import prevThree from "../../img/vitrina/Prev-three.png";

const OffersSlider = ({ offers }) => {

    const sliderRef = useRef(null);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         if (sliderRef.current) {
    //             sliderRef.current.slickNext();
    //         }
    //     }, 3000); // Change slide every 2 seconds

    //     return () => clearInterval(interval);
    // }, []);

    // Settings for the slider
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };

    return (
        <div className="slider-container">
            <Slider ref={sliderRef} {...settings}>
                <div className="slide-container">
                    <div className='slide' style={{ backgroundImage: `url(${prevOne})` }}>
                        <SmoothHeading className="smooth-heading" fontSize="30" content="VOLTON" />
                        <SmoothHeading className='smooth-heading' fontSize="20" content="Интернет покупка и гарантия качествa" />
                    </div>
                </div>
                <div className="slide-container">
                    <div className='slide' style={{ backgroundImage: `url(${prevTwo})` }}>
                        <SmoothHeading className="smooth-heading" fontSize="30" content="VOLTON" />
                        <SmoothHeading className='smooth-heading' fontSize="20" content="Интернет покупка и гарантия качествa" />
                    </div>
                </div>
                <div className="slide-container">
                    <div className='slide' style={{ backgroundImage: `url(${prevThree})` }}>
                        <SmoothHeading className="smooth-heading" fontSize="30" content="VOLTON" />
                        <SmoothHeading className='smooth-heading' fontSize="20" content="Интернет покупка и гарантия качествa" />
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default OffersSlider;