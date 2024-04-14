import React from "react";
import logo from '../assets/holborton_logo.jpg';
import './Header.css';


function Header() {
  return (
      <div className="App-header">
        <img alt="logo" src={logo} className='App-logo' />
        <h1>School dashboard</h1>
      </div>
  );
}

export default Header;
