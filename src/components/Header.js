import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import Logo from '../assets/logo.png';
import '../css/Header.css';


export default function Header() {
  return (
    <>
      <div className='Header'>
        <Link to="/"><div className='LogoContainer'>
          <img src={Logo} className='Logo' alt='Imagen del Logo' />
          <span className='ParrafoLogo'>Soundwave</span>
        </div></Link>
        <nav>
          <ul>
            <Link to="/discover"><li>Discover</li></Link>
            <Link to="/join"><li>Join</li></Link>
          </ul>
        </nav>
        {/* <Link to="/inexistente">Error 404</Link> */}
      </div>
      {/* <div className='Header'>
        <NavLink className={({ isActive }) => (isActive ? "active-link" : null)} to="/"><div className='LogoContainer'>
          <img src={Logo} className='Logo' alt='Imagen del Logo' />
          <span className='ParrafoLogo'>Soundwave</span>
        </div></NavLink>
        <nav>
          <ul>
            <NavLink className={({ isActive }) => (isActive ? "active-link" : null)} to="discover"><li>Discover</li></NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active-link" : null)} to="join"><li>Join</li></NavLink>
          </ul>
        </nav>
      </div> */}
    </>
  );
}

