import React from 'react';

const Sidebar = ({ filters, setFilters }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value,
        });
    };

    return (
        <div className="catalog-sidebar">
            <h3>Фильтр батарей</h3>
            <div className="catalog-filter">
                <label htmlFor="brand">Бренд</label>
                <select name="brand" id="brand" onChange={handleChange}>
                    <option value="">Все бренды</option>
                    <option value="Duracell">Duracell</option>
                    <option value="Energizer">Energizer</option>
                    <option value="Panasonic">Panasonic</option>
                    <option value="Sony">Sony</option>
                    <option value="AmazonBasics">AmazonBasics</option>
                    <option value="Rayovac">Rayovac</option>
                    <option value="GP">GP</option>
                    <option value="Varta">Varta</option>
                    <option value="Philips">Philips</option>
                    <option value="Maxell">Maxell</option>
                </select>
            </div>
            <div className="catalog-filter">
                <label htmlFor="capacity">Емкость (мАч)</label>
                <select name="capacity" id="capacity" onChange={handleChange}>
                    <option value="">Все емкости</option>
                    <option value="2500">2500 мАч</option>
                    <option value="1200">1200 мАч</option>
                    <option value="8000">8000 мАч</option>
                    <option value="12000">12000 мАч</option>
                    <option value="600">600 мАч</option>
                    <option value="240">240 мАч</option>
                    <option value="2000">2000 мАч</option>
                    <option value="800">800 мАч</option>
                    <option value="1500">1500 мАч</option>
                    <option value="170">170 мАч</option>
                </select>
            </div>
            <div className="catalog-filter">
                <label htmlFor="voltage">Напряжение (В)</label>
                <select name="voltage" id="voltage" onChange={handleChange}>
                    <option value="">Все напряжения</option>
                    <option value="1.5">1.5 В</option>
                    <option value="9">9 В</option>
                    <option value="3">3 В</option>
                    <option value="1.2">1.2 В</option>
                </select>
            </div>
        </div>
    );
};

export default Sidebar;
