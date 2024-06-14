import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setBatteries } from '../../slices/batteriesSlice.js';

import Dummy from '../../img/заглушка.jpeg';

//styles
import './BatteriesComponents.scss';
import SmoothHeading from '../smooth-heading/smooth-heading.js';

const BatteriesComponent = () => {
    const dispatch = useDispatch();
    const batteries = useSelector(state => state.batteries)

    const dummyBatteries = [
        {
            id: 1,
            brand: 'Duracell',
            name: 'AA Alkaline Battery',
            category_id: 101,
            capacity: 2500,
            voltage: 1.5,
            price: 0.99,
            image: Dummy,
            old_price: 1.49,
        },
        {
            id: 2,
            brand: 'Energizer',
            name: 'AAA Lithium Battery',
            category_id: 101,
            capacity: 1200,
            voltage: 1.5,
            price: 1.29,
            image: Dummy,
            old_price: 1.59,
        },
        {
            id: 3,
            brand: 'Panasonic',
            name: 'C Alkaline Battery',
            category_id: 102,
            capacity: 8000,
            voltage: 1.5,
            price: 1.99,
            image: Dummy,
            old_price: 2.49,
        },
        {
            id: 4,
            brand: 'Sony',
            name: 'D Alkaline Battery',
            category_id: 102,
            capacity: 12000,
            voltage: 1.5,
            price: 2.49,
            image: Dummy,
            old_price: 2.99,
        },
        {
            id: 5,
            brand: 'AmazonBasics',
            name: '9V Alkaline Battery',
            category_id: 103,
            capacity: 600,
            voltage: 9,
            price: 3.99,
            image: Dummy,
            old_price: 4.49,
        },
        {
            id: 6,
            brand: 'Rayovac',
            name: 'CR2032 Lithium Coin Battery',
            category_id: 104,
            capacity: 240,
            voltage: 3,
            price: 0.79,
            image: Dummy,
            old_price: 0.99,
        },
        {
            id: 7,
            brand: 'GP',
            name: 'AA NiMH Rechargeable Battery',
            category_id: 105,
            capacity: 2000,
            voltage: 1.2,
            price: 2.49,
            image: Dummy,
            old_price: 2.99,
        },
        {
            id: 8,
            brand: 'Varta',
            name: 'AAA NiMH Rechargeable Battery',
            category_id: 105,
            capacity: 800,
            voltage: 1.2,
            price: 2.29,
            image: Dummy,
            old_price: 2.79,
        },
        {
            id: 9,
            brand: 'Philips',
            name: 'AA Zinc Carbon Battery',
            category_id: 101,
            capacity: 1500,
            voltage: 1.5,
            price: 0.69,
            image: Dummy,
            old_price: 0.89,
        },
        {
            id: 10,
            brand: 'Maxell',
            name: 'CR2025 Lithium Coin Battery',
            category_id: 104,
            capacity: 170,
            voltage: 3,
            price: 0.69,
            image: Dummy,
            old_price: 0.89,
        }
    ];

    useEffect(() => {
        const fetchBatteries = async () => {
            try {
                // const response = await fetch('http://localhost:3000/api/batteries');
                // const data = await response.json();
                const data = dummyBatteries;
                dispatch(setBatteries(data));
                console.log(data);
            } catch (error) {
                console.error('Error fetching batteries:', error);
            }
        };

        fetchBatteries();
    }, [dispatch]);

    const sortedBatteries = [...batteries].sort((a, b) => a.price - b.price);

    return (
        <div className="container">
            <SmoothHeading content="Автомобильные аккумуляторы" fontSize="30" className="smooth-heading" />
            <div className="battery-list">
                {sortedBatteries.slice(0, 4).map(battery => (
                    <div key={battery.id} className="battery-item">
                        <img src={battery.image} alt={battery.name} />
                        <div className="details">
                            <div className="availability">✔ В наличии</div>
                            <h2>{battery.name}</h2>
                            <p className="price">${battery.price}</p>
                            {battery.old_price && <p className="old-price">${battery.old_price}</p>}
                            <div className="button-container">
                                <button className="button">Заказать</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BatteriesComponent;
