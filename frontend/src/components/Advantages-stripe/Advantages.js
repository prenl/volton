import React from 'react'
import './Advantages.scss';

import Guarantee from "../../img/icons/guarantee.png";
import Experience from "../../img/icons/customer-experience.png";
import Quality from "../../img/icons/award-symbol.png";

import SmoothHeading from '../smooth-heading/smooth-heading';

const Advantages = () => {
    return (
        <div className='advantages-wrap-container'>
            <SmoothHeading content='Достоинства' fontSize={30} className='advantages-heading smooth-heading' />
            <div className='advantages-container'>
                <div className="advantage">
                    <img src={Guarantee} alt='Гарантия' />
                    <h3>Гарантия</h3>
                    <p>До 2 лет гарантии</p>
                </div>
                <div className="advantage">
                    <img src={Experience} alt='Опыт' />
                    <h3>Опыт</h3>
                    <p>Более 10 лет на рынке</p>
                </div>
                <div className="advantage">
                    <img src={Quality} alt='Качество' />
                    <h3>Качество</h3>
                    <p>Оригинальные товары от известных производителей</p>
                </div>
            </div>
        </div>)
}
export default Advantages;
