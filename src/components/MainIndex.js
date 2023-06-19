import React from 'react';
import Girl from '../assets/landing-page-girl.png';

export default function MainIndex() {
  return (
    <div>
      <img src={Girl}/>
      <h1>Feel The Music</h1>
      <p>Stream over 20 thousand songs with one click</p>
      <button>Join Now</button>
    </div>
  )
}
