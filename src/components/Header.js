import React from 'react';
import Logo from '../assets/logo.png';
import '../css/Header.css';


export default function Header() {
  return (
    <div className='Header'>
      <div className='LogoContainer'>
        <img src={Logo} className='Logo' alt='Imagen del Logo' />
        <span className='ParrafoLogo'>Soundwave</span>
      </div>
      <nav> 
        <ul>
          <li>Discover</li>
          <li>Join</li>
        </ul>
      </nav> 
    </div>
  );
}

