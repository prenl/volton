import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

import Register from '../modals/Register/Register';
import Login from '../modals/Login/Login';

import './header.scss';
import logo from '../../img/VOLTON-logo.png';
import cart from '../../img/icons/shopping-cart.png';

const Header = () => {
  const user = useSelector(state => state.user);

  const navigator = useNavigate();

  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);

  const openRegister = () => {
    setIsRegisterOpen(true);
  };

  const closeRegister = () => {
    setIsRegisterOpen(false);
  };

  const handleProfileClick = () => {
    if (user.id) {
      navigator('/profile');  // Перенаправление на страницу профиля
    } else {
      setLoginOpen(true);  // Открытие модального окна входа
    }
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
        {!isRegisterOpen && <button className="registerBtn" onClick={openRegister}>Зарегестрироваться</button>}
        <Register isOpen={isRegisterOpen} onClose={closeRegister} />
        <img src={cart} alt='shopping cart' className='shoppingCart' />
        <button onClick={handleProfileClick}>
          {user.id ? 'Личный кабинет' : 'Войти'}
        </button>
        <Login isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />
      </header>
    </div>
  );
};

export default Header;