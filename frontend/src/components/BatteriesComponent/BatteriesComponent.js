import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setBatteries } from '../../slices/batteriesSlice.js';

const BatteriesComponent = () => {
    const dispatch = useDispatch();
    const batteries = useSelector(state => state.batteries);

    useEffect(() => {
        const fetchBatteries = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/batteries');
                const data = await response.json();
                dispatch(setBatteries(data));
                console.log(data);
            } catch (error) {
                console.error('Error fetching batteries:', error);
            }
        };

        fetchBatteries();
    }, [dispatch]);

    return (
        <div>
            <h1>Car Batteries</h1>
            <ul>
                {batteries.map(battery => (
                    <li key={battery.id}>
                        <img src={battery.image} alt={battery.name} width="50" />
                        {battery.name} - {battery.brand} - ${battery.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BatteriesComponent;
