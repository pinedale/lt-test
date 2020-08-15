import React, { useEffect, useState } from 'react'
import logo from '../../assets/images/logo.png';
import './Header.style.css';

const Header = ({selectedName}) => {
  return (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p className="App-user">{selectedName || 'User no selected' }</p>
  </header>
  )
}

export default Header;
