import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.scss';

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
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
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
                <div>
                    <h3>1</h3>
                    <div>Pidorasi</div>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
            </Slider>
        </div>
    );
};

export default OffersSlider;