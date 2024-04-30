import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Register from '../modals/Register/Register';

import './header.scss';
import logo from '../../img/VOLTON-logo.png';

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
    <div className='headerContainer' onClick={() => { navigator('/') }}>
      <header className="header">
        <img
          src={logo}
          alt="Volton Logo"
          className="header-logo"
        />
        {!isRegisterOpen && <button className="registerBtn" onClick={openModal}>Open Registration Modal</button>}
        <Register isOpen={isRegisterOpen} onClose={closeModal} />
      </header>
    </div>
  );
};

export default Header;