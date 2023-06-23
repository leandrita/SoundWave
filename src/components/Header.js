import { Link } from 'react-router-dom';
import React from 'react';
import Logo from '../assets/logo.png';
import '../css/Header.css';


export default function Header() {
  const linkStyle = {
    textDecoration: 'none'
  };
  return (
    <>
      <div className='Header'>
        <Link to="/" style={linkStyle}><div className='LogoContainer'>
          <img src={Logo} className='Logo' alt='Imagen del Logo' />
          <span className='ParrafoLogo'>Soundwave</span>
        </div></Link>
        <nav>
          <ul>
            <Link to="/discover" style={linkStyle}><li>Discover</li></Link>
            <Link to="/join" style={linkStyle}><li>Join</li></Link>
          </ul>
        </nav>
      </div>

    </>
  );
}

