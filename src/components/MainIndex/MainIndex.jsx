import { Link } from 'react-router-dom';
import React from 'react';
import Girl from '../../assets/landing-page-girl.png';
import "../MainIndex/MainIndex.css";

export default function MainIndex() {
  return (
    <div className='main'>
      <div className='circleViolet'></div>
      <div className='circlePurple'></div>
      <div className="circlebigViolet"></div>
      <div className='imageGirl'>
        <img src={Girl} alt='girl'></img>
      </div>
      <div className='content-main'>
        <h1 className='first-content'>Feel The Music</h1>
        <p className='second-content'>
          Stream over 20 thousand songs with one <br />
          Click
        </p>
        <Link to="/join"><button className='container-button'>Join Now</button></Link>
      </div>
    </div>
  )
}