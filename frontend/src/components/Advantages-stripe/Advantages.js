import React from 'react'
import './Advantages.scss';

const Advantages = () => {
    return (
        <div className='advantages-wrap-container'>
            <h3 className='advatanges-heading'>Достоинства</h3>
            <div className='advantage-container'>
                <div className="advantage">
                    <h2>Гарантия</h2>
                    <p>До 2 лет гарантии</p>
                </div>
                <div className="advantage">
                    <h3>Опыт</h3>
                    <p>Более 10 лет на рынке</p>
                </div>
                <div className="advantage">
                    <h3>Качество</h3>
                    <p>Оригинальные товары от известных производителей</p>
                </div>
            </div>
        </div>
    )
}
export default Advantages;
