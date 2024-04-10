import React from 'react';
import './header.scss';
import logo from '../../img/VOLTON-logo.png';

const Header = () => {
  return (
    <header className="header">
      <h3 className="header-title">Placeholder</h3>
      <img
        src={logo}
        alt="Volton Logo"
        className="header-logo"
      />
    </header>
  );
};

export default Header;