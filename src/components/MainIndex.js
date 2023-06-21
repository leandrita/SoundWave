import { Link } from 'react-router-dom';
import React from 'react';
import Girl from '../assets/landing-page-girl.png';
import "../css/MainIndex.css";

export default function MainIndex() {
  return (
    <div className='main'>
      <div className='content-main'>
        <h1>Feel The Music</h1>
        <p>
          Stream over 20 thousand songs with one <br />
          Click
        </p>
        <Link to="/join"><button>Join Now</button></Link>
      </div>
      <div className='circleVioletBg'></div>
      <div className='circlePurpleBg'></div>
      <div className="circlebigVioletBg"></div>
      <div className='image'>
        <img src={Girl} alt='girl'></img>
      </div>
    </div>
  )
}