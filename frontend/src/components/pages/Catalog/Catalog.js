import React, { useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar.js';
import './Catalog.scss';
import Dummy from '../../../img/заглушка.jpeg';

const Catalog = () => {
    const [filters, setFilters] = useState({
        brand: '',
        capacity: '',
        voltage: '',
    });

    const [displayMode, setDisplayMode] = useState('catalog-block');

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

    const filteredBatteries = dummyBatteries.filter((battery) => {
        return (
            (filters.brand === '' || battery.brand === filters.brand) &&
            (filters.capacity === '' || battery.capacity === parseInt(filters.capacity)) &&
            (filters.voltage === '' || battery.voltage === parseFloat(filters.voltage))
        );
    });

    return (
        <div className="catalog-container">
            <Sidebar filters={filters} setFilters={setFilters} />
            <div className="catalog-main-content">
                <div className="catalog-display-buttons">
                    <button onClick={() => setDisplayMode('catalog-block')}>Отображение блоков</button>
                    <button onClick={() => setDisplayMode('catalog-line')}>Одна батарея в строке</button>
                    <button onClick={() => setDisplayMode('catalog-detailed')}>Одна батарея в строке (детально)</button>
                </div>
                <div className={`catalog-battery-list ${displayMode}`}>
                    {filteredBatteries.length > 0 ? (
                        filteredBatteries.map((battery) => (
                            <div key={battery.id} className={`catalog-battery-item ${displayMode}`}>
                                <img src={battery.image} alt={battery.name} className="catalog-battery-image" />
                                <div className="catalog-battery-info">
                                    <h4>{battery.name}</h4>

                                    <p className="catalog-price">{battery.price.toFixed(2)} тенге</p>
                                    {battery.old_price && (
                                        <p className="catalog-old-price">Старая цена: {battery.old_price.toFixed(2)} тенге</p>
                                    )}
                                    {displayMode === 'catalog-detailed' && (
                                        <div className="catalog-detailed-info">
                                            <p>Бренд: {battery.brand}</p>
                                            <p>Емкость: {battery.capacity} мАч</p>
                                            <p>Напряжение: {battery.voltage} В</p>
                                            <p>ID категории: {battery.category_id}</p>
                                            {/* Add more detailed information if needed */}
                                        </div>
                                    )}
                                </div>
                                <button className="catalog-order-button">Заказать</button>
                            </div>
                        ))
                    ) : (
                        <p>Батареи не найдены</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Catalog;
