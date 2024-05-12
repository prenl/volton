import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Register from '../modals/Register/Register';

import './header.scss';
import logo from '../../img/VOLTON-logo.png';
import cart from '../../img/icons/shopping-cart.png';

const Header = () => {

  const navigator = useNavigate();

  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const openModal = () => {
    setIsRegisterOpen(true);
  };

  const closeModal = () => {
    setIsRegisterOpen(false);
  };

  return (
    <div className='headerContainer' >
      <header className="header" >
        <img
          src={logo}
          alt="Volton Logo"
          className="header-logo"
          onClick={() => { navigator('/') }}
        />
        {!isRegisterOpen && <button className="registerBtn" onClick={openModal}>Зарегестрироваться</button>}
        <Register isOpen={isRegisterOpen} onClose={closeModal} />
        <img src={cart} alt='shopping cart' className='shoppingCart' />
      </header>
    </div>
  );
};

export default Header;