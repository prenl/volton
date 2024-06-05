import React from 'react'
import { useNavigate } from 'react-router-dom';

import './navbar.scss'

export const Navbar = () => {

    const navigator = useNavigate();

    return (
        <div className='navbarContainer'>
            <div className='navbarLink' onClick={() => navigator('about-us')}>О нас</div>
            <div className='navbarLink' onClick={() => navigator('about-us/specials')}>Акции</div>
            <div className='navbarLink' onClick={() => navigator('about-us/offers')}>Услуги</div>
            <div className='navbarLink' onClick={() => navigator('about-us/delivery')}>Доставка</div>
            <div className='navbarLink' onClick={() => navigator('about-us/warranty')}>Гарантия</div>
            <div className='navbarLink' onClick={() => navigator('catalogue')}>Каталог</div>
        </div>
    )
}
