import React from 'react'
import { useNavigate } from 'react-router-dom';

import './navbar.scss'

export const Navbar = () => {

    const navigator = useNavigate();

    return (
        <div className='navbarContainer'>
            <div className='navbarLink' onClick={navigator('about-us')}>О нас</div>
            <div className='navbarLink' onClick={navigator('specials')}>Акции</div>
            <div className='navbarLink' onClick={navigator('offers')}>Услуги</div>
            <div className='navbarLink' onClick={navigator('delivery')}>Доставка</div>
            <div className='navbarLink' onClick={navigator('warranty')}>Гарантия</div>
        </div>
    )
}
