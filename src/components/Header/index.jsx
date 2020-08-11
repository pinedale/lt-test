import React from 'react'
import logo from '../../assets/images/logo.png';
import './Header.style.css'

const Header = () => {
    return (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-user">User no selected</p>
    </header>
    )
}

export default Header;
